import { useState } from "react";

export default function Index() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["Healthcare & Life sciences"]);

  const filters = [
    "All",
    "Healthcare & Life sciences",
    "Finance", 
    "Energy & Utility",
    "Manufacturing",
    "Media & Entertainment",
    "Public Sector"
  ];

  const industries = [
    {
      title: "Manufacturing",
      count: "230",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/ea81a237091465d449054f6a8aff03c3aaf1ac20?width=1086",
      gradient: "from-teal-600 to-teal-800"
    },
    {
      title: "Energy & Utility", 
      count: "223",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/895957d32f316bf6ff8cc360d3bc1888595baec9?width=1812",
      gradient: "from-blue-900 to-teal-900"
    },
    {
      title: "Healthcare & Life-science",
      count: "12", 
      image: "https://api.builder.io/api/v1/image/assets/TEMP/202cdbc272a28cdfd20d275faaf8bd6bcc58367e?width=2138",
      gradient: "from-blue-400 to-blue-600",
      size: "large"
    },
    {
      title: "Technology",
      count: "48",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d8b4c62c6f90c19337ee55e15752bc2738cc0e53?width=1162", 
      gradient: "from-slate-400 to-slate-600"
    },
    {
      title: "Finance",
      count: "36",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/60a222b2beda87bc9c4b9c80117b2c56aeb8e843?width=1154",
      gradient: "from-slate-500 to-slate-700"
    },
    {
      title: "Aerospace & Defence", 
      count: "78",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/09d474616e6c744e598acb8117c648483dbffc68?width=5880",
      gradient: "from-slate-600 to-slate-800",
      size: "large"
    },
    {
      title: "Public Sector & Infrastructure",
      count: "19",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/e368bd19664f1429ff623ea95f3f68138bdbe27d?width=1580",
      gradient: "from-red-400 to-orange-600"
    },
    {
      title: "Construction",
      count: "24", 
      image: "https://api.builder.io/api/v1/image/assets/TEMP/ea2bd6d59ae9878a7afac6ab56aea49b99cd861d?width=2080",
      gradient: "from-slate-700 to-slate-900"
    }
  ];

  const toggleFilter = (filter: string) => {
    if (filter === "All") {
      setSelectedFilters([]);
    } else {
      setSelectedFilters(prev => 
        prev.includes(filter) 
          ? prev.filter(f => f !== filter)
          : [...prev, filter]
      );
    }
  };

  return (
    <div className="min-h-screen bg-exerea-light">
      {/* Header */}
      <header className="bg-exerea-light border-b border-gray-300">
        <div className="max-w-6xl mx-auto px-6 h-15 flex items-center justify-between">
          <div className="font-poppins font-bold text-lg text-exerea-text">
            Exerea
          </div>
          
          <nav className="hidden md:flex items-center gap-2">
            {["Agents", "Solutions", "Industries", "Research", "Resources", "Company"].map((item) => (
              <div key={item} className="px-3 py-3 text-sm font-open-sans font-semibold text-exerea-text hover:bg-gray-100 rounded-md cursor-pointer">
                {item}
              </div>
            ))}
          </nav>

          <button className="bg-exerea-primary text-exerea-light px-6 py-2.5 rounded-md text-sm font-open-sans font-semibold hover:bg-opacity-90 transition-colors">
            Contact us
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-[620px] bg-exerea-light overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/8bdf59585b1fe832cbff76985ccf857453bb53f1?width=3600"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-exerea-light"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-white font-poppins font-semibold text-base underline cursor-pointer">Home</span>
            <span className="text-white font-poppins font-semibold text-base">/</span>
            <span className="text-white font-poppins font-semibold text-base">All Industries</span>
          </div>

          {/* Title */}
          <div className="mb-8">
            <div className="flex items-center gap-1 mb-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M9.10698 5.448C9.70498 3.698 12.123 3.645 12.832 5.289L12.892 5.449L13.699 7.809C13.8839 8.35023 14.1828 8.84551 14.5754 9.26142C14.968 9.67734 15.4453 10.0042 15.975 10.22L16.192 10.301L18.552 11.107C20.302 11.705 20.355 14.123 18.712 14.832L18.552 14.892L16.192 15.699C15.6506 15.8838 15.1551 16.1826 14.739 16.5753C14.3229 16.9679 13.9959 17.4452 13.78 17.975L13.699 18.191L12.893 20.552C12.295 22.302 9.87698 22.355 9.16898 20.712L9.10698 20.552L8.30098 18.192C8.11616 17.6506 7.81735 17.1551 7.42472 16.739C7.03209 16.3229 6.55478 15.9959 6.02498 15.78L5.80898 15.699L3.44898 14.893C1.69798 14.295 1.64498 11.877 3.28898 11.169L3.44898 11.107L5.80898 10.301C6.35022 10.1161 6.84549 9.81719 7.26141 9.42457C7.67732 9.03195 8.00419 8.55469 8.21998 8.025L8.30098 7.809L9.10698 5.448ZM19 2C19.1871 2 19.3704 2.05248 19.5291 2.15147C19.6879 2.25046 19.8157 2.392 19.898 2.56L19.946 2.677L20.296 3.703L21.323 4.053C21.5105 4.1167 21.6748 4.23462 21.7952 4.39182C21.9156 4.54902 21.9866 4.73842 21.9993 4.93602C22.0119 5.13362 21.9656 5.33053 21.8662 5.50179C21.7668 5.67304 21.6188 5.81094 21.441 5.898L21.323 5.946L20.297 6.296L19.947 7.323C19.8832 7.51043 19.7652 7.6747 19.6079 7.79499C19.4506 7.91529 19.2612 7.98619 19.0636 7.99872C18.866 8.01125 18.6692 7.96484 18.498 7.86538C18.3268 7.76591 18.189 7.61787 18.102 7.44L18.054 7.323L17.704 6.297L16.677 5.947C16.4895 5.8833 16.3251 5.76538 16.2048 5.60819C16.0844 5.45099 16.0133 5.26158 16.0007 5.06398C15.9881 4.86638 16.0344 4.66947 16.1338 4.49821C16.2332 4.32696 16.3811 4.18906 16.559 4.102L16.677 4.054L17.703 3.704L18.053 2.677C18.1204 2.47943 18.248 2.30791 18.4178 2.1865C18.5876 2.06509 18.7912 1.99987 19 2Z" fill="url(#paint0_linear)"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="15.4999" y1="19.5" x2="4.49988" y2="4" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A7FEFF"/>
                    <stop offset="1" stopColor="white"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-white font-poppins font-semibold text-base">AI powered Industries</span>
            </div>
            <h1 className="text-white font-poppins font-semibold text-lg leading-7">
              Everything You Need, One Platform
            </h1>
          </div>

          {/* Search */}
          <div className="flex gap-2 mb-8 max-w-4xl">
            <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm">
              <input
                type="text"
                placeholder="Search Agent"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full bg-transparent text-sm text-gray-600 placeholder-gray-500 outline-none font-inter"
              />
            </div>
            <button className="bg-exerea-primary text-exerea-light px-6 py-2.5 rounded-md text-sm font-open-sans font-semibold shadow-sm hover:bg-opacity-90 transition-colors">
              Search
            </button>
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => {
              const isSelected = filter === "All" ? selectedFilters.length === 0 : selectedFilters.includes(filter);
              const isHealthcare = filter === "Healthcare & Life sciences";
              
              return (
                <div
                  key={filter}
                  onClick={() => toggleFilter(filter)}
                  className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm cursor-pointer transition-all ${
                    isSelected || isHealthcare
                      ? "bg-white text-exerea-text shadow-sm"
                      : "bg-white/60 text-exerea-accent"
                  }`}
                >
                  <span className="font-inter">{filter}</span>
                  {isHealthcare && (
                    <svg className="w-4 h-4" viewBox="0 0 17 18" fill="none">
                      <rect x="0.5" y="1" width="16" height="16" rx="8" stroke="#DCE5E5"/>
                      <path d="M3.25012 9.25L6.75012 12.75L13.7501 5.25" stroke="#36706E" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {!isHealthcare && !isSelected && filter !== "All" && (
                    <svg className="w-4 h-4" viewBox="0 0 17 18" fill="none">
                      <rect x="0.5" y="1" width="16" height="16" rx="8" stroke="#629091"/>
                      <path d="M8.49996 2.97919V15.0209M14.5208 9.00002H2.47913" stroke="#629091" strokeWidth="0.708333" strokeLinecap="round"/>
                    </svg>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Industry Grid */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 h-[983px]">
          {/* Left Column */}
          <div className="lg:col-span-2 flex flex-col gap-3.5">
            {/* Top Row */}
            <div className="flex gap-3.5 h-[300px]">
              <IndustryCard industry={industries[0]} />
              <IndustryCard industry={industries[1]} />
            </div>
            
            {/* Healthcare Card - Full Width */}
            <IndustryCard industry={industries[2]} className="h-[300px]" />
            
            {/* Aerospace Card - Full Width */}
            <IndustryCard industry={industries[5]} className="h-[300px]" />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-3.5">
            {/* Technology Card */}
            <IndustryCard industry={industries[3]} className="h-[150px]" />
            
            {/* Finance Card */}
            <IndustryCard industry={industries[4]} className="h-[150px]" />
            
            {/* Public Sector Card */}
            <IndustryCard industry={industries[6]} className="h-[300px]" />
            
            {/* Construction Card */}
            <IndustryCard industry={industries[7]} className="h-[300px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

interface IndustryCardProps {
  industry: {
    title: string;
    count: string;
    image: string;
    gradient: string;
  };
  className?: string;
}

function IndustryCard({ industry, className = "h-[300px]" }: IndustryCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-xl bg-gray-100 shadow-sm group cursor-pointer transition-transform hover:scale-[1.02] ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={industry.image}
          alt={industry.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center p-4 text-center">
        <h3 className="text-white font-inter font-semibold text-lg leading-tight mb-1 drop-shadow-sm">
          {industry.title}
        </h3>
        <p className="text-white/80 font-inter text-lg font-medium drop-shadow-sm">
          {industry.count}
        </p>
      </div>
    </div>
  );
}
