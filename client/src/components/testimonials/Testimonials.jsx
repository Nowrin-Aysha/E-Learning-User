import React from "react";
import "./testimonials.css";

const Testimonials = () => {
  const studentTestimonials = [
    {
      id: 1,
      name: "Famnas",
      position: "Student",
      message:
        "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
      image:
        "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    },
    {
      id: 2,
      name: "Nowrin",
      position: "Student",
      message:
        "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
      image:
        "https://th.bing.com/th/id/OIP.GKAiW3oc2TWXVEeZAzrWOAHaJF?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 3,
      name: "Jaisal",
      position: "Student",
      message:
        "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
      image:
        "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    },
    {
      id: 4,
      name: "Unaisa",
      position: "Student",
      message:
        "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
      image:
        "https://th.bing.com/th/id/OIP.GKAiW3oc2TWXVEeZAzrWOAHaJF?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
  ];

  const mentorTestimonials = [
    {
      id: 5,
      name: "Dr. Ahmed",
      position: "Mentor",
      message:
        "Teaching on this platform has been an amazing experience. The students are engaged, and the tools provided make it easy to create effective courses.",
      image:
      "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    },
    {
      id: 6,
      name: "Sarah Jones",
      position: "Mentor",
      message:
        "I love how this platform empowers instructors with all the necessary resources to teach effectively. It’s truly an educator’s dream!",
      image:
        "https://th.bing.com/th/id/OIP.GKAiW3oc2TWXVEeZAzrWOAHaJF?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 7,
      name: "Michael Brown",
      position: "Mentor",
      message:
        "A fantastic platform to reach students worldwide. The flexibility to design courses and interact with students is outstanding.",
      image:
        "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    },
    {
      id: 8,
      name: "Lisa Williams",
      position: "Mentor",
      message:
        "This platform provides excellent support for educators. The tools available make the teaching process smooth and efficient.",
      image:
        "https://th.bing.com/th/id/OIP.GKAiW3oc2TWXVEeZAzrWOAHaJF?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Students Say</h2>
      <div className="testmonials-cards">
        {studentTestimonials.map((e) => (
          <div className="testimonial-card" key={e.id}>
            <div className="student-image">
              <img src={e.image} alt={e.name} />
            </div>
            <p className="message">"{e.message}"</p>
            <div className="info">
              <p className="name">{e.name}</p>
              <p className="position">{e.position}</p>
              
            </div>
          </div>
        ))}
      </div>

      <h2>What Our Mentors Say</h2>
      <div className="testmonials-cards">
        {mentorTestimonials.map((e) => (
          <div className="testimonial-card" key={e.id}>
            <div className="student-image">
              <img src={e.image} alt={e.name} />
            </div>
            <p className="message">"{e.message}"</p>
            <div className="info">
              <p className="name">{e.name}</p>
              <p className="position">{e.position}</p>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
