import React from "react";
import styles from "./Contact.module.css";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
const Contact = () => {
  const Whatsapplink: string = "#";
  const Linkedinlink: string = "#";
  const Githublink: string = "#";

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.description}>
            Let&apos;s bring your ideas to life. Get in touch and start creating
            something amazing together!
          </p>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.formFields}>
            {/* form  */}
            <div className={styles.form}>
              <form action="https://formspree.io/f/xdkogzge" method="POST">
                <div className={styles.fieldHalf}>
                  <label htmlFor="name" className={styles.label}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.fieldHalf}>
                  <label htmlFor="email" className={styles.label}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.input}
                    required
                  />
                </div>
                <label htmlFor="subject" className={styles.label}>
                  subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={styles.input}
                  required
                />
                <div className={styles.fieldFull}>
                  <label htmlFor="message" className={styles.label}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className={styles.textarea}
                    required
                  />
                </div>
                <div className={styles.fieldFull}>
                  <button className={styles.submitButton}>Send</button>
                </div>
              </form>
            </div>
            {/* contact  */}
            <div className={styles.contact}>
              <div className={styles.contactInfo}>
                <a href="mailto:example@email.com" className={styles.email}>
                  abdullrrafay@gmail.com
                </a>
                <p className={styles.address}>
                  North Nazimabad
                  <br />
                  Karachi,PAKISTAN
                  <br />
                  +92 313 235 4942
                </p>
                <div className={styles.socialIcons}>
                  <a href={Whatsapplink} className={styles.icon}>
                    <FaWhatsapp />
                  </a>
                  <a href={Linkedinlink} className={styles.icon}>
                    <FaLinkedin />
                  </a>
                  <a href={Githublink} className={styles.icon}>
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
