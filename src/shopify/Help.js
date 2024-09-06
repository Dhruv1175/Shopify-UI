import React, { useState } from 'react';

export default function Help() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqs = [
    {
      question: 'How do I reset my password?',
      answer: 'To reset your password, go to the login page, click on "Forgot password", and follow the instructions to reset your password.',
    },
    {
      question: 'Where can I view my order history?',
      answer: 'You can view your order history in the "My Orders" section of your account dashboard.',
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can contact our customer support team via the contact form on the support page, or by calling our support hotline at 1-800-123-456.',
    },
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div>
      <h2>Help & Support</h2>
      
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for help..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{
          width: '100%',
          padding: '10px',
          margin: '10px 0',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />

      {/* FAQ Section */}
      <div>
        <h3>Frequently Asked Questions</h3>
        {faqs
          .filter((faq) =>
            faq.question.toLowerCase().includes(searchTerm) || faq.answer.toLowerCase().includes(searchTerm)
          )
          .map((faq, index) => (
            <div key={index} style={{ margin: '10px 0' }}>
              <div
                onClick={() => toggleQuestion(index)}
                style={{
                  cursor: 'pointer',
                  padding: '10px',
                  backgroundColor: '#f1f1f1',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                }}
              >
                <strong>{faq.question}</strong>
              </div>
              {activeQuestion === index && (
                <div style={{ padding: '10px', backgroundColor: '#fff', border: '1px solid #ccc', borderTop: 'none' }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
      </div>

      {/* Helpful Links */}
      <div style={{ marginTop: '20px' }}>
        <h3>Helpful Links</h3>
        <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
          <li><a href="/contact" style={{ color: '#007bff', textDecoration: 'none' }}>Contact Support</a></li>
          <li><a href="/reset-password" style={{ color: '#007bff', textDecoration: 'none' }}>Reset Your Password</a></li>
          <li><a href="/order-history" style={{ color: '#007bff', textDecoration: 'none' }}>View Order History</a></li>
        </ul>
      </div>
    </div>
  );
}
