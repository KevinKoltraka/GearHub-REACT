import { useNavigate } from 'react-router-dom';
import "../styles/layouts/aboutus.css";

const AboutUs = () => {
  const navigate = useNavigate(); // Use useNavigate hook

  // Handle "Go Home" button click
  const goHome = () => {
    navigate("/"); // Navigate to home page
  };

  return (
    <section id="about" className="about-section">
      {/* Top Go Home Button */}
      <button onClick={goHome} className="go-home-button top-button">
        Go Home
      </button>

      <h2>About Us</h2>
      <p>
        Welcome to <strong>GearHub</strong>, where we are dedicated to empowering the automotive community by offering high-quality, reliable, and durable car parts. As one of the leading e-commerce platforms for automotive enthusiasts, we bridge the gap between modern technology and the car industry, making it easier for drivers, mechanics, and car owners to access the tools, parts, and resources they need to succeed.
      </p>

      <div className="about-content">
        <div className="about-text">
          <h3>Our Vision</h3>
          <p>
            Our vision is to be a global leader in automotive innovation, helping transform the car industry worldwide. We aim to revolutionize the automotive sector by offering solutions that are accessible, affordable, and efficient. Our goal is to enable car enthusiasts and professionals to achieve greater performance, safety, and longevity through the use of top-tier automotive products and cutting-edge technology.
          </p>
        </div>

        <div className="about-text">
          <h3>Our Mission</h3>
          <p>
            At <strong>GearHub</strong>, our mission is clear: to provide car owners, mechanics, and enthusiasts with the best tools, parts, and support to improve their vehicles and driving experiences. We are passionate about promoting sustainable automotive practices and are committed to ensuring that our customers worldwide have access to the highest quality products and educational resources that promote safe, efficient, and eco-friendly driving.
          </p>
          <p>
            We believe that the future of the automotive industry lies in innovation, sustainability, and community collaboration. By partnering with local mechanics, car experts, and industry leaders, we continuously refine our offerings and develop solutions that address the growing needs of the global automotive community.
          </p>
        </div>

        <div className="about-text">
          <h3>Our Core Values</h3>
          <ul>
            <li><strong>Integrity:</strong> We operate with the highest ethical standards, ensuring transparency, honesty, and fairness in every transaction.</li>
            <li><strong>Sustainability:</strong> We are deeply committed to promoting sustainable automotive practices and protecting the environment for future generations.</li>
            <li><strong>Innovation:</strong> We embrace the latest technology and constantly seek innovative solutions to support the evolving needs of car owners and professionals.</li>
            <li><strong>Customer-Centric:</strong> Our customers are at the heart of everything we do. We are dedicated to delivering excellent service and building long-term relationships based on trust.</li>
            <li><strong>Collaboration:</strong> We believe in the power of partnerships, working closely with local communities, suppliers, and experts to deliver the best solutions for our customers.</li>
          </ul>
        </div>

        <div className="about-text">
          <h3>Our History</h3>
          <p>
            Founded in 2015, GearHub started with a simple yet ambitious mission: to provide car owners and professionals with the tools and resources they need to succeed in a rapidly changing automotive world. Over the years, we have grown and become a trusted partner for car enthusiasts worldwide, offering access to quality parts and personalized support. Our journey has been shaped by a deep understanding of the challenges car owners face and an unwavering pursuit of solutions that empower them.
          </p>
          <p>
            What began as a small local initiative has now evolved into a global platform with a wide range of products, including automotive parts, tools, performance upgrades, and much more. We are proud to have established a strong presence in major automotive markets, and our commitment to excellence continues to drive us in expanding into new regions and product categories.
          </p>
        </div>

        <div className="about-text">
          <h3>Our Commitment to Sustainability</h3>
          <p>
            As a company that understands the critical importance of sustainable automotive practices, we are committed to minimizing our environmental footprint. By offering eco-friendly products and supporting green automotive technologies, we aim to create a positive impact on our planet. We work with car owners and mechanics to promote practices that not only improve vehicle performance but also help preserve natural resources for future generations.
          </p>
          <p>
            Through partnerships with key sustainability organizations, we actively participate in initiatives that promote fuel efficiency, waste reduction, and environmentally friendly automotive technologies. We believe that sustainable automotive practices are not just a business model—they are a responsibility we take seriously.
          </p>
        </div>

        <div className="about-text">
          <h3>Meet Our Team</h3>
          <p>
            At GearHub, we are proud to have a dedicated and passionate team of professionals who share a common goal: to support and uplift the automotive community. Our team consists of automotive experts, engineers, customer service specialists, and logistics professionals who work tirelessly to deliver the best products and services to our customers. With their diverse skills and unwavering commitment to excellence, our team plays a key role in the success and growth of the company.
          </p>
          <p>
            From our management team to our customer service representatives, every member of GearHub is dedicated to making a difference in the lives of car owners. Together, we are united by a shared vision to empower automotive enthusiasts and foster a more sustainable, productive, and prosperous automotive future.
          </p>
        </div>
      </div>

      {/* Bottom Go Home Button */}
      <button onClick={goHome} className="go-home-button bottom-button">
        Go Home
      </button>
    </section>
  );
};

export default AboutUs;
