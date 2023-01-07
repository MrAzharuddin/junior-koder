import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../utils/images";

function SuccessForm() {
  return (
    <div className="flex flex-col md:w-1/2 mx-auto justify-center items-center text-center rounded-lg text-white bg-primary space-y-4 md:py-12 py-8 md:px-12 px-6">
      <div className="success-grad p-4 rounded-full">
        <img src={images.form.success} alt={images.form.success} />
      </div>
      <div className="space-y-4">
        <h2 className="text-3xl font-bold md:w-3/4 mx-auto">
          Your form has been successfully submitted!
        </h2>
        <p className="text-lg">Thanks for contacting Us! </p>
        <p className="text-xl font-semibold">
          Will be reaching out to you SOON!
        </p>
        <p className="hidden">
          Till then you can explore our versatile series of different courses
          curated especially for you child
        </p>
      </div>
      <div className="flex justify-center items-center py-4">
        <Link
          to="/"
          className="bg-white text-primary shadow-md md:text-lg text-sm font-bold rounded-full px-6 py-1"
        >
          Continue Browsing
        </Link>
      </div>
    </div>
  );
}

export default SuccessForm;
