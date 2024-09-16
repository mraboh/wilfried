'use client'
import { useState } from "react";
import React from "react";
import styles from "./page.module.css";
import Footer from "../component/Footer/Footer";


export default function Users() { 

  const [users, setUsers] = useState([
    { id: 1, name: "Wilfried", email: "Wilfried@gmail.com" },
  ]);

  const [newUser, setNewUser] = useState({ name: "", email: "" });

  const addUser = () => {
    if (newUser.name && newUser.email) {
      setUsers([...users, { id: users.length + 1, ...newUser }]);
      setNewUser({ name: "", email: "" });
    }
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };


 
  return (
    <>
      <div className={styles.number}>
        <div className={styles.column}>
          <h1 className={styles.h1}>ACTUALITÉS</h1>
          <p className={styles.paragraph}>
            Explorez notre variété d'inspiration et faites votre choix...
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <h1 className={styles.h2}>
          Recevez des mises à jour par courrier <br /> électronique sur nos
          dernières offres spéciales.
        </h1>
        <div className={styles.lineText}>
          <div>
            <label for="Commentaire"></label>
            <input
              className={styles.comment}
              type="text"
              name="Commentaire"
              id="Commentaire"
              placeholder="Demande de devis"
            />
          </div>
        </div>
      </div>


      <section className={styles.main}>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <img src="/box19.png" width={300} height={500} />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>
          <h2>Pour votre décoration de mariage parfaite contactez miracle events.</h2>
          </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardImage}>
            <img src="/WhatsApp Image 2024-09-13 à 15.02.23_b1570370.jpg" width={300} height={500}/>
          </div>
          <div className={styles.content}>
            <div className={styles.title}>
          <h2>(Mariage organisé en 2023) Dress-code de mariés disponibles pour toutes les tailles.</h2>
          </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardImage}>
            <img src="/WhatsApp Image 2024-09-13 à 15.02.22_62480748.jpg" />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>
          <h2>Faites en sorte que quelqu'un se sente spécial. Meilleur partenaire pour cette mission.</h2>
          </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardImage}>
           
            <img src="/WhatsApp Image 2024-09-13 à 15.02.22_37dcb9b2.jpg" />
         
          </div>
          <div className={styles.content}>
          <div className={styles.title}>
          <h2>Miracle Events planifie, organise et coordonne les événements du début à la fin.</h2>
          </div>
          </div>
        </div>
      </section>
      
  
    <Footer/>
    </>
  );
}
