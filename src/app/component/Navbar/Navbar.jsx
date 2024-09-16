"use client";
import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";

const links = [
    { name: "Maison", href: "/Maison" },
  { name: "Services", href: "/Services" },
  { name: "Contact", href: "/contact" },
  { name: "Dashboard", href: "/Dashboard" },
];

const Navbar = () => {
  <div className={styles.container}>
    <div className={styles.linksContainer}>
      {links.map((link, index) => (
        <Link href={link.href} className={styles.links} key={index}>
          {link.name}
        </Link>
      ))}
    </div>
  </div>;
  return (
    <div className={styles.container}>
      <Link href={'Maison'}>
      
      <div className={styles.logo}>
        <Image src="/img1.png"  width={160} height={150}/>
      </div>
      </Link>
      <div className={styles.linksContainer}>
        
      <Link href={"Maison"} className={styles.link}>
        Maison{" "}
        </Link>
        <Link href={"Services"} className={styles.link}>
        Services{" "}
        </Link>
      
     
        <Link href={"/Contact"} className={styles.link}>
          Contact{" "}
        </Link>
        <Link href={"Dashboard"} className={styles.link}>
        Dashboard{" "}
        </Link>
      </div>

    
      
    </div>
    
  );
};

export default Navbar;
