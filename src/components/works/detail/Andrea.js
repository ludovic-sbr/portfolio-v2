import React, { useEffect } from 'react'
import Preloader from '../../preloader'
import andrea1 from "../../../assets/works/andrea/andrea1.jpg"
import andrea_cart from "../../../assets/works/andrea/andrea_cart.jpg"
import andrea_program from "../../../assets/works/andrea/andrea_program.jpg"
import andrea_fiverr from "../../../assets/works/andrea/andrea_fiverr.jpg"
import { BiLinkExternal } from 'react-icons/bi'
import { Carousel } from 'react-responsive-carousel'

const Andrea = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Preloader />
      <div className="works">
        <div className="section-bg container">
          <div className="row section-works">
            <h2> PROJET : ANDREA NATUROPATHIE </h2>

            <div className="row work-container mx-auto">
              <div className="col-xl-10 p-0 d-flex align-items-center mx-auto">
                <Carousel>
                  <div>
                    <img src={andrea1} />
                  </div>
                  <div>
                    <img src={andrea_cart} />
                  </div>
                  <div>
                    <img src={andrea_program} />
                  </div>
                  <div>
                    <img src={andrea_fiverr} />
                  </div>
                </Carousel>
              </div>
            </div>

            <div className="row mt-5">
              <h3> Introduction </h3>
              <p>
                Afin d'accroitre son activité de naturopathe sur Marseille, Andrea a fait appel à
                moi afin de développer sa présence sur internet et lui permettre de vendre
                ses programmes via une boutique en ligne. J'ai donc développé pour elle une
                application web où elle peut vendre ses programmes, publier ses e-books ou encore
                prendre des rendez-vous.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Environnement technique </h3>
              <p>
                → Interfaces sous React.js
                <br />
                → API Rest sous Node.js
                <br />
                → Realtime database sous Firebase pour les programmes.
                <br/>
                → Stripe pour les paiements.
                <br/>
                → Préprocesseur CSS Sass.
                <br/>
                → Framework CSS Bootstrap.
                <br />
                → Redux pour la centralisation de l'état.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Compétences acquises </h3>
              <p>
                Premier projet développé en tant que freelance, cette mission m'a permis
                de faire face pour la première aux différents problèmes que l'on peut rencontrer
                lors de la livraison (mise en place du compte client, mise en production, ect...)
                <br /><br />
                J'ai également, pour la première fois, mis en place un système de paiement et une
                base de données en temps réel (firebase).
                <br /><br />
                Enfin, ce projet m'a permis de progresser avec React.js et Node.js et de mettre en pratique
                ce que j'ai pu apprendre en formation.
              </p>
            </div>

            <div className="row mt-5">
              <h3> Ressources associées </h3>
              <a href="https://github.com/Feliiks/andrea-naturo-website" target="_blank" rel="noreferrer"><BiLinkExternal /> Code source.</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Andrea
