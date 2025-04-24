import React, { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './WhatsAppButton.css';

function WhatsAppButton() {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <a
      href="https://wa.me/919693927130?text=Hi%20Miranaya%2C%20I%20am%20interested%20in%20your%20courses!"
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
      data-bs-toggle="tooltip"
      data-bs-placement="left"
      title="Chat with us on WhatsApp"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
}

export default WhatsAppButton;
