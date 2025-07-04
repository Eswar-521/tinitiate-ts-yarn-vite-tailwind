import { FaBalanceScale, FaChartBar } from "react-icons/fa";

const Comparison = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          <FaBalanceScale className="inline-block mr-2 text-green-600" />
          Product Comparison
        </h1>

        {/* Comparison table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse shadow border rounded-lg">
            <thead className="bg-gradient-to-r from-green-500 to-green-700 text-white">
              <tr>
                <th className="p-4">Feature</th>
                <th className="p-4">Product A</th>
                <th className="p-4">Product B</th>
                <th className="p-4">Product C</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="p-4 border">Price</td>
                <td className="p-4 border">$29</td>
                <td className="p-4 border">$49</td>
                <td className="p-4 border">$39</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="p-4 border">Storage</td>
                <td className="p-4 border">10GB</td>
                <td className="p-4 border">50GB</td>
                <td className="p-4 border">30GB</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="p-4 border">Support</td>
                <td className="p-4 border">Email</td>
                <td className="p-4 border">24/7</td>
                <td className="p-4 border">Phone & Email</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="mt-8 border-t pt-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
            <FaChartBar className="mr-2 text-purple-600" />
            Comparison Summary
          </h2>
          <p className="text-gray-600 leading-relaxed">
            This comparison helps you evaluate features side-by-side to make an informed decision.
            Add more rows and columns to compare additional products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
