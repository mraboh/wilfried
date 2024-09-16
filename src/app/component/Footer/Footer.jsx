import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className={styles.container}>
        <Link href="/Maison">
          <div className={styles.logo}>
            {/* Add the alt attribute for the Image component */}
            <Image src="/img1.png" width={200} height={250} alt="Maison Logo" />
          </div>
        </Link>

        <h2 className={styles.h2}>
          QUI SOMMES-NOUS? <br />
          Le Site de l&apos;Événementiel met <br /> tout son savoir faire pour
          vous dénicher le lieu idéal pour <br />
          vos événements, et ce quelqu&apos;en soit la typologie. <br /> OÙ
          SOMMES-NOUS? <br />
          C&apos;est principalement à Douala que nous travaillons : nous
          recensons aujourd&apos;hui plus de 1000 adresses Camerounaises. <br />{" "}
          - À propos de nous <br /> - Notre Politique RSE <br /> - Nos salles
        </h2>

        <div className={styles.lineText}>
          <div>
            {/* Update the label's for attribute to htmlFor */}
            <label htmlFor="Commentaire">Votre adresse électronique:</label>
            <input
              className={styles.comment}
              type="text"
              name="Commentaire"
              id="Commentaire"
              placeholder="votre adresse électronique"
            />
          </div>

          <h2>Contact:</h2>
          <p>© 2024, Tech2 etc - CAMEROUN Evenementiel Template!</p>
          <ul>
            <li>Adresse: 512 New Deido, Rue du marché, Douala</li>
            <li>Téléphone: +237 694 25 58 99 / (+237) 672 69 84 83</li>
            <li>Horaires: 10:00 - 20:00, Lun - Sam</li>
          </ul>

          <div className={styles.btns}>
            <button>App Store</button>
            <button className={styles.width}>Google Play</button>
          </div>
        </div>
      </div>
    </>
  );
}
