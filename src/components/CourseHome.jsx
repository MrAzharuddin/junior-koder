import React from "react";

const metaData = [
  {
    id: "4SJv",
    title: "Programming in the Metaverse",
    text: "Introductory course to the world of Metaverse and Augmented Reality(AR). Enable your child to understand the technology before it becomes mainstream!",
    imgSrc: "",
    imgAlt: "",
  },
  {
    id: "6efS",
    title: "Introduction to Blockchain and NFTs",
    text: "Learn about Blockchain and the exciting world of NFTs. Create, share and trade your NFTs on the top NFT marketplaces.",
    imgSrc: "",
    imgAlt: "",
  },
  {
    id: "WksV",
    title: "Programming Blockchain in Python",
    text: "Introduce Blockchain to your child to make them understand how the world of Web3 works. Learn to code Blockchain in Python.",
    imgSrc: "",
    imgAlt: "",
  },
];

function CourseHome() {
  return (
    <div>
      <div className="flex flex-wrap justify-evenly gap-8 xl:w-3/4 mx-auto sm:p-0 p-8">
        {metaData.map((item) => {
          return (
            <div key={item.id} className="flex-1 flex flex-col justify-between lg:min-w-[30%] md:min-w-[40vw] sm:min-w-[60vw] min-w-[80vw] px-12 py-8 border-2 rounded-xl border-primary space-y-3">
              <div className="flex gap-4">
                <h2 className="font-extrabold text-xl text-primary">{item.title}</h2>
              </div>
              <div>
                <p className="text-secondary">{item.text}</p>
              </div>
              <div className="flex justify-center items-center">
                <button className="px-8 py-1 bg-primary rounded-full text-white font-bold">
                    Explore Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CourseHome;
