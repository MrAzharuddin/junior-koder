import React from "react";
import { images } from "../utils/images";

function FormSuccess() {
  return (
    <div className="md:min-h-[75vh] flex flex-col justify-center items-center text-center rounded-lg text-white bg-primary space-y-4 pb-8 px-6">
      <div className="success-grad p-4 rounded-full -mt-16">
        <img src={images.form.success} alt={images.form.success} />
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-bold">
          Your form has been successfully submitted!
        </h2>
        <p className="">Thanks for contacting Us! </p>
        <p className="">Will be reaching out to you SOON!</p>
        <p className="text-xs">
          Till then you can explore our versatile series of different courses
          curated especially for you child
        </p>
      </div>
    </div>
  );
}

export default FormSuccess;
