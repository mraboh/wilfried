'use client';  // Make sure this component is treated as a Client Component
import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const links = [
  { name: "Maison", href: "/Maison" },
  { name: "Services", href: "/Services" },
  { name: "Contact", href: "/Contact" },
  { name: "Dashboard", href: "/Dashboard" },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/Maison">
        <div className={styles.logo}>
          {/* Add alt attribute for accessibility */}
          <Image src="/img1.png" width={160} height={150} alt="Maison Logo" />
        </div>
      </Link>
      <div className={styles.linksContainer}>
        {links.map((link, index) => (
          <Link href={link.href} className={styles.link} key={index}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
