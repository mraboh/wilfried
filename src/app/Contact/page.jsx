import React from "react";
import styles from "./page.module.css";

export default function Contact () {
  return (
    <>
      <div>
        <section className={styles.signForm}>
          <div className={styles.signintext}>
            <h1 className={styles.signIn}>CONTACT</h1>
          </div>
          <p className={styles.email}>
            <label for="username">Nom d&apos;utilisateur</label>
            <input type="text" placeholder="" required />
          </p>
          <p className={styles.email}>
            <label for="Email Address">Email</label>
            <input type="email" placeholder="" required />
          </p>
          <p className={styles.password}>
            <label for="password">Mot de passe</label>
            <input type="password" required />
          </p>
          <p className={styles.password}>
            <label for="">Sujet</label>
            <input type="password" required />
          </p>
          <p className={styles.password}>
            <label for="sex">Sexe</label>
            <p className={styles.sex}>
              <input type="radio" name="gender" value="Male" /> Masculin
              <input type="radio" name="gender" value="Female" />
              Feminin
            </p>
          </p>
          <p class={styles.password}></p>
          <p class={styles.dropdown}>
            <label for="category">Vous êtes</label>
            <select name="Level" id="level" class={styles.selectategory}>
              <option value="Junior Intern">Professionnel</option>
              <option value="Junior Developer" selected>
                Particulier
              </option>
              <option value="Senior front-end dev">Intermediaire</option>
              <option value="Dev-ups">Academique</option>
            </select>
          </p>

          <p className={styles.btn}>
            <button type="submit">
              Envoyer<i className={styles.bracket}></i>
            </button>
          </p>
          <p className={styles.account}>
            Vouz-avez un compte? <a href="#">Inscrivez-vous et commencez!</a>
          </p>
        </section>
      </div>
    </>
  );
}
