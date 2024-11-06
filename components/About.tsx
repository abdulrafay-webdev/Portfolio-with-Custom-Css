import React from "react";
import styles from "./About.module.css";
import Image from "next/image";
import Button2 from "./ui components/Button2";

const About = () => {
  const shortBio: string =
    "Hi, I'm Abdulrafay, a passionate front-end developer and designer from Pakistan With a background in computer science and graphic design, I bring creativity and technical expertise to my work.";

  const LongBio: string =
    "Specialized in HTML, CSS, JavaScript, and React with a strong focus on creating user-friendly web interfaces.Over 2 years of experience teaching computer science, with hands-on projects in web development.Known for attention to deta problem-solving skills, and a commitment to delivering high-qual work.Currently working on enhancing my portfolio with Next.js  exploring new front-end technologies.Interested in working together? Feel free reach out";

  return (
    <>
      <h1 className={styles.h1}>About Me</h1>
      <div className={styles.main}>
        {/* left  */}
        <div className={styles.left}>
          {/* image  */}
          <div className={styles.img}>
            <Image
              className={styles.profile}
              src={require("../images/rp.jpeg")}
              alt="profile pic"
            />
          </div>
          <div className={styles.me}>
            <h3 className={styles.h3}>{shortBio}</h3>
          </div>
        </div>
        {/* divider  */}
        <span className={styles.divider}></span>
        {/* right  */}
        <div className={styles.right}>
          <h1 className={styles.h1}>Skills</h1>
          <p className={styles.p}>{LongBio}</p>
          <Button2>Feel free to reach out</Button2>
        </div>
      </div>
    </>
  );
};

export default About;
