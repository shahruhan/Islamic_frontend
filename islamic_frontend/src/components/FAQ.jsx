import React, { useState } from "react";

const faqs = [
  { question: "What is the purpose of life in Islam?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti." },
  { question: "How does Islam promote peace?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti." },
  { question: "What is the Quran, and why is it important?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti." },
  { question: "Why do Muslims pray five times a day?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti." },
  { question: "What is the significance of fasting during Ramadan?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti." },
  { question: "Can non-Muslims ask questions or learn about Islam on this platform?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti." }
  ];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
	<>
	<section className="gold-bck">
					<div className="container mt-5 faq animate__animated animate__fadeInUp wow animated" data-wow-delay="0.2s">
						<h2 className="txt-grn">Frequently Asked Questions</h2>
						<p>Have questions about Islam? Explore thoughtful answers to commonly asked <br/> questions or submit your own.</p>
						
    <div className="accordion mt-5">
      {faqs.map((faq, index) => (
        <div key={index} className="accordion-item">
          <button onClick={() => toggleAccordion(index)} aria-expanded={activeIndex === index}>
			<span className="accordion-title"> {faq.question} </span><span className="icon" aria-hidden="true"></span>
          </button>
          <div className={`accordion-content ${activeIndex === index ? "open" : ""}`}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
	</div>
				</section>
        </>
  );
};

export default FAQ;
