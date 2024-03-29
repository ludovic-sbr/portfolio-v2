import React from "react";
import { Link } from "react-router-dom";
import { RightCornerRibbon } from "react-ribbons";

import flutter from "../../assets/skills/flutter.png";
import dart from "../../assets/skills/dart.png";
import electron from "../../assets/skills/electron.png";
import reactjs from "../../assets/skills/reactjs.png";
import javascript from "../../assets/skills/js.png";
import firebase from "../../assets/skills/firebase.png";
import angular from "../../assets/skills/angular.png";
import git from "../../assets/skills/github.png";
import nodejs from "../../assets/skills/nodejs.png";
import bootstrap from "../../assets/skills/bootstrap.png";
import prisma from "../../assets/skills/prisma.svg";
import redux from "../../assets/skills/redux.png";
import sass from "../../assets/skills/sass.png";
import webstorm from "../../assets/skills/webstorm.png";
import stripe from "../../assets/skills/stripe.png";
import mysql from "../../assets/skills/mysql.png";
import mongodb from "../../assets/skills/mongodb.png";
import typescript from "../../assets/skills/typescript.png";
import sql from "../../assets/skills/sql.png";
import gitlab from "../../assets/skills/gitlab.png";
import trello from "../../assets/skills/trello.png";
import threejs from "../../assets/skills/threejs.png";

import ps4 from "../../assets/works/ps/ps4.png";
import stefanos1 from "../../assets/works/stefanos/stefanos1.jpg";
import andrea1 from "../../assets/works/andrea/andrea1.jpg";
import lsvibes_home from "../../assets/works/lsvibes/lsvibes_home.jpg";
import scgc1 from "../../assets/works/solana/solana1.jpg";
import hts1 from "../../assets/works/hts/hts1.jpg";
import ffcc_home from "../../assets/works/ffcc/ffcc_home.jpg";
import lavandes_locations from "../../assets/works/lavandes-web/lavandes3.jpg";
import mobilapp_portfolio from "../../assets/works/lavandes-mobile/mobilapp_portfolio.png";
import sl_home from "../../assets/works/southland/sll3.png";

import { BiLinkExternal } from "react-icons/bi";

const SectionWorks = () => {
  return (
    <div className="row section-works">
      <h2> TRAVAUX </h2>

      <div className="row work-container mx-auto mt-5 mb-5 p-0 d-flex justify-content-between">
        <div className="col-xl-6 d-flex align-items-center">
          <div className="work-content mx-auto mb-4 mb-xl-0">
            <h3> SOUTHLAND LAUNCHER </h3>
            <p>
              Nouveau projet de serveur roleplay basé sur le mythique GTA San
              Andreas, l'équipe de SouthLand a souhaité le développement d'un
              launcher performant. Work in progress.
            </p>
            <ul className="skills-list col-12 mt-2 mb-4">
              <li>
                <img src={electron} alt="reactjs" />
                <span> Electron </span>
              </li>
              <li>
                <img src={reactjs} alt="react" />
                <span> React </span>
              </li>
              <li>
                <img src={typescript} alt="redux" />
                <span> Typescript </span>
              </li>
              <li>
                <img src={nodejs} alt="nodejs" />
                <span> NodeJs </span>
              </li>
              <li>
                <img src={threejs} alt="threejs" />
                <span> ThreeJS </span>
              </li>
              <li>
                <img src={gitlab} alt="stripe" />
                <span> GitLab </span>
              </li>
            </ul>
            <div className="buttons">
              <a
                href="https://github.com/ludovic-sbr/lavandes-mobil-app"
                target="_blank"
                rel="noreferrer"
              >
                <button id="github">
                  GitHub repository <BiLinkExternal />
                </button>
              </a>
              <Link
                to="/works/detail/southland-launcher"
                style={{ width: "40%" }}
              >
                <button id="mission-detail"> Plus de détails</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-6 p-0 d-flex align-items-center position-relative">
          <RightCornerRibbon
            backgroundColor="#D69F00"
            color="#f0f0f0"
            fontFamily="Arial"
          >
            Freelance
          </RightCornerRibbon>
          <div className="work-carousel mx-auto">
            <img src={sl_home} alt="First slide" />
          </div>
        </div>
      </div>

      <div className="row work-container mx-auto mt-5 mb-5 p-0 d-flex justify-content-between">
        <div className="col-xl-6 d-flex align-items-center">
          <div className="work-content mx-auto mb-4 mb-xl-0">
            <h3> LAVANDES MOBILE APP </h3>
            <p>
              Afin de permettre aux salariés de gérer de manière digitale le
              Camping, le Camping des Lavandes***** a décidé de déplacer la
              gestion des locations, réservations et vacanciers sur une nouvelle
              application mobile.
            </p>
            <ul className="skills-list col-12 mt-2 mb-4">
              <li>
                <img src={flutter} alt="reactjs" />
                <span> Flutter </span>
              </li>
              <li>
                <img src={dart} alt="bootstrap" />
                <span> Dart </span>
              </li>
              <li>
                <img src={firebase} alt="redux" />
                <span> Firebase </span>
              </li>
              <li>
                <img src={mongodb} alt="nodejs" />
                <span> SpringBoot </span>
              </li>
              <li>
                <img src={mysql} alt="firebase" />
                <span> MySQL </span>
              </li>
              <li>
                <img src={gitlab} alt="stripe" />
                <span> GitLab </span>
              </li>
            </ul>
            <div className="buttons">
              <a
                href="https://github.com/ludovic-sbr/lavandes-mobil-app"
                target="_blank"
                rel="noreferrer"
              >
                <button id="github">
                  GitHub repository <BiLinkExternal />
                </button>
              </a>
              <Link
                to="/works/detail/lavandes-mobilapp"
                style={{ width: "40%" }}
              >
                <button id="mission-detail"> Plus de détails</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-6 p-0 d-flex align-items-center position-relative">
          <RightCornerRibbon
            backgroundColor="#FF5733"
            color="#f0f0f0"
            fontFamily="Arial"
          >
            Formation
          </RightCornerRibbon>
          <div className="work-carousel mx-auto">
            <img src={mobilapp_portfolio} alt="First slide" />
          </div>
        </div>
      </div>

      <div className="row work-container mx-auto mt-5 mb-5 p-0 d-flex justify-content-between">
        <div className="col-xl-6 d-flex align-items-center">
          <div className="work-content mx-auto mb-4 mb-xl-0">
            <h3> LAVANDES WEB APP </h3>
            <p>
              Avec le développement de sa clientèle et afin d'éviter une grande
              perte de temps avec la gestion des appels, le Camping des
              Lavandes***** a décidé de déplacer la prise de réservation sur
              internet.
            </p>
            <ul className="skills-list col-12 mt-2 mb-4">
              <li>
                <img src={reactjs} alt="reactjs" />
                <span> React.js </span>
              </li>
              <li>
                <img src={typescript} alt="bootstrap" />
                <span> TypeScript </span>
              </li>
              <li>
                <img src={redux} alt="redux" />
                <span> Redux </span>
              </li>
              <li>
                <img src={mongodb} alt="nodejs" />
                <span> SpringBoot </span>
              </li>
              <li>
                <img src={mysql} alt="firebase" />
                <span> MySQL </span>
              </li>
              <li>
                <img src={gitlab} alt="stripe" />
                <span> GitLab </span>
              </li>
            </ul>
            <div className="buttons">
              <a
                href="https://github.com/ludovic-sbr/lavandes-web-app"
                target="_blank"
                rel="noreferrer"
              >
                <button id="github">
                  GitHub repository <BiLinkExternal />
                </button>
              </a>
              <Link to="/works/detail/lavandes-webapp" style={{ width: "40%" }}>
                <button id="mission-detail"> Plus de détails</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-6 p-0 d-flex align-items-center position-relative">
          <RightCornerRibbon
            backgroundColor="#FF5733"
            color="#f0f0f0"
            fontFamily="Arial"
          >
            Formation
          </RightCornerRibbon>
          <div className="work-carousel mx-auto">
            <img src={lavandes_locations} alt="First slide" />
          </div>
        </div>
      </div>

      <div className="row work-container mx-auto mt-5 mb-5 p-0 d-flex justify-content-between">
        <div className="col-xl-6 d-flex align-items-center">
          <div className="work-content mx-auto mb-4 mb-xl-0">
            <h3> PROCEDES SPECIAUX </h3>
            <p>
              Dans le cadre de mon apprentissage chez Key Performance
              Consulting, j'ai eu la chance de travailler sur une application
              web de suivi de procédés spéciaux pour le Service Industriel de
              l'aéronautique.
            </p>
            <ul className="skills-list col-12 mt-2 mb-4">
              <li>
                <img src={reactjs} alt="reactjs" />
                <span> React.js </span>
              </li>
              <li>
                <img src={typescript} alt="bootstrap" />
                <span> TypeScript </span>
              </li>
              <li>
                <img src={redux} alt="redux" />
                <span> Redux </span>
              </li>
              <li>
                <img src={mongodb} alt="nodejs" />
                <span> SpringBoot </span>
              </li>
              <li>
                <img src={sql} alt="firebase" />
                <span> PostgreSQL </span>
              </li>
              <li>
                <img src={gitlab} alt="stripe" />
                <span> GitLab </span>
              </li>
            </ul>
            <div className="buttons">
              <button id="github" disabled>
                Code non consultable
              </button>
              <Link
                to="/works/detail/procedes-speciaux"
                style={{ width: "40%" }}
              >
                <button id="mission-detail"> Plus de détails</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-6 p-0 d-flex align-items-center position-relative">
          <RightCornerRibbon
            backgroundColor="#3371FF"
            color="#f0f0f0"
            fontFamily="Arial"
          >
            Alternance
          </RightCornerRibbon>
          <div className="work-carousel mx-auto">
            <img src={ps4} alt="First slide" />
          </div>
        </div>
      </div>

      <div className="row work-container mx-auto mt-5 mb-5 p-0 d-flex justify-content-between">
        <div className="col-xl-6 d-flex align-items-center">
          <div className="work-content mx-auto mb-4 mb-xl-0">
            <h3> FFC CAMARGUAISE </h3>
            <p>
              Dans le cadre de mon stage de première année de BTS, j'ai pu
              travailler sur la nouvelle fonctionnalité du site web de la
              Fédération française de Course Camargaise. Cette web app permet la
              demande et la gestion de sa carte jeune.
            </p>
            <ul className="skills-list col-12 mt-2 mb-4">
              <li>
                <img src={angular} alt="angular" />
                <span> Angular </span>
              </li>
              <li>
                <img src={sass} alt="sass" />
                <span> Sass </span>
              </li>
              <li>
                <img src={nodejs} alt="nodejs" />
                <span> Node.js </span>
              </li>
              <li>
                <img src={prisma} alt="prisma" />
                <span> Prisma </span>
              </li>
              <li>
                <img src={mysql} alt="mysql" />
                <span> MySQL </span>
              </li>
              <li>
                <img src={git} alt="git" />
                <span> Git </span>
              </li>
            </ul>
            <div className="buttons">
              <a
                href="https://github.com/Feliiks/carte-jeune-ffcc"
                target="_blank"
                rel="noreferrer"
              >
                <button id="github">
                  GitHub repository <BiLinkExternal />
                </button>
              </a>
              <Link to="/works/detail/ffcc" style={{ width: "40%" }}>
                <button id="mission-detail"> Plus de détails</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-6 p-0 d-flex align-items-center position-relative">
          <RightCornerRibbon
            backgroundColor="#3371FF"
            color="#f0f0f0"
            fontFamily="Arial"
          >
            Stage
          </RightCornerRibbon>
          <div className="work-carousel mx-auto">
            <img src={ffcc_home} alt="First slide" />
          </div>
        </div>
      </div>

      <div className="row work-container mx-auto mt-5 mb-5 p-0 d-flex justify-content-between">
        <div className="col-xl-6 d-flex align-items-center">
          <div className="work-content mx-auto mb-4 mb-xl-0">
            <h3> ANDREA NATUROPATHIE </h3>
            <p>
              Afin d'accroitre son activité de naturopathe sur Marseille, Andrea
              a fait appel à moi afin de développer sa présence sur internet et
              lui permettre de vendre ses programmes via une boutique en ligne.
            </p>
            <ul className="skills-list col-12 mt-2 mb-4">
              <li>
                <img src={reactjs} alt="reactjs" />
                <span> React.js </span>
              </li>
              <li>
                <img src={bootstrap} alt="bootstrap" />
                <span> Bootstrap </span>
              </li>
              <li>
                <img src={redux} alt="redux" />
                <span> Redux </span>
              </li>
              <li>
                <img src={nodejs} alt="nodejs" />
                <span> Node.js </span>
              </li>
              <li>
                <img src={firebase} alt="firebase" />
                <span> Firebase </span>
              </li>
              <li>
                <img src={stripe} alt="stripe" />
                <span> Stripe </span>
              </li>
            </ul>
            <div className="buttons">
              <a
                href="https://github.com/Feliiks/andrea-naturo-website"
                target="_blank"
                rel="noreferrer"
              >
                <button id="github">
                  GitHub repository <BiLinkExternal />
                </button>
              </a>
              <Link to="/works/detail/andrea-naturo" style={{ width: "40%" }}>
                <button id="mission-detail"> Plus de détails</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-6 p-0 d-flex align-items-center position-relative">
          <RightCornerRibbon
            backgroundColor="#D69F00"
            color="#f0f0f0"
            fontFamily="Arial"
          >
            Freelance
          </RightCornerRibbon>
          <div className="work-carousel mx-auto">
            <img src={andrea1} alt="First slide" />
          </div>
        </div>
      </div>

      <div className="row work-container mx-auto mt-5 mb-5 p-0 d-flex justify-content-between">
        <div className="col-xl-6 d-flex align-items-center">
          <div className="work-content mx-auto mb-4 mb-xl-0">
            <h3> STEFANOS PRONOSTICS </h3>
            <p>
              Suivis par plus de 15 000 abonnés sur Twitter, Stefanos a voulu se
              lancer dans la publication de pronostics par abonnement. Afin de
              répondre à ce besoin, j'ai développé pour eux une application web
              entièrement fonctionnelle.
            </p>
            <ul className="skills-list col-12 mt-2 mb-4">
              <li>
                <img src={reactjs} alt="reactjs" />
                <span> React.js </span>
              </li>
              <li>
                <img src={bootstrap} alt="bootstrap" />
                <span> Bootstrap </span>
              </li>
              <li>
                <img src={redux} alt="redux" />
                <span> Redux </span>
              </li>
              <li>
                <img src={nodejs} alt="nodejs" />
                <span> Node.js </span>
              </li>
              <li>
                <img src={mongodb} alt="firebase" />
                <span> MongoDB </span>
              </li>
              <li>
                <img src={stripe} alt="stripe" />
                <span> Stripe </span>
              </li>
            </ul>
            <div className="buttons">
              <a
                href="https://github.com/Feliiks/stefanos"
                target="_blank"
                rel="noreferrer"
              >
                <button id="github">
                  GitHub repository <BiLinkExternal />
                </button>
              </a>
              <Link to="/works/detail/stefanos" style={{ width: "40%" }}>
                <button id="mission-detail"> Plus de détails</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-6 p-0 d-flex align-items-center position-relative">
          <RightCornerRibbon
            backgroundColor="#D69F00"
            color="#f0f0f0"
            fontFamily="Arial"
          >
            Freelance
          </RightCornerRibbon>
          <div className="work-carousel mx-auto">
            <img src={stefanos1} alt="First slide" />
          </div>
        </div>
      </div>

      <div className="row work-container mx-auto mt-5 mb-5 p-0 d-flex justify-content-between">
        <div className="col-xl-6 d-flex align-items-center">
          <div className="work-content mx-auto mb-4 mb-xl-0">
            <h3> HT SQUARE </h3>
            <p>
              Je suis intervenu en tant que développeur web pour l'équipe de
              Brain in a Vat afin de réaliser un site web complètement animé et
              immersif. Ce projet a été réalisé accompagné d'un web designer.
            </p>
            <ul className="skills-list col-12 mt-2 mb-4">
              <li>
                <img src={reactjs} alt="reactjs" />
                <span> React.js </span>
              </li>
              <li>
                <img src={sass} alt="sass" />
                <span> Sass </span>
              </li>
              <li>
                <img src={javascript} alt="javascript" />
                <span> Javascript </span>
              </li>
              <li>
                <img src={trello} alt="trello" />
                <span> Trello </span>
              </li>
              <li>
                <img src={git} alt="git" />
                <span> Git </span>
              </li>
              <li>
                <img src={webstorm} alt="webstorm" />
                <span> Webstorm </span>
              </li>
            </ul>
            <div className="buttons">
              <a
                href="https://github.com/Feliiks/hacking-times-square"
                target="_blank"
                rel="noreferrer"
              >
                <button id="github">
                  GitHub repository <BiLinkExternal />
                </button>
              </a>
              <Link to="/works/detail/hts" style={{ width: "40%" }}>
                <button id="mission-detail"> Plus de détails</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-6 p-0 d-flex align-items-center position-relative">
          <RightCornerRibbon
            backgroundColor="#D69F00"
            color="#f0f0f0"
            fontFamily="Arial"
          >
            Freelance
          </RightCornerRibbon>
          <div className="work-carousel mx-auto">
            <img src={hts1} alt="First slide" />
          </div>
        </div>
      </div>

      <div className="row work-container mx-auto mt-5 mb-5 p-0 d-flex justify-content-between">
        <div className="col-xl-6 d-flex align-items-center">
          <div className="work-content mx-auto mb-4 mb-xl-0">
            <h3> SOLANA </h3>
            <p>
              Afin de faire connaître leur activité, le SCGC a fait appel à moi
              afin de développeur leur site vitrine, leur permettant ainsi de
              présenter convenablement leur entreprise.
            </p>
            <ul className="skills-list col-12 mt-2 mb-4">
              <li>
                <img src={reactjs} alt="reactjs" />
                <span> React.js </span>
              </li>
              <li>
                <img src={bootstrap} alt="bootstrap" />
                <span> Bootstrap </span>
              </li>
              <li>
                <img src={sass} alt="sass" />
                <span> Sass </span>
              </li>
              <li>
                <img src={trello} alt="trello" />
                <span> Trello </span>
              </li>
              <li>
                <img src={git} alt="git" />
                <span> Git </span>
              </li>
              <li>
                <img src={webstorm} alt="webstorm" />
                <span> Webstorm </span>
              </li>
            </ul>
            <div className="buttons">
              <a
                href="https://github.com/Feliiks/cannabis-growers"
                target="_blank"
                rel="noreferrer"
              >
                <button id="github">
                  GitHub repository <BiLinkExternal />
                </button>
              </a>
              <Link to="/works/detail/cgc" style={{ width: "40%" }}>
                <button id="mission-detail"> Plus de détails</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-6 p-0 d-flex align-items-center position-relative">
          <RightCornerRibbon
            backgroundColor="#D69F00"
            color="#f0f0f0"
            fontFamily="Arial"
          >
            Freelance
          </RightCornerRibbon>
          <div className="work-carousel mx-auto">
            <img src={scgc1} alt="First slide" />
          </div>
        </div>
      </div>

      <div className="row work-container mx-auto mt-5 mb-5 p-0 d-flex justify-content-between">
        <div className="col-xl-6 d-flex align-items-center">
          <div className="work-content mx-auto mb-4 mb-xl-0">
            <h3> LOS SANTOS VIBES </h3>
            <p>
              Dans le cadre du développement du serveur de jeu Los Santos Vibes,
              j'ai développé une application web permettant aux joueurs de
              consulter leurs statistiques en jeu et aux administrateurs de
              réaliser diverses tâches.
            </p>
            <ul className="skills-list col-12 mt-2 mb-4">
              <li>
                <img src={reactjs} alt="reactjs" />
                <span> React.js </span>
              </li>
              <li>
                <img src={bootstrap} alt="bootstrap" />
                <span> Bootstrap </span>
              </li>
              <li>
                <img src={redux} alt="redux" />
                <span> Redux </span>
              </li>
              <li>
                <img src={nodejs} alt="nodejs" />
                <span> Node.js </span>
              </li>
              <li>
                <img src={prisma} alt="prisma" />
                <span> Prisma </span>
              </li>
              <li>
                <img src={mysql} alt="mysql" />
                <span> MySQL </span>
              </li>
            </ul>
            <div className="buttons">
              <a
                href="https://github.com/ludovic-sbr/lsvibes"
                target="_blank"
                rel="noreferrer"
              >
                <button id="github">
                  GitHub repository <BiLinkExternal />
                </button>
              </a>
              <Link to="/works/detail/lsvibes" style={{ width: "40%" }}>
                <button id="mission-detail"> Plus de détails</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-6 p-0 d-flex align-items-center position-relative">
          <RightCornerRibbon
            backgroundColor="#979797"
            color="#f0f0f0"
            fontFamily="Arial"
          >
            Personnel
          </RightCornerRibbon>
          <div className="work-carousel mx-auto">
            <img src={lsvibes_home} alt="First slide" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWorks;
