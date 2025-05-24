import { Play, User, BookOpen, Check } from "lucide-react"

const FirstSection = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#1a1b3a] text-gray-700 dark:text-white ">
      {/* Features Section */}
      <div className="container mx-auto px-6 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Video Training Card */}
          <div className="group relative p-6 rounded-lg border border-gray-700 hover:border-[#A1D302] transition-all duration-500 bg-gray-800/30 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-[#A1D302]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-[#A1D302] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Play className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Video Training</h3>
              <p className="text-gray-400">With unlimited courses</p>
            </div>
          </div>

          {/* Expert Teacher Card */}
          <div className="group relative p-6 rounded-lg border border-gray-700 hover:border-[#00a9bb] transition-all duration-500 bg-gray-800/30 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00a9bb]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-[#00a9bb] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <User className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Teacher</h3>
              <p className="text-gray-400">With unlimited courses</p>
            </div>
          </div>

          {/* Versatile Course Card */}
          <div className="group relative p-6 rounded-lg border border-gray-700 hover:border-[#006174] transition-all duration-500 bg-gray-800/30 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-[#006174]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-[#006174] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Versatile Course</h3>
              <p className="text-gray-400">With unlimited courses</p>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="Online Learning"
                className="w-full max-w-md mx-auto rounded-2xl"
              />
            </div>
            {/* Decorative shapes */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-[#A1D302] rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#00a9bb] rounded-full opacity-30 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-0 w-12 h-12 bg-[#006174] rounded-full opacity-25 animate-pulse delay-500"></div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                About Us
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Welcome to the{" "}
              <span className="relative">
                <span className="text-[#A1D302]">Online</span>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#A1D302] rounded-full"></div>
              </span>
              <br />
              Learning Center
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed">
              Forging relationships between multi to national Governments and global NGOs begins.
            </p>

            <div className="space-y-4">
              {[
                "Explore a variety of fresh educational teach",
                "Explore a variety of fresh educational teach",
                "Explore a variety of fresh educational teach",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="w-6 h-6 bg-[#00a9bb] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-[#A1D302] to-[#00a9bb] rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#A1D302]/25">
                <span className="relative z-10 flex items-center space-x-2">
                  <span>More About</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00a9bb] to-[#006174] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstSection
