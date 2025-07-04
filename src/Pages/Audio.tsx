import { FaHeadphones, FaMusic } from "react-icons/fa";

const Audio = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          <FaHeadphones className="inline-block mr-2 text-rose-600" />
          Audio Library
        </h1>

        <div className="space-y-6">
          {/* Example Audio Card */}
          <div className="flex items-center p-4 bg-rose-100 rounded shadow hover:shadow-lg transition">
            <FaMusic className="text-rose-600 mr-4 text-3xl" />
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-800">Relaxing Track</h2>
              <audio controls className="w-full mt-2">
                <source src="/sample-audio.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>

          <div className="flex items-center p-4 bg-rose-100 rounded shadow hover:shadow-lg transition">
            <FaMusic className="text-rose-600 mr-4 text-3xl" />
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-800">Motivational Beat</h2>
              <audio controls className="w-full mt-2">
                <source src="/sample-audio-2.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-600">
          <p>Upload more tracks or integrate with a streaming API for dynamic audio content.</p>
        </div>
      </div>
    </section>
  );
};

export default Audio;
