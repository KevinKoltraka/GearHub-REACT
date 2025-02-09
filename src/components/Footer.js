import "../styles/layouts/footer.css";
import { Link } from "react-router-dom"; // Keep the import for Link

export const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-top">
                <div className="footer-brand">
                    <h2>GearHub</h2>
                    <p>Where Performance Meets Passion.</p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul className="flex-row">
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Na Kontaktoni</h4>
                    <p>Email: <a href="mailto:user@example.com">user@example.com</a></p>
                    <p>Telefon: <a href="tel:+355688172927">+355 688 172 927</a></p>

                </div>

                <div className="footer-social">
                    <h4>Follow Us</h4>
                    <div className="social-icons flex-row">
                        <a href="https://x.com" target="_blank" rel="noreferrer">
                            <i className="fas fa-xmark"></i>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-middle">
                <div className="footer-newsletter">
                    <h4>Newsletter</h4>
                    <p>Stay up to date with the latest news and offers:</p>
                    <form className="flex-row">
                        <input type="email" placeholder="Email" className="newsletter-input" required />
                        <button type="submit" className="newsletter-btn">Subscribe</button>
                    </form>
                </div>

                <div className="footer-testimonials">
                    <h4>What Our Customers Say</h4>
                    <blockquote>
                        &quot;GearHub offers the best car models! Highly recommended.&quot; - Jane Doe
                    </blockquote>
                    <blockquote>
                        &quot;Excellent service and timely delivery.&quot; - John Smith
                    </blockquote>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="copyright">© 2025 UBT GearHub. Copyright Reserved.</p>
                <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <i className="fas fa-arrow-up"></i> Go Top
                </button>
            </div>
        </footer>
    );
};