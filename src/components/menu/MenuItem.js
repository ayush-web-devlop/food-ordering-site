export default function MenuItem() {
    return (
        <div className="bg-gray-300 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black transition-all">
            <div className="text-center">
                <img src="/Four Cheese Pizza.jpg"
                    className="rounded-full max-h-28 block mx-auto"
                    alt="pizza" />
            </div>
            <h4 className="font-semibold text-xl my-2">Four Cheese Pizza</h4>
            <p className="text-gray-500 text-sm">It is a variety of pizza in Italian cuisine that is topped with a combination of four kinds of cheese, usually melted together, with or without  tomato sauce.
            </p>
            <button className="mt-8 bg-red-500 text-white rounded-full px-4 py-2">Add to cart ₹ 250 </button>
        </div>
    );
}