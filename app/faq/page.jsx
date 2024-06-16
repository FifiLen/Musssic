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
    {
      question: "Is there parking available?",
      answer:
        "Yes, there is ample parking available at the festival grounds. Parking passes can be purchased on our website.",
    },
    {
      question: "Can I bring my own food and drinks?",
      answer:
        "No outside food or drinks are allowed. There will be a variety of food and beverage vendors at the festival.",
    },
    {
      question: "What should I bring to the festival?",
      answer:
        "Bring a valid ID, your ticket, comfortable clothing, and sunscreen. Please check the festival's website for a list of prohibited items.",
    },
    {
      question: "Is re-entry allowed?",
      answer:
        "No, re-entry is not allowed once you leave the festival grounds. Make sure to bring everything you need for the day.",
    },
  ];

  return (
    <div className="py-20 md:py-52 bg-black px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-4xl md:text-6xl font-bold tracking-tighter text-center mb-3">
          FAQ
        </h2>
        <p className="text-zinc-600 tracking-tighter text-xl md:text-2xl text-center mb-10">
          Find answers to your most burning questions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-black border-2 border-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-orange-400 tracking-tighter">
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
