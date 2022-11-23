export default function Empty() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1>Page is under construction</h1>
      <section className="p-8 bg-primary flex flex-col space-y-6">
        {[
          {
            heading: "Fill up the prompted Lead form",
            text: "Fill your completed details as per instructed in the lead form available at the top",
          },
          {
            heading: "Fill up the prompted Lead form",
            text: "Fill your completed details as per instructed in the lead form available at the top",
          },
          {
            heading: "Fill up the prompted Lead form",
            text: "Fill your completed details as per instructed in the lead form available at the top",
          },
          {
            heading: "Fill up the prompted Lead form",
            text: "Fill your completed details as per instructed in the lead form available at the top",
          },
        ].map((res, index) => {
          return (
            <div
              key={index + "abc"}
              className="flex items-center space-x-6 left-right text-white p-8 bg-secondary rounded-xl "
            >
              <div>
                <h1 className="font-semibold text-2xl">
                  {index + 1 < 10 ? "0" + (index + 1) : index + 1}
                </h1>
              </div>
              <div className="space-y-2">
                <h1 className="font-semibold text-2xl">{res.heading}</h1>
                <p className="text-lg">{res.text}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
