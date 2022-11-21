import { useState } from 'react';
import { tabsData, homeMeta } from '../data/data';

export default function OwnTab() {
  const [choice, setChoice] = useState('001');

  return (
    <>
      <div className="flex justify-center ">
        <div className="space-y-6">
          <div className="flex justify-center space-x-8 ">
            {tabsData.map((value) => {
              return (
                <button
                  key={value.id}
                  className={`px-4 py-1 rounded-md transition-all duration-700 ease-in-out delay-50 ${
                    value.id === choice
                      ? 'bg-blue-400'
                      : 'bg-transparent opacity-50'
                  } `}
                  onClick={(e) => {
                    e.preventDefault();
                    setChoice(value.id);
                  }}
                >
                  {value.buttonText}
                </button>
              );
            })}
          </div>
          <div className="flex space-x-8">
            {homeMeta[choice].map((value, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    choice === '001'
                      ? 'opacity-100'
                      : choice === '002'
                      ? 'bg-orange-400'
                      : choice === '003'
                      ? 'opacity-100'
                      : 'opacity-0'
                  } transition-all duration-700 py-10 px-4`}
                >
                  <img
                    className="p-2"
                    src="https://thurrott.s3.amazonaws.com/2016/03/350x150.gif"
                    alt="dummy"
                  />
                  <h2>{value.name}</h2>
                  <p>Total Duration : {value.duration}</p>
                  <p>No of classes : {value.classes}</p>
                  <p>No of projects : {value.projects}</p>
                  <button>Explore Now</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
