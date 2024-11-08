import React from "react";
import styles from "./Hero.module.css";
import Button from "./ui components/Button";
import Button2 from "./ui components/Button2";
import { IoIosArrowDropright } from "react-icons/io";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import heroimg from "../images/hero sec.png"

export const Hero = () => {


  // details 
  const name:string = "Abdul Rafay"
  const designation:string="Front-End Developer & Designer"
  const bio:string="Creating engaging, user-friendly digital experiences with a focus on modern design and performance"

  // links 
  const WhatsappLink:string="https://wa.me/message/6RMRPE5J3PRGL1"
  const LinkedinLink:string="https://www.linkedin.com/in/abdul-rafay-073187278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  const GithubLink:string="https://github.com/abdulrafay-webdev"


  return (
    <div className={styles.main}>
      {/* left  */}
      <div className={styles.left}>
        <h3 className={styles.h3}>Hey,It&apos;s Me </h3>
        <h1 className={styles.h1}>{name}</h1>
        <h3 className={styles.h3}>{designation}</h3>
        <p className={styles.p}>{bio}</p>
        {/* buttons  */}
        <div className={styles.buttons}>
          <Link href={"/projects"}>
            <Button>
              View My Work <IoIosArrowDropright className={styles.priicons} />
            </Button>
          </Link>
          <Link href={"/contact"}>
            <Button2>Contact Me</Button2>
          </Link>
        </div>
        {/* social media icons  */}
        <div className={styles.icons}>
          <Link target="blank" href={WhatsappLink}><FaWhatsapp className={styles.secicons} /></Link>
          <Link target="blank" href={LinkedinLink}><FaLinkedin className={styles.secicons} /></Link>
          <Link target="blank" href={GithubLink}><FaGithub className={styles.secicons} /></Link>
        </div>
      </div>
      {/* right  */}
      <div className={styles.right}>
        <Image
          className={styles.image}
          src={heroimg}
          alt="webdev"
        />
      </div>
    </div>
  );
};
