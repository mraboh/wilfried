import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function () {
  return (
    <>
      <div className={styles.container}>
      <Link href={'Maison'}>
        <div className={styles.logo}>
          <Image src="/img1.png" width={200} height={250} />
      
        </div>
        </Link>
        <h1 className={styles.h2}>
          QUI SOMMES-NOUS? <br />
          Le Site de l’Événementiel met <br /> tout son savoir faire pour vous
          dénicher le lieu idéal pour <br />
          vos événements, et ce quelqu’en soit la typologie. <br /> OÙ
          SOMMES-NOUS? <br />
          C’est principalement à Douala que nous travaillons : nous recensons
          aujourd’hui plus de 1000 adresses Camerounaises. <br /> - À propos de
          nous <br /> - Notre Politique RSE <br /> - Nos salles
        </h1>


        <div className={styles.lineText}>
          <div>
            <label for="Commentaire"></label>
            <input
              className={styles.comment}
              type="text"
              name="Commentaire"
              id="Commentaire"
              placeholder="votre adressse electronique"
            />
          </div>
          <h2>Contact:</h2>
      <p>© 2024, Tech2 etc - CAMEROUN Evenementiel Template!</p>
      <ul>
        <li>  - Addresse: 512 New deido, Rue du marche,Douala </li>
        <li>- Telephone: +237 694 25 58 99 /(+237) 672 69 84 83</li>
        <li>  - Horaires: 10:00 - 20:00, Lun - Sam</li>
        <div className={styles.btns}>
              <button>App Store</button>
              <button className={styles.width}>Google Play</button>
            </div> 

      </ul>
     
         
        </div>
      </div>
    </>
  );
}
