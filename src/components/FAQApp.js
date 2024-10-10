import React from "react";
import { useState } from "react";

const FAQApp = () => {
  const [currentlyClicked, setCurrentlyClicked] = useState(null);

  const handleCurrentlyClicked = (index) => {
    if (currentlyClicked === index) {
      setCurrentlyClicked(null);
    } else {
      setCurrentlyClicked(index);
    }
  };

  const faqs = [
    {
      index: 1,
      question: "What is your return policy?",
      answer: "You can return items within 30 days.",
    },
    {
      index: 2,
      question: "How do I track my order?",
      answer: "You can track your order through the link sent to your email.",
    },
    {
      index: 3,
      question: "Can I purchase items internationally?",
      answer: "Yes, we ship internationally.",
    },
  ];

  return (
    <section>
      <h1>FAQ Accordion</h1>
      {faqs.map((faq, index) => (
        <div key={index}>
          <h3 onClick={() => handleCurrentlyClicked(index)}>{faq.question}</h3>
          {currentlyClicked === index && <p>{faq.answer}</p>}
        </div>
      ))}
    </section>
  );
};

export default FAQApp;
