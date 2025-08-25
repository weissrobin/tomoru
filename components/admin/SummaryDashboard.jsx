import { Summary } from "@/data/Summary";

export default function SummaryDashboard() {
  return (
    <div className="row-span-2 gap-4">
  <div className="row-span-2 bg-[#0a0a0a] border border-[#ffffff24] rounded-md p-6 shadow-lg">
    <h2 className="text-xl font-semibold mb-4 border-b border-[#ffffff24] pb-2">Summary</h2>

    <div className="space-y-2">
      <p><span className="font-medium text-gray-300">Monthly Revenue:</span> <span className="text-green-400 font-semibold">${Summary.monthly_revenue.toLocaleString()}</span></p>
      <p><span className="font-medium text-gray-300">Average Spend per Guest:</span> <span className="text-yellow-400 font-semibold">${Summary.avg_spending_per_guest}</span></p>
      <p><span className="font-medium text-gray-300">Monthly Guests:</span> <span className="text-blue-400 font-semibold">{Summary.monthly_guests}</span></p>
      <p><span className="font-medium text-gray-300">Profit Margin:</span> <span className="text-purple-400 font-semibold">{Summary.profit_margin_percent}%</span></p>
      <p><span className="font-medium text-gray-300">Top Selling Dish:</span> <span className="text-orange-400 font-semibold">{Summary.top_selling_dish}</span></p>
      <p><span className="font-medium text-gray-300">Top Selling Drink:</span> <span className="text-pink-400 font-semibold">{Summary.top_selling_drink}</span></p>
      <p><span className="font-medium text-gray-300">Highest Margin Item:</span> <span className="text-teal-400 font-semibold">{Summary.highest_margin_item}</span></p>
      <p><span className="font-medium text-gray-300">Average Rating:</span> <span className="text-yellow-400 font-semibold">{Summary.average_rating} ⭐</span></p>
    </div>

    <div className="mt-4">
      <p className="font-medium text-gray-300 mb-1">Positive Highlights:</p>
      <ul className="list-disc ml-6 space-y-1 text-green-300">
        {Summary.highlights.positive.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <p className="font-medium text-gray-300 mt-3 mb-1">Negative Highlights:</p>
      <ul className="list-disc ml-6 space-y-1 text-red-400">
        {Summary.highlights.negative.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
</div>

  );
}
