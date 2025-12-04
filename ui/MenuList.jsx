import { AddToOrder } from "@/components/AddToOrder";

export function MenuList({ menu }) {
    return (
        <>
            {menu.map((item, index) => (
                <a
                    className="group relative block overflow-hidden rounded-sm shadow-md"
                    key={index}
                    href="#"
                >
                    <input type="hidden" value={item.types} />
                    <img
                        src={item.image}
                        alt={item.name}
                        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                    />

                    <div className="relative bg-white p-6">
                        <p className="text-gray-700">{item.price}</p>

                        <h3 className="mt-1.5 text-lg font-medium text-gray-900">
                            {item.name}
                        </h3>

                        <p className="mt-1.5 line-clamp-3 text-gray-700">
                            {item.description}
                        </p>

                        <AddToOrder item={item} />
                    </div>
                </a>
            ))}
        </>
    );
}
