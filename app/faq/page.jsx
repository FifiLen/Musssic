import React from "react";

const FAQ = () => {
  const faqItems = [
    {
      question: "What are the dates of the festival?",
      answer:
        "The festival will take place from August 7th to August 9th, 2024.",
    },
    {
      question: "Where is the festival located?",
      answer: "The festival is located in Warsaw, Poland.",
    },
    {
      question: "How can I buy tickets?",
      answer:
        "You can buy tickets on our official website. Click on the 'Buy A Ticket' button on the homepage.",
    },
    {
      question: "What is the lineup for the festival?",
      answer:
        "You can check the full lineup on our 'Line Up' page, accessible from the main menu.",
    },
    {
      question: "Are there any age restrictions?",
      answer:
        "Yes, attendees must be at least 18 years old to enter the festival grounds.",
    },
  ];

  return (
    <div className="py-52 bg-black">
      <div className="max-w-7xl mx-auto space-y-10">
        <h2 className="text-white text-6xl font-bold tracking-tighter">FAQ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-black border-2 border-orange-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-orange-500 tracking-tighter">
                {item.question}
              </h3>
              <p className="text-white mt-4">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
