import Image from "next/image";

export default function Hero() {
    return (
        <section className="grid grid-cols-2">
        <div className="py-12">
          <h1 className="text-4xl font-semibold ">
            Everything taste <br />
            better with&nbsp; <br />
            <span className="text-red-500 font-bold">
              Foody
            </span>
          </h1>
          <p className="my-6 text-gray-500">
            Pizza is the missing thing that makes every day complete, a simple yet delicious joy in life
          </p>
          <div className="flex gap-4 flex-col md:flex-row">
            <button className="bg-red-500 text-white px-8 py-2 rounded-full">
              Order Now
            </button>
            <button className="text-gray-500 font-semibold">
              Learn More
            </button>
          </div>
        </div>
        <div className="relative">
          <Image src="/pizza.png" alt="pizza" layout={'fill'} objectFit={'contain'} />
        </div>
      </section>
    );
}