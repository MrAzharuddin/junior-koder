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
                <h1 className="text-white md:text-2xl text-xl absolute md:bottom-12 bottom-8 left-6 font-bold">
                  {meta.name}
                </h1>
              </div>
              <div className="absolute h-20 bottom-0 inset-x-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[100%] bg-secondary flex-col justify-center md:px-9 px-6 transition-all duration-500 group-hover:translate-y-0">
                <h1 className="md:text-3xl text-2xl font-bold text-white text-center">{meta.title}</h1>
                <p className="text-white text-center mt-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-semibold ">
                  {meta.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
