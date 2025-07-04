import { FaVideo, FaPlay } from "react-icons/fa";

const Video = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          <FaVideo className="inline-block mr-2 text-blue-600" />
          Video Gallery
        </h1>

        <div className="space-y-8">
          {/* Example Video Card */}
          <div className="bg-blue-100 rounded shadow hover:shadow-lg transition overflow-hidden">
            <div className="relative pb-[56.25%]"> {/* 16:9 aspect ratio */}
              <video
                controls
                className="absolute top-0 left-0 w-full h-full rounded"
              >
                <source src="/sample-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                <FaPlay className="text-blue-600 mr-2" /> Inspirational Clip
              </h2>
              <p className="text-gray-600 mt-1">
                Watch this motivational video to boost your day.
              </p>
            </div>
          </div>

          <div className="bg-blue-100 rounded shadow hover:shadow-lg transition overflow-hidden">
            <div className="relative pb-[56.25%]">
              <video
                controls
                className="absolute top-0 left-0 w-full h-full rounded"
              >
                <source src="/sample-video-2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                <FaPlay className="text-blue-600 mr-2" /> Nature Documentary
              </h2>
              <p className="text-gray-600 mt-1">
                Discover the beauty of nature in this short documentary.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-600">
          <p>Upload more videos or integrate with a streaming service to extend this gallery.</p>
        </div>
      </div>
    </section>
  );
};

export default Video;
