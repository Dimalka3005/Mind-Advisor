import './Footer.css';

const Footer = () => {
    const currectYear = new Date().getFullYear();
    return (
        <footer className='footer'>
            <div className='footer-container px-5'>
                <div className='footer-section'>
                    <h3 className="footer-title">Disclaimer</h3>
                    <p className='footer-text'>
                        The advice provided on BlueWell Mind is intended for entertainment purposes only.
                    </p>
                </div>
                <div className='footer-section'>
                    <h4 className="footer-title">Developed with</h4>
                    <div className="tech-stack">
                        <span className="tech-item">React</span>
                        <span className="tech-item">CSS</span>
                        <span className="tech-item">HTML</span>
                        <span className="tech-item">Vite</span>
                    </div>
                </div>
                <div className='footer-section'>
                    <h4 className="footer-title">Features</h4>
                    <div className="features-list">
                        <span className="tech-item">💼</span>
                        <span className="tech-item">💕</span>
                        <span className="tech-item">🩺</span>
                        <span className="tech-item">💰</span>
                    </div>
                </div>
            </div>
            <hr />
            <div className='footer-bottom text-center'>
                <p className='copyright'>
                    &copy; {currectYear} BlueWell Mind. All rights reserved. |
                    Designed By <a href="https://github.com/Dimalka3005" className='author-name'>Dimalka Gallage</a></p>
            </div>
        </footer>
    )
}

export default Footer;