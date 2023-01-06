import React from 'react'

function BasicVerify({routeUpdate}) {
  function otpHandler() {
    alert("jhgjh")
    routeUpdate()
  }
  return (
    <div className="bg-primary rounded-lg md:w-1/2 mx-auto md:p-12 p-4 space-y-8 shadow-lg">
      <h1 className="font-bold text-center md:text-3xl text-xl">
        Fill out your basic details
      </h1>
      <div className="flex justify-center items-center">
        <button
          onClick={otpHandler}
          className="bg-white text-primary shadow-md md:text-lg text-sm font-bold rounded-full px-6 py-1"
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default BasicVerify