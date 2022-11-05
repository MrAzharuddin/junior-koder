export default function Home() {
  return (
    <main className="min-h-[calc(100vh-9.5vh)] bg-secondary pt-16 px-8">
      <section className="flex justify-around items-start container">
        <div className="bg-primary p-8 rounded-md w-1/3 text-secondary">
          <div className="flex flex-col space-y-2">
            <h1>Book Your Free Trial</h1>
            <div className="flex flex-col space-y-2">
              <div className="py-2">
                <input
                  className="junior-input"
                  type="text"
                  placeholder="text"
                />
              </div>
              <div className="py-2">
                <input
                  className="junior-input"
                  type="text"
                  placeholder="text"
                />
              </div>
              <div className="py-2">
                <input
                  className="junior-input"
                  type="text"
                  placeholder="text"
                />
              </div>
              <div className="py-2">
                <input
                  className="junior-input"
                  type="text"
                  placeholder="text"
                />
              </div>
              <div className="py-2">
                <input
                  className="junior-input"
                  type="text"
                  placeholder="text"
                />
              </div>
              <div>
                <p>Do you laptop/PC?</p>

                <input type="radio" name="" id="" />
                <label htmlFor="temp">Yes</label>

                <input type="radio" name="" id="" />
                <label htmlFor="temp">No</label>
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
        <div>
          <article>
            <h1>Code your Future with Junior Koder</h1>
            <p>A place where your kid is taught to love coding</p>
          </article>
          <img
            src="https://i.ibb.co/6DNRDTz/hero-student.png"
            alt="hero-student"
          />
        </div>
      </section>
    </main>
  );
}
