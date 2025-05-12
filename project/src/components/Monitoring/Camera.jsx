import React from 'react';
import { Monitor, MicOff } from 'lucide-react';
import '../../styles/monitoring.css';


const CameraFeed = () => {
  return (
    <div className="w-full max-w-full p-4 bg-white shadow-md Camerabg cameramargin">
      {/* Live Camera Feed */}
      <div className="s mb-6">
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-700 ">Live Camera Feed</h2>
          <div className="bg-gray-400 w-full min-h-[200px] md:min-h-[240px] lg:min-h-[300px] rounded-md cameravideo relative overflow-hidden">
            <iframe
              src="https://drive.google.com/file/d/1VHs5GSD7UhEIchxBXrvKAj0U7wBArp2-/preview"
              className="absolute top-0 left-0 w-full h-full"
              allow="autoplay"
              title="Live Feed"
            />
          </div>


      </div>
      </div>

      {/* Part image */}
      <div className='margin'>
        <h2 className="text-xl font-bold text-gray-700 ">Part Image</h2>
        <div className="shadow-md rounded-md bg-white">
          <div className="p-2 flex justify-center items-center pt-[10px] margin ">
            <img
              src="/part.png"
              alt="Part"
              className="rounded-md object-contain w-200 h-auto"
            />
          </div>


        </div>
      </div>
    </div>
  );
}

export default CameraFeed;
