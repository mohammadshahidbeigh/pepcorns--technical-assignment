import {motion} from "framer-motion";

const faqs = [
  {
    question: "What is the minimum investment?",
    answer:
      "The minimum investment amount is $100. This allows for broad participation while ensuring meaningful investment.",
  },
  {
    question: "How does the investment process work?",
    answer:
      "Once you decide to invest, you'll go through a simple verification process, choose your investment amount, and complete the transaction securely through our platform.",
  },
  {
    question: "What are the risks involved?",
    answer:
      "Like all investments, there are risks involved. We recommend reading the full offering circular and risk factors before making an investment decision.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: index * 0.1}}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
