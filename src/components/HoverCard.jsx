import { aboutMeta } from "../data/data";

export default function HoverCard() {
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {aboutMeta.map((meta, index) => {
          return (
            <div
              key={index}
              className="group relative rounded-lg cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
            >
              <div className="h-80 w-80 p-2 relative bg-primary">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={meta.img}
                  alt={meta.img}
                />
                <h1 className="text-white text-2xl absolute bottom-12 font-bold">
                  {meta.name}
                </h1>
              </div>
              <div className="absolute h-20 bottom-0 inset-x-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[100%] bg-secondary flex-col justify-center px-9 transition-all duration-500 group-hover:translate-y-0">
                <h1 className="text-3xl font-bold text-white">{meta.title}</h1>
                <p className="text-white mt-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {meta.description}
                </p>
              </div>
            </div>
          );
        })}
        {/* <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-96 w-72">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-3xl font-bold text-white">Beauty</h1>
            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              dolore adipisci placeat.
            </p>
            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
              See More
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
