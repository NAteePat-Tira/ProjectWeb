import React from 'react';
import { Monitor, MicOff } from 'lucide-react';


const CameraFeed = () => {
  return (
    <div className="w-full max-w-full p-4 bg-white shadow-md Camerabg cameramargin">
      {/* Live Camera Feed */}
      <div className="s mb-6">
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-700 ">Live Camera Feed</h2>
          <div className="bg-gray-400 w-full min-h-[200px] md:min-h-[240px] lg:min-h-[300px] rounded-md cameravideo">




          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-4 gap-4">
            <div className="flex space-x-2">
              <button className="px-3 py-1.5 bg-violet-600 text-white text-sm rounded hover:bg-violet-700 flex items-center">
                <Monitor className="w-4 h-4 mr-1" /> Stream
              </button>
              <button className="px-3 py-1.5 bg-black text-white text-sm rounded hover:bg-gray-800 flex items-center">
                <MicOff className="w-4 h-4 mr-1" /> Mute
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-red-600 font-medium flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                Offline
              </span>
              <button className="px-2 py-1 border rounded border-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 3a1 1 0 01.993.883L11 4v1h1a1 1 0 01.117 1.993L12 7h-1v6h1a1 1 0 01.117 1.993L12 15h-1v1a1 1 0 01-1.993.117L9 16v-1H8a1 1 0 01-.117-1.993L8 13h1V7H8a1 1 0 01-.117-1.993L8 5h1V4a1 1 0 011-1z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Part image */}
      <div>
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Part Image</h2>
        <div className="shadow-md rounded-md bg-white">
          <div className="p-2">
            <img
              src="/images/part.png"
              alt="Part"
              className="rounded-md w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CameraFeed;
