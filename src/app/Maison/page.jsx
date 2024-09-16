"use client";
import styles from "./page.module.css";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useEffect } from "react";
import Footer from "../component/Footer/Footer";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

export default function () {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ startDelay: 1000, speed: 1 }),
  ]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.centralize}>
          <div className={styles.header}>
            <div className={styles.headerNav}>
              <Link href={"Dashboard"}>
                <FaShoppingCart className={styles.icon} />
              </Link>
              <Link href={styles.nav}>Mariages</Link>
              <Link href={styles.nav}>Anniversaires</Link>
              <Link href={styles.nav}>Fetes</Link>
              <Link href={styles.nav}>Nos events</Link>
              <Link href={styles.nav}>Nos salles</Link>
              <Link href={styles.nav}>Nos offres</Link>
              <Link href={styles.nav}>Nos animations</Link>
            </div>
          </div>

          <div className={styles.boxContain}>
            <div className={styles.title}>
              <h1>
                MIRACLE <br /> EVENTS
              </h1>
            </div>
            <div className={styles.textIntro}>
              <p className={styles.p}>
                Evenement plannificateur pour des temps meilleurs <br />
                Fabrication grandeur a grande echelle, Une plannification
                magistrale.
              </p>
            </div>
            <div className={styles.btns}>
              <button>Traduire (French)</button>
              <button className={styles.width}>Voir la source</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.number}>
        <div className={styles.column}>
          <h1 className={styles.h1}>Le Lieu</h1>
          <p className={styles.paragraph}>
            Nous ne vous proposons pas seulement l’organisation de votre
            événement, <br /> mais nous nous engageons également à vous trouver
            le lieu idéal en s’appliquant à respecter votre cahier des charges.{" "}
            <br />
            Le Site de l’événementiel a sélectionné pour vous une multitude
            d’espaces parisiens : tous aussi atypiques les uns que les autres.{" "}
            <br /> Que vous recherchiez plus une péniche ou une adresse “comme à
            la maison”, découvrez nos espaces partenaires.
          </p>
          <div className={styles.hero}>
            <div className={styles.line}>
              <div className={styles.imgBox}>
                <Image src="/box24.png" width={320} height={400} />
              </div>
            </div>
            <div className={styles.line}>
              <div className={styles.imgBox}>
                <Image src="/box23.png" width={320} height={400} />
              </div>
            </div>
            <div className={styles.line}>
              <div className={styles.imgBox}>
                <Image src="/box22.png" width={320} height={400} />
              </div>
            </div>
            <div className={styles.line}>
              <div className={styles.imgBox}>
                <Image src="/box21.png" width={320} height={400} />
              </div>
            </div>
            <div className={styles.line}>
              <div className={styles.imgBox}>
                <Image src="/box16.png" width={320} height={400} />
              </div>
            </div>
            <div className={styles.line}>
              <div className={styles.imgBox}>
                <Image src="/box20.png" width={320} height={400} />
              </div>
            </div>
            <div className={styles.line}>
              <div className={styles.imgBox}>
                <Image
                  src="/WhatsApp Image 2024-09-13 à 16.16.36_59209a36.jpg"
                  width={320}
                  height={400}
                />
              </div>
            </div>
            <div className={styles.line}>
              <div className={styles.imgBox}>
                <Image src="/box19.png" width={320} height={400} />
              </div>
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.lineText}>
              <div className={styles.img}>
                <h1 className={styles.h2}>Le Traiteur</h1>
                <p className={styles.one}>
                  Trouver le lieu idéal est une chose, faire de <br /> votre
                  événement un moment inoubliable en <br /> est une autre. C’est
                  en collaboration avec nos <br /> partenaires que nous vous
                  proposons une <br /> formule clef en main et sur-mesure : du
                  cocktail <br /> au diner assis, animations culinaires, ou
                  encore <br /> buffet à thème … Quelle que soit la typologie{" "}
                  <br /> de votre événement, en plus du lieu, nous vous <br />{" "}
                  proposons le traiteur adéquat.
                </p>
                <button className={styles.button}> TRAITEURS</button>
              </div>
            </div>
          </div>
          <h1 className={styles.h1}>L' animation</h1>

          <div className={styles.embla} ref={emblaRef}>
            <div className={styles.emblaContainer}>
              <div className={styles.lines}>
                <div className={styles.ImgBoxe}>
                  <Image src="/B0x3.png" width={300} height={500} />
                </div>
              </div>
              <div className={styles.lines}>
                <div className={styles.ImgBoxe}>
                  <Image src="/box4.png" width={300} height={500} />
                </div>
              </div>
              <div className={styles.lines}>
                <div className={styles.ImgBoxe}>
                  <Image src="/box5.png" width={300} height={500} />
                </div>
              </div>
              <div className={styles.lines}>
                <div className={styles.ImgBoxe}>
                  <Image src="/box6.png" width={300} height={500} />
                </div>
              </div>
              <div className={styles.lines}>
                <div className={styles.ImgBoxe}>
                  <Image src="/box7.png" width={300} height={500} />
                </div>
              </div>
              <div className={styles.lines}>
                <div className={styles.ImgBoxe}>
                  <Image src="/box8.png" width={300} height={500} />
                </div>
              </div>
              <div className={styles.lines}>
                <div className={styles.ImgBoxe}>
                  <Image src="/box9.png" width={300} height={500} />
                </div>
              </div>
            </div>

            <div className={styles.posts}>
              <div className={styles.leftPosts}>
                <div className={styles.boxes}>
                  <div className={styles.line}>
                    <h1 className={styles.h2}> Vos Events </h1>
                    <p className={styles.para}>
                      Vous souhaitez organiser un événement professionnel <br />{" "}
                      ou étudiant ou tout simplement louer une salle ?Le site de
                      l’événementiel trouvera tout ce qu’il <br /> vous faut
                      pour que votre événement soit parfait. <br />
                      <span className={styles.span}>
                        Soirées d’Entreprise –Séminaires – Lancements de
                        Produits – Team <br /> Building Soiré Étudiantes – Galas
                        – Rallyes Dansant – Wei & Séjours .😉"
                      </span>
                    </p>
                    <button className={styles.btn}>J'ORGANISE MON EVENT</button>
                  </div>
                </div>
              </div>

              <div className={styles.rightPosts}>
                <div className={styles.previewImage}>
                  <Image src="/b0x10.png" width={869} height={400} />
                </div>
              </div>
            </div>
          </div>

          <section className={styles.help}>
            <h1 className={styles.h2}> Nos engagements</h1>
            <div className={styles.main}>
              <div className={styles.two}>
                <div className={styles.Img}>
                  <h5 className={styles.h5}>Politique RSE</h5>
                  <p className={styles.one}>
                    Nous accordons une attention toute particulière à notre{" "}
                    <br />
                    politique RSE (Responsabilité Sociale des Entreprises) ainsi{" "}
                    <br />
                    qu’à sa mise en oeuvre. Depuis notre création en 2007, nous{" "}
                    <br />
                    développons une politique responsable et durable, et ce en{" "}
                    <br />
                    identifiant les impacts de chacune de nos décisions et{" "}
                    <br />
                    activités sur la société et notre environnement.
                  </p>
                  <button className={styles.buttons}> Politique RSE</button>
                </div>
                <div className={styles.Img}>
                  <h5 className={styles.h5}>Reforest’Action</h5>
                  <p className={styles.one}>
                    Outre notre politique RSE, nous nous sommes engagés auprès{" "}
                    <br />
                    de l’entreprise Reforest’Action : un arbre planté par <br />
                    événement organisé ! Le projet étant de restaurer et <br />
                    encourager la reforestation en faveur d’un monde plus <br />
                    durable.
                  </p>
                  <button className={styles.buttons}>Reforest’Action</button>
                </div>
              </div>
            </div>
          </section>

          <div className={styles.zero}>
            <div className={styles.add}>
              <div className={styles.Image}>
                <h1 className={styles.h2}>Nos references</h1>
                <p className={styles.four}>
                  Le site de l’événementiel a eu l’immense plaisir et honneur de
                  travailler <br /> avec un grand nombre d’agences et
                  entreprises, tous corps de métiers <br /> confondus. Recherche
                  de salle ou organisation d’événement, ils se sont <br />{" "}
                  tournés vers nous et nous ont fait confiance. C’est avec
                  énormément de <br /> reconnaissance que nous les citons
                  aujourd’hui.
                </p>
                <button className={styles.buttons}>Nos references </button>
              </div>

              <div className={styles.Images}>
                <div className={styles.logos}>
                  <Image src="/ford.png" width={100} height={100} />
                </div>
                <div className={styles.logos}>
                  <Image src="/heineken.png" width={100} height={100} />
                </div>
                <div className={styles.logos}>
                  <Image src="/levis.png" width={100} height={100} />
                </div>
                <div className={styles.logos}>
                  <Image src="/macdo.png" width={100} height={100} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
