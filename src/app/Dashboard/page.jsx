"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Evenements");
  const [users, setUsers] = useState([
    { id: 1, name: "Seven", email: "Seven@gmail.com" },
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
  <div className={styles.Img}>
    <h2 className={styles.fine}>Users</h2>
    <p>Manage your users here.</p>

    <h3  className={styles.fine}>Add User</h3>
    <input className={styles.eat}
      type="text"
      placeholder="Name"
      value={newUser.name}
      onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
    />
    <input className={styles.eat}
      type="email"
      placeholder="Email"
      value={newUser.email}
      onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
    />
    <button className={styles.btn3} onClick={addUser}>Add User</button>

    <h3 className={styles.fine}>User List</h3>
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} ({user.email}) 
          <button onClick={() => deleteUser (user.id)} className={styles.btn3}>Delete</button>
        </li>
      ))}
    </ul>
</div>

  return (
    <div>
      <div className={styles.dashboard}>
        <aside className={styles.sidebar}>
          <h2>Dashboard</h2>
          <ul>
          <li
              className={activeTab === "Evenements" ? styles.active : ""}
              onClick={() => setActiveTab("Evenements")}
            >
              Evenements
            </li>
            <li
              className={activeTab === "Prestataires" ? styles.active : ""}
              onClick={() => setActiveTab("Prestataires")}
            >
              Prestataires
            </li>
            <li
              className={activeTab === "Services" ? styles.active : ""}
              onClick={() => setActiveTab("Services")}
            >
              Services
            </li>
            <li
              className={activeTab === "Contrat" ? styles.active : ""}
              onClick={() => setActiveTab("Contrat")}
            >
              Contrat
            </li>
            <li
              className={activeTab === " Paiement" ? styles.active : ""}
              onClick={() => setActiveTab("Paiement")}
            >
              Paiement
            </li>
            
            <li
              className={activeTab === " Retard" ? styles.active : ""}
              onClick={() => setActiveTab("Retard")}
            >
              Retard
            </li>
          
         
          </ul>
        </aside>

        <div className={styles.mainContent}>
          <header className={styles.header}>
            <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
          </header>

          <section className={styles.content}>
            {/* {activeTab === "MiracleEvents" && <MiracleEvents />} */}
            {activeTab === "Evenements" && <Evenements/>}
            {activeTab === "Prestataires" && <Prestataires />}
            {activeTab === "Services" && <Services />}
            {activeTab === "Contrat" && <Contrat />}
            {activeTab === "Paiement" && <Paiement />}
            {activeTab === "Retard" && <Retard />}
           
          
          </section>
        </div>
      </div>

      <div className={styles.Img}>
    <h2 className={styles.fine}>Users</h2>
    <p className={styles.p}>Manage all users here.</p>

    <h3  className={styles.fine}>Add User</h3>
    <input className={styles.eat}
      type="text"
      placeholder="Name"
      value={newUser.name}
      onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
    />
    <input className={styles.eat}
      type="email"
      placeholder="Email"
      value={newUser.email}
      onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
    />
    <button className={styles.btn3} onClick={addUser}>Add User</button>

    <h3 className={styles.fine}>User List</h3>
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} ({user.email}) 
          <button onClick={() => deleteUser (user.id)} className={styles.btn3}>Delete</button>
        </li>
      ))}
    </ul>
</div>
     
    </div>
  );
}

function Evenements() {
  return (
    <div>
      <h2>Evenements</h2>
      <p>(Découvrez nos différentes offres pour vos événements !)</p>
      <ul>
        <li>Nom</li>
        <li>Date</li>
        <li>Lieu</li>
       
      </ul>
    </div>
   

  );
}

function Prestataires() {
  return (
    <div>
      <h2>Prestataires</h2>
      <p>Discuter avec les prestataires des modalités de paiement adaptées (virement, chèque, etc.) pour simplifier les transactions et éviter des complications.</p>
      <ul>
      <li>Nom</li>
        <li>Contrat</li>
        <li>Adresse</li>
        <li>Type de services</li>
      </ul>
    </div>
 );
}
  
function Services() {
  return (
    <div>
      <h2>Services</h2>
      <p>
      Si le problème persiste, faire appel à un médiateur peut être une option pour résoudre les différends de manière professionnelle.
      </p>
      <ul>
       <li>Nom</li>
<li>Description</li>
<li>Cout</li>
<li>duree</li>
      </ul>
    </div>
  );
}

function  Contrat() {
  return (
    <div>
      <h2> Contrat</h2>
      <p>
      Établir des contrats clairs avec chaque prestataire, définissant les délais, les modalités de paiement, les pénalités de retard et les conditions de résiliation.
      </p>
      <ul>
        <li>Date de signature</li>
        <li>Date de livraison prevue</li>
        <li>Date de livraison reelle</li>
        <li> statut</li>
      </ul>
    </div>
  );
}





function Paiement() {
  return (
    <div>
      <h2> Paiement</h2>
      <p>
      Mettre en place un calendrier de paiement progressif (par exemple : acompte, paiement intermédiaire, solde à la livraison du service).
      </p>
      <ul>
        <li>Cause du retard</li>
        <li>penalite (ex: montant du pour le retard)</li>
    
      </ul>
    </div>
  );
}

function Retard() {
  return (
    <div>
      <h2> Retard</h2>
      <p>
      Prévoir des prestataires alternatifs en cas de défaillance d'un fournisseur principal, afin de ne pas être pris au dépourvu
      </p>
      <ul>
        <li>Cause du retard</li>
        <li>penalite</li>
        <li>commentaires</li>
      </ul>
    </div>
  );
}