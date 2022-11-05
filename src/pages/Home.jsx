export default function Home() {
  return (
    <main className="min-h-[calc(100vh-9.5vh)]">
      <section className="relative bg-shape pt-16">
        <div className="flex flex-wrap justify-around items-start relative z-1">
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
              <p className="text-2xl">
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
      </section>
    </main>
  );
}
