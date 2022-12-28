import React from "react";
import OwnTab from "../components/OwnTab";
import { mainCurriculum } from "../data/data";
import { images } from "../utils/images";

function Courses() {
  return (
    <main>
      <section className="space-y-16 py-6 ">
        <div className="text-center  space-y-4">
          <h1 className="font-bold text-4xl text-primary">
            Courses Curated For You
          </h1>
          <p className="text-xl text-grad font-medium">
            Explore our courses especially curated for your child
          </p>
        </div>

        <div className="sm:px-0 px-4">
          <OwnTab curriculum={mainCurriculum} />
        </div>

        <div className="flex flex-wrap justify-around items-center xl:px-20 lg:px-12 px-4 pb-20">
          <div className="md:flex-1">
            <img
              className=""
              src={images.courses.coursesBottom}
              alt={"Courses"}
            />
          </div>
          <div className="md:flex-1">
            <h2 className="md:text-right text-center text-3xl font-bold text-primary px-8">
              Let’s launch the rocket of very new and most thrilling skill of
              your future
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Courses;
