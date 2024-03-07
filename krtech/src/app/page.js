import React from 'react';
import styles from './page.module.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
export default function Home() {
  return (
    <div className={styles.container}>
      {/*nav section*/}
      <div className={styles.navbar}>
        <div className={styles.flexcontainer}>
          <img src="/logo.jpg" alt="KRT_logo" width="80px" height="80px"></img>
        </div>
        <div className={`${styles.navoptions} ${styles.flexcontainer}`}>
          <div className={styles.nav_hover}>
            <a href="/about">About</a>
          </div>
          <div className={styles.nav_hover}>
            <a href="/services">Services</a>
          </div>
          <div className={styles.nav_hover}>
            <a href="/contactus">contact us</a>
          </div>
        </div>
      </div>
      {/*hero section*/}
      <div className={styles.herosection}>
        <img src="/fintech.jpg" alt="fintech"></img>
        <div className={styles.img_content}>
            <div className={styles.content_text_color}>Industry</div>
            <h1 className={styles.header_text}>Fintech</h1>
            <div className={styles.hero_description}>Identify new opportunities to accelerate your digital ambitions and delight your customers</div>
        </div>
      </div> 

      {/*description section*/}
      <div>
        <div className={styles.textContainer}>
          <div className={styles.line}></div>
          <h2 className={styles.text}>What We Do</h2>
          <div className={styles.line}></div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <h3>Strategy, Benchmarking, and Trend Analysis</h3>
            <p>Invest and grow into the right opportunity areas, based on our unparalleled knowledge, data-driven insights, and industry experience</p>
          </div>
          <div className={styles.column}>
            <h3>Value Proposition and Customer-centricity</h3>
            <p>Identify opportunities for growth by putting customers at the heart of your value proposition and applying rigorous commercial expertise</p>
          </div>
          <div className={styles.column}>
            <h3>Reach Full Potential</h3>
            <p>Our team can help you scale your business and shift to sustainable growth models while staying ahead of the innovation curve</p>
          </div>
          <div className={styles.column}>
            <h3>Digital Transformation</h3>
            <p>We help clients every day to modernize their technology, data, and operations</p>
          </div>
        </div>

        {/*footer */}
        <footer className={styles.footer}>
        <div className={styles.navbar}>
        <div className={styles.flexcontainer}>
          <img src="/logo.jpg" alt="KRT_logo" width="80px" height="80px"></img>
        </div>
        <div className={`${styles.navoptions} ${styles.flexcontainer}`}>
          <div className={styles.nav_hover}>
            <a href="/about">About</a>
          </div>
          <div className={styles.nav_hover}>
            <a href="/services">Services</a>
          </div>
          <div className={styles.nav_hover}>
            <a href="/contactus">Contact us</a>
          </div>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <a href="https://www.facebook.com"><FaFacebook /></a>
        <a href="https://www.twitter.com"><FaTwitter /></a>
        <a href="https://www.instagram.com"><FaInstagram /></a>
      </div>
          <div className={styles.copyRight}>
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
