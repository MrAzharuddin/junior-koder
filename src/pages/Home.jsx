export default function Home() {
  return (
    <main className="min-h-[calc(100vh-9.5vh)] relative space-y-4">
      <section className="relative">
        <div className="relative bg-shape pt-16">
          <div className="flex flex-wrap justify-around items-start relative z-2">
            <div className="bg-primary p-12 rounded-md text-secondary w-full md:max-w-[45vw] relative">
              <div className="flex flex-col space-y-2 text-lg">
                <h1 className="text-center font-bold">Book Your Free Trial</h1>
                <div className="flex flex-col space-y-2">
                  <div className="py-2">
                    <input
                      className="junior-input"
                      type="text"
                      placeholder="Child’s Name"
                    />
                  </div>
                  <div className="py-2">
                    <input
                      className="junior-input"
                      type="text"
                      placeholder="Parent’s Name"
                    />
                  </div>
                  <div className="py-2">
                    <input
                      className="junior-input"
                      type="text"
                      placeholder="Parent’s Number"
                    />
                  </div>
                  <div className="py-2">
                    <input
                      className="junior-input"
                      type="text"
                      placeholder="Parent’s email ID"
                    />
                  </div>
                  <div className="py-2">
                    <input
                      className="junior-input"
                      type="text"
                      placeholder="Standard selection Table"
                    />
                  </div>
                  <div>
                    <p>Do you laptop/PC?</p>
                    <div className="flex space-x-12">
                      <div>
                        <input type="radio" name="" id="" />
                        <label htmlFor="temp">Yes</label>
                      </div>
                      <div>
                        <input type="radio" name="" id="" />
                        <label htmlFor="temp">No</label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <input type="checkbox" name="check" id="" />
                    <label htmlFor="check">
                      Get reminder for class on whatsapp?
                    </label>
                  </div>
                  <div>
                    <button>Book Free Trial</button>
                  </div>
                  <div>
                    <p>Already have an account? | LOGIN</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-12 md:max-w-[45vw] text-primary text-center relative">
              <article className="flex flex-col space-y-4">
                <h1 className="font-bold text-5xl">
                  Code your Future with Junior Koder
                </h1>
                <p className="text-xl">
                  A place where your kid is taught to love coding
                </p>
              </article>
              <img
                src="https://i.ibb.co/6DNRDTz/hero-student.png"
                alt="hero-student"
              />
            </div>
          </div>
          <div class="custom-shape-divider-bottom">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
        <div className="flex justify-center items-center relative -mt-12 pb-12">
          <div className="bg-primary px-8 py-4 rounded-md text-center space-y-1 text-white">
            <p>Explore the new & most interesting domain of your life</p>
            <h2 className="text-3xl font-semibold">WITH US!</h2>
            <div className="py-2">
              <ol className="flex justify-center items-center flex-wrap space-y-2">
                <li className="w-1/2">Well guided sessions</li>
                <li className="w-1/2">Well guided sessions</li>
                <li className="w-1/2">Well guided sessions</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 space-y-8 px-8">
        <h1 className="text-grad w-2/3 text-5xl">
          Explore Our Courses especially curated for YOUR CHILD
        </h1>
        <p>Design Yet to update!!</p>
        <div>
          <h1 className="text-grad text-5xl text-right">
            Steps to avail Our Free Trial Classes
          </h1>
          <p className="text-grad text-xl text-right">
            Follow below steps to get started
          </p>
        </div>
      </section>
      <section className="p-8 bg-primary">
        [{heading:"", text:"Fill your completed details as per instructed in the lead form
            available at the top"}]
        {/* <div>
          <h2>
            01 {'\t'}{'\t\t'}
            <span>
              Fill up the prompted Lead form <br /> Fill your completed details
              as per instructed in the lead form available at the top
            </span>
          </h2>
        </div>
        <div>
          <h2>01 {'\t'} Fill up the prompted Lead form</h2>
          <p>
            Fill your completed details as per instructed in the lead form
            available at the top
          </p>
        </div>{' '}
        <div>
          <h2>01 {'\t'} Fill up the prompted Lead form</h2>
          <p>
            Fill your completed details as per instructed in the lead form
            available at the top
          </p>
        </div> */}
      </section>
    </main>
  );
}
