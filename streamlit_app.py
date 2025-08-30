import streamlit as st
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
from PIL import Image
import requests
from io import BytesIO

# Page configuration
st.set_page_config(
    page_title="Exera AI - Industries Platform",
    page_icon="🚀",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS for styling
st.markdown("""
<style>
    .main-header {
        background: linear-gradient(90deg, #0ea5e9, #06b6d4);
        padding: 2rem;
        border-radius: 10px;
        color: white;
        text-align: center;
        margin-bottom: 2rem;
    }
    .industry-card {
        background: white;
        padding: 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        margin: 1rem 0;
        border-left: 4px solid #0ea5e9;
    }
    .metric-card {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 1.5rem;
        border-radius: 10px;
        text-align: center;
    }
    .search-box {
        background: white;
        padding: 1rem;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
</style>
""", unsafe_allow_html=True)

# Sample industries data (you can replace with your actual data)
industries_data = {
    "Manufacturing": {"count": 230, "growth": "+12%", "color": "#0ea5e9"},
    "Energy & Utility": {"count": 223, "growth": "+8%", "color": "#06b6d4"},
    "Healthcare & Life-science": {"count": 12, "growth": "+25%", "color": "#3b82f6"},
    "Technology": {"count": 48, "growth": "+18%", "color": "#8b5cf6"},
    "Finance": {"count": 36, "growth": "+15%", "color": "#ef4444"},
    "Aerospace & Defence": {"count": 78, "growth": "+22%", "color": "#f59e0b"},
    "Public Sector & Infrastructure": {"count": 19, "growth": "+10%", "color": "#10b981"},
    "Construction": {"count": 24, "growth": "+14%", "color": "#84cc16"}
}

# Main header
st.markdown("""
<div class="main-header">
    <h1>🚀 Exera AI - Industries Platform</h1>
    <p>Everything You Need, One Platform</p>
</div>
""", unsafe_allow_html=True)

# Search functionality
col1, col2 = st.columns([3, 1])
with col1:
    search_query = st.text_input("🔍 Search Agent", placeholder="Enter your search query...")
with col2:
    search_button = st.button("Search", type="primary")

# Filter options
st.subheader("📊 Filter by Industry")
selected_industries = st.multiselect(
    "Select industries to view:",
    options=list(industries_data.keys()),
    default=list(industries_data.keys())
)

# Metrics row
st.subheader("📈 Key Metrics")
col1, col2, col3, col4 = st.columns(4)

total_companies = sum(industries_data[ind]["count"] for ind in selected_industries)
avg_growth = sum(float(industries_data[ind]["growth"].replace("+", "").replace("%", "")) for ind in selected_industries) / len(selected_industries)

with col1:
    st.markdown(f"""
    <div class="metric-card">
        <h3>Total Companies</h3>
        <h2>{total_companies:,}</h2>
    </div>
    """, unsafe_allow_html=True)

with col2:
    st.markdown(f"""
    <div class="metric-card">
        <h3>Industries</h3>
        <h2>{len(selected_industries)}</h2>
    </div>
    """, unsafe_allow_html=True)

with col3:
    st.markdown(f"""
    <div class="metric-card">
        <h3>Avg Growth</h3>
        <h2>+{avg_growth:.1f}%</h2>
    </div>
    """, unsafe_allow_html=True)

with col4:
    st.markdown(f"""
    <div class="metric-card">
        <h3>Active</h3>
        <h2>✅</h2>
    </div>
    """, unsafe_allow_html=True)

# Industries grid
st.subheader("🏭 Industries Overview")

# Create DataFrame for visualization
df = pd.DataFrame([
    {"Industry": ind, "Count": data["count"], "Growth": data["growth"], "Color": data["color"]}
    for ind, data in industries_data.items() if ind in selected_industries
])

# Bar chart
fig = px.bar(
    df, 
    x="Industry", 
    y="Count",
    color="Industry",
    title="Companies by Industry",
    color_discrete_map={ind: data["color"] for ind, data in industries_data.items()}
)
fig.update_layout(height=400, showlegend=False)
st.plotly_chart(fig, use_container_width=True)

# Industry cards
st.subheader("💼 Industry Details")
cols = st.columns(2)

for idx, (industry, data) in enumerate(industries_data.items()):
    if industry in selected_industries:
        col_idx = idx % 2
        with cols[col_idx]:
            st.markdown(f"""
            <div class="industry-card">
                <h3>{industry}</h3>
                <p><strong>Companies:</strong> {data['count']:,}</p>
                <p><strong>Growth:</strong> <span style="color: green;">{data['growth']}</span></p>
                <p><strong>Status:</strong> <span style="color: blue;">Active</span></p>
            </div>
            """, unsafe_allow_html=True)

# Growth trend chart
st.subheader("📊 Growth Trends")
growth_data = []
for ind, data in industries_data.items():
    if ind in selected_industries:
        growth_value = float(data["growth"].replace("+", "").replace("%", ""))
        growth_data.append({"Industry": ind, "Growth": growth_value})

growth_df = pd.DataFrame(growth_data)
fig_growth = px.line(
    growth_df,
    x="Industry",
    y="Growth",
    title="Industry Growth Trends",
    markers=True
)
fig_growth.update_layout(height=400)
st.plotly_chart(fig_growth, use_container_width=True)

# Sidebar
with st.sidebar:
    st.header("⚙️ Settings")
    
    # Theme selection
    theme = st.selectbox("Choose Theme", ["Light", "Dark"])
    
    # Data refresh
    if st.button("🔄 Refresh Data"):
        st.rerun()
    
    # Export options
    st.subheader("📤 Export Data")
    if st.button("Export to CSV"):
        csv = df.to_csv(index=False)
        st.download_button(
            label="Download CSV",
            data=csv,
            file_name="exera_industries_data.csv",
            mime="text/csv"
        )
    
    # About section
    st.subheader("ℹ️ About")
    st.info("""
    **Exera AI Industries Platform**
    
    A comprehensive platform showcasing industry insights and company data across various sectors.
    
    Built with Streamlit and powered by AI.
    """)

# Footer
st.markdown("---")
st.markdown("""
<div style="text-align: center; color: #666; padding: 2rem;">
    <p>© 2024 Exera AI. All rights reserved.</p>
    <p>Built with ❤️ using Streamlit</p>
</div>
""", unsafe_allow_html=True)

# Handle search functionality
if search_button and search_query:
    st.success(f"🔍 Searching for: {search_query}")
    # Add your search logic here
    st.info("Search functionality can be integrated with your backend API or database.")
