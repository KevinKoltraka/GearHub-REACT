import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate instead of useHistory

import "../styles/layouts/services.css";

// Service data (can be fetched from an API)
const serviceData = [
  {
    title: "Fast Delivery",
    description: "Get your car parts delivered swiftly and securely, no matter where you are. We ensure quick and reliable shipping to keep your car running smoothly.",
    icon: "🚚",
    link: "/delivery",
  },
  {
    title: "Expert Assistance",
    description: "Our team of automotive professionals is available to help you 24/7. Whether it's choosing the right part or providing repair advice, we're here to assist you.",
    icon: "🧑‍🔧",
    link: "/support",
  },
  {
    title: "High-Quality Parts",
    description: "We offer top-notch car parts and accessories that ensure durability and high performance for your vehicle. Only the best for your ride.",
    icon: "🔧",
    link: "/parts",
  },
  {
    title: "Custom Car Solutions",
    description: "Need a custom part or upgrade? We provide tailored solutions for your car's unique needs, from personalized parts to exclusive bundles.",
    icon: "⚙️",
    link: "/custom-solutions",
  },
  {
    title: "Secure Payments",
    description: "We offer safe and secure payment options for your purchases. Shop with peace of mind knowing your transaction is encrypted and protected.",
    icon: "💳",
    link: "/payment",
  },
  {
    title: "Easy Returns",
    description: "Not satisfied with your purchase? No problem! Our simple return process ensures quick exchanges or refunds for hassle-free shopping.",
    icon: "🔄",
    link: "/returns",
  },
];

const ServiceCard = ({ title, description, icon, }) => {
  return (
    <div className="service-card">
      <div className="service-icon">
        <span>{icon}</span>
      </div>
      <h4 className="service-title">{title}</h4>
      <p className="service-description">{description}</p>
    </div>
  );
};

const Services = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    // In a real scenario, this could be a call to fetch data from an API
    setServices(serviceData);
  }, []);

  // Handle "Go Home" button click
  const goHome = () => {
    navigate("/"); // Use navigate() to go to the home page
  };

  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <h2>
          <a href="/" className="services-title-link">Our Services</a>
        </h2>
        <p>Explore the services we offer to make your automotive needs easier and more convenient.</p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            link={service.link}
          />
        ))}
      </div>
      <button onClick={goHome} className="go-home-button">
        Go Home
      </button>
    </section>
  );
};

export default Services;
