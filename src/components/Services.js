import { useState, useEffect } from 'react';
import "../styles/layouts/services.css";

// Të dhënat e shërbimit (mund të merren nga një API)
const serviceData = [
  {
    title: "Dërgesë e Shpejtë",
    description: "Merrni produktet bujqësore të dërguara shpejt dhe sigurt, kudo në botë. Ne sigurojmë dërgesa në kohë për të mbajtur operacionet tuaja bujqësore në rrugë.",
    icon: "🚚",
    link: "/delivery",
  },
  {
    title: "Mbështetje Eksperte",
    description: "Ekipi ynë i ekspertëve bujqësorë ofron mbështetje për klientët 24/7, duke ju ndihmuar të zgjidhni produktet e duhura dhe ofruar këshilla për fermën tuaj.",
    icon: "🧑‍🌾",
    link: "/support",
  },
  {
    title: "Produkte të Qëndrueshme",
    description: "Ne ofrojmë produkte bujqësore miqësore me mjedisin dhe të qëndrueshme që mbrojnë ambientin dhe përmirësojnë produktivitetin e fermës.",
    icon: "🌱",
    link: "/sustainability",
  },
  {
    title: "Zgjidhje të Personalizuara",
    description: "Ne ofrojmë zgjidhje të personalizuara që i përshtaten nevojave tuaja të veçanta të fermës. Qoftë për makineri të personalizuara apo paketa produktesh të specializuara, jemi këtu për t'ju ndihmuar.",
    icon: "⚙️",
    link: "/custom-solutions",
  },
  {
    title: "Pagesa të Sigurta",
    description: "Ne ofrojmë mundësi pagese të sigurta për t'u siguruar që transaksionet tuaja janë të koduara, të sigurta dhe pa stres.",
    icon: "💳",
    link: "/payment",
  },
  {
    title: "Kthime të Lehta",
    description: "Nëse nuk jeni plotësisht të kënaqur me blerjen tuaj, procesi ynë i kthimit të lehtë do të sigurojë që të merrni një zëvendësim ose rimbursim shpejt.",
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

  useEffect(() => {
    // Në një situatë reale, ky mund të jetë një thirrje për të marrë të dhënat nga një API
    setServices(serviceData);
  }, []);

  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <h2>Shërbimet Tonë</h2>
        <p>Zbuloni se si ne jemi këtu për të ndihmuar fermën tuaj të rritet me një gamë shërbimesh të dizajnuara për suksesin tuaj.</p>
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
    </section>
  );
};

export default Services;
