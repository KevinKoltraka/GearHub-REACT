import "../styles/layouts/footer.css";
import { Link } from "react-router-dom"; // Keep the import for Link

export const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-top">
                <div className="footer-brand">
                    <h2>UBT AgroMarket</h2>
                    <p>Partneri juaj i besuar për produkte bujqësore cilësore.</p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul className="flex-row">
                        <li><Link to="/about">Rreth Nesh</Link></li>
                        <li><Link to="/services">Shërbimet</Link></li>
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
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            <i className="fab fa-twitter"></i>
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
                    <h4>Abonohu në Newsletter-in Tonë</h4>
                    <p>Përditësohu me lajmet dhe ofertat më të fundit:</p>
                    <form className="flex-row">
                        <input type="email" placeholder="Shkruaj emailin tënd" className="newsletter-input" required />
                        <button type="submit" className="newsletter-btn">Abonohu</button>
                    </form>
                </div>

                <div className="footer-testimonials">
                    <h4>Çfarë Thonë Klientët Tanë</h4>
                    <blockquote>
                        &quot;UBT AgroMarket ka produktet më të mira! E rekomandoj shumë.&quot; - Jane Doe
                    </blockquote>
                    <blockquote>
                        &quot;Shërbim i shkëlqyer dhe dorëzim në kohë.&quot; - John Smith
                    </blockquote>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="copyright">© 2025 UBT AgroMarket. Të Drejtat e Autorit të Rezervuara.</p>
                <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Kthehu Lart
                </button>
            </div>
        </footer>
    );
};