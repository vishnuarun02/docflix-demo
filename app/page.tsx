import Image from 'next/image'

export default function Home() {
  const videos = [
    {
      id: 1,
      title: "Advanced Cardiac Surgery Techniques",
      duration: "45:30",
      author: "Dr. Sarah Johnson",
      thumbnail: "/medical-thumb-1.jpg"
    },
    {
      id: 2,
      title: "Emergency Room Best Practices",
      duration: "32:15",
      author: "Dr. Michael Chen",
      thumbnail: "/medical-thumb-2.jpg"
    },
    {
      id: 3,
      title: "Modern Neurosurgery Methods",
      duration: "54:20",
      author: "Dr. Emily Parker",
      thumbnail: "/medical-thumb-3.jpg"
    },
    {
      id: 4,
      title: "Pediatric Care Fundamentals",
      duration: "28:45",
      author: "Dr. James Wilson",
      thumbnail: "/medical-thumb-4.jpg"
    },
    // Add more videos as needed
  ];

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">DocFlix</h1>
          <p className="text-gray-600 mt-1">Professional Medical Learning Platform</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6">Featured Medical Videos</h2>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500">[Thumbnail]</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{video.title}</h3>
                <p className="text-gray-600 text-sm">{video.author}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-500 text-sm">{video.duration}</span>
                  <button className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-600 transition-colors">
                    Watch
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}