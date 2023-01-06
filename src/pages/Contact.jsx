export default function Contact() {
  const contact = [
    {
      title: "Student Helpline",
      email: "abc@xyz.com",
      phone: "1800 2099 199",
    },
    {
      title: "Business Helpline",
      email: "abc@xyz.com",
      phone: "1800 2099 199",
    },
    {
      title: "Find Us",
      map: "Junior Koder location",
      address:
        "LGF-C8, B1/19A Mohan Cooperative Society, Mohan Estate. Badarpur-New Delhi 110044",
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      <div className="relative bg-primary min-h-[30vh] flex justify-center items-center">
        <h1 className="text-center text-white font-bold text-4xl">
          Contact Us
        </h1>
        <div className="absolute -bottom-10 w-3/4 bg-background">
          {contact.map((item, idx) => {
            return (
              <div key={idx}>
                <div>
                  <h2>{item.title}</h2>
                  <p>
                    {Object.keys(item).includes("email") ? (
                      <a href="mailto:someone@example.com">{item.email}</a>
                    ) : (
                      <a href="mailto:someone@example.com">{item.map}</a>
                    )}
                  </p>
                  <p>
                    {Object.keys(item).includes("phone") ? (
                      <a tel="mailto:someone@example.com">{item.phone}</a>
                    ) : (
                      <address>{item.address}</address>
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
