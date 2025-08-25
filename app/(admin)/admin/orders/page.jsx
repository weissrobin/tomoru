import { Orders as OrderList } from "@/data/Orders";

export default async function Orders() {
  return (
    <main className="pt-10">
      <div className="border-b border-[#ffffff24]">
        <div className="container">
          <h1 className="text-3xl font-medium">Orders</h1>
          <p className="mb-10 mt-3">Here you can review recent and active orders placed by guests.</p>
        </div>
      </div>

      <div className="container py-10 grid gap-5">
        {OrderList.map((order) => (
          <div
            key={order.id}
            className="bg-[#0a0a0a] border border-[#ffffff24] rounded-lg py-4 px-5 shadow-lg flex items-center justify-between hover:border-white cursor-pointer transition-all"
          >
            <div>
              <h2 className="text-base font-semibold text-white">
                #{order.id} - {order.customer}
              </h2>
              <p className="text-gray-400 text-sm">
                {order.date} at {order.time} · ${order.total.toFixed(2)}
              </p>
              <p className="text-gray-300 text-sm mt-1">
                Items: {order.items.join(", ")}
              </p>
            </div>

            <OrderStatusBadge status={order.status} />
          </div>
        ))}
      </div>
    </main>
  );
}

function OrderStatusBadge({ status }) {
  const statusStyles = {
    Completed: "bg-green-500/10 text-green-400",
    "In Progress": "bg-yellow-500/10 text-yellow-400",
    Canceled: "bg-red-500/10 text-red-400",
  };

  return (
    <span
      className={`text-sm px-3 py-1 rounded-full font-medium self-start md:self-center ${statusStyles[status] || "bg-gray-500/10 text-gray-400"}`}
    >
      {status}
    </span>
  );
}
