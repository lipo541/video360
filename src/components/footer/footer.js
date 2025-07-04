import React from 'react';
import Link from 'next/link';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>ჩვენ შესახებ</h4>
                    <p>მოგესალმებით Video360 Studio-ში — თქვენი სანდო პარტნიორი 360° ვიდეო ეფექტების სფეროში. ვქმნით უნიკალურ bullet-time ვიდეოებს ღონისძიებებისა და მარკეტინგული კამპანიებისთვის.</p>
                </div>
                <div className="footer-section">
                    <h4>360° სერვისები</h4>
                    <ul>
                        <li><Link href="/services">Matrix Shot ეფექტი</Link></li>
                        <li><Link href="/about">ღონისძიების ფოტო-ზონა</Link></li>
                        <li><Link href="/contact">ღირებულება და პაკეტები</Link></li>
                        <li><Link href="/contact">კონტაქტები</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>გვიპოვეთ სოციალურ ქსელებში</h4>
                    <ul className="social-links">
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>გაიცანით ჩვენი ლოკაციის მენეჯერები</h4>
                    <p>თქვენი ივენთებისა და ღონისძებებისათვის  აირჩიეთ სასურველი ივენთის მენეჯერი.</p>
                    <form>
                        <input type="email" placeholder="შეიყვანეთ თქვენი ელ.ფოსტა" />
                        <button type="submit">გამოწერა</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Video360 Studio. ყველა უფლება დაცულია.</p>
            </div>
        </footer>
    );
}

export default Footer;
