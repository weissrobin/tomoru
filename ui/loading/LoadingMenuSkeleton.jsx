"use client";

export default function LoadingMenuSkeleton() {
  return (
    <>

        {[...Array(3)].map((_, i) => (
            <a
            key={i}
            className="group relative block overflow-hidden rounded-sm shadow-md animate-pulse"
            >
            <div className="h-64 w-full bg-gray-200 sm:h-72"></div>
            <div className="relative bg-white p-6">
                <p className="bg-gray-200 rounded-sm text-gray-200 w-max">20.00 $</p>

                <h3 className="mt-1.5 text-lg font-medium bg-gray-200 rounded-sm text-gray-200 w-max">
                Lorem, ipsum dolor.
                </h3>

                <p className="mt-1.5 line-clamp-3 bg-gray-200 rounded-sm text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

                <form className="mt-4 flex gap-4">
                <button className="bg-gray-200 w-full text-gray-200 text-sm px-4 py-3">
                    Add to Order
                </button>
                </form>
            </div>
            </a>
        ))}
    </>
  );
}
