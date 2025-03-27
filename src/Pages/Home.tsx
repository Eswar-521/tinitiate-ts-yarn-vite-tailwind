// const Home = () => {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <h1 className="text-4xl font-bold text-gray-800">Welcome to the Home Page</h1>
//       <p className="mt-4 text-lg text-gray-600">
//         This is a simple home page using Tailwind CSS.
//       </p>
//     </div>
//   );
// };

// export default Home;


const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 text-white flex flex-col items-center justify-center">
      {/* Hero Section */}
      <h1 className="text-5xl font-extrabold mb-4">Welcome to Our Courses!</h1>
      <p className="text-lg mb-6 max-w-lg text-center">
        Discover amazing products at the best prices. Shop now and enjoy great deals.
      </p>

      {/* Call to Action Buttons */}
      <div className="space-x-4">
        <a
          href="/catalog"
          className="bg-white text-purple-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition"
        >
          Explore Products
        </a>
        <a
          href="/cart"
          className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition"
        >
          View Cart
        </a>
      </div>

      {/* Decorative Section */}
      <div className="mt-12 w-full flex justify-center">
        <img
          src="https://source.unsplash.com/800x400/?shopping,store"
          alt="Shopping"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
