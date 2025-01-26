'use client';
import { useState } from 'react';

export default function Home() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const videos = [
    {
      id: 1,
      title: "Advanced Cardiac Surgery Techniques",
      duration: "45:30",
      author: "Dr. Sarah Johnson",
      category: "Cardiology",
      views: "2.4k"
    },
    {
      id: 2,
      title: "Emergency Room Best Practices",
      duration: "32:15",
      author: "Dr. Michael Chen",
      category: "Emergency Medicine",
      views: "1.8k"
    },
    {
      id: 3,
      title: "Modern Neurosurgery Methods",
      duration: "54:20",
      author: "Dr. Emily Parker",
      category: "Neurology",
      views: "3.1k"
    },
    {
      id: 4,
      title: "Pediatric Care Fundamentals",
      duration: "28:45",
      author: "Dr. James Wilson",
      category: "Pediatrics",
      views: "1.5k"
    },
    {
      id: 5,
      title: "Orthopedic Surgery Masterclass",
      duration: "41:30",
      author: "Dr. Lisa Rodriguez",
      category: "Orthopedics",
      views: "2.7k"
    },
    {
      id: 6,
      title: "Modern Oncology Treatments",
      duration: "37:15",
      author: "Dr. Robert Chang",
      category: "Oncology",
      views: "2.2k"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white animate-fade-in">
            DocFlix
            <span className="inline-block animate-pulse bg-yellow-400 text-blue-800 text-sm font-semibold px-2 py-1 rounded-full ml-3">
              BETA
            </span>
          </h1>
          <p className="text-blue-100 mt-2 text-lg">Professional Medical Learning Platform</p>
        </div>
      </header>

      {/* Categories */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {["All", "Cardiology", "Emergency", "Neurology", "Pediatrics", "Surgery"].map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors whitespace-nowrap"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-8 text-gray-800">Featured Medical Videos</h2>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredId(video.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {hoveredId === video.id ? (
                    <div className="w-16 h-16 bg-blue-600 bg-opacity-90 rounded-full flex items-center justify-center transform scale-110 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-blue-500 bg-opacity-75 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                    {video.category}
                  </span>
                  <span className="text-gray-400 text-xs">{video.views} views</span>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{video.author}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">{video.duration}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors transform hover:scale-105 duration-200">
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}