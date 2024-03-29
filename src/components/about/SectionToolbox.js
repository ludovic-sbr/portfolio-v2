import React from "react";

import html from "../../assets/skills/html.png";
import electron from "../../assets/skills/electron.png";
import css from "../../assets/skills/css-3.png";
import mongodb from "../../assets/skills/mongodb.png";
import reactjs from "../../assets/skills/reactjs.png";
import javascript from "../../assets/skills/js.png";
import firebase from "../../assets/skills/firebase.png";
import flutter from "../../assets/skills/flutter.png";

import angular from "../../assets/skills/angular.png";
import git from "../../assets/skills/github.png";
import nodejs from "../../assets/skills/nodejs.png";
import jakarta from "../../assets/skills/jakarta.png";
import nosql from "../../assets/skills/nosql.png";
import bootstrap from "../../assets/skills/bootstrap.png";
import typescript from "../../assets/skills/typescript.png";
import trello from "../../assets/skills/trello.png";

import prisma from "../../assets/skills/prisma.svg";
import redux from "../../assets/skills/redux.png";
import sass from "../../assets/skills/sass.png";
import mongoose from "../../assets/skills/mongoose.png";
import springboot from "../../assets/skills/springboot.png";
import axios from "../../assets/skills/axios.png";
import dart from "../../assets/skills/dart.png";
import mysql from "../../assets/skills/mysql.png";

import threejs from "../../assets/skills/threejs.png";
import agile from "../../assets/skills/agile.png";
import devops from "../../assets/skills/devops.png";

const SectionToolbox = () => {
  return (
    <div className="row section-toolbox">
      <h2> BOITE A OUTILS </h2>
      <div className="toolbox">
        <ul className="skills-list col-12 mt-4">
          <li>
            <img src={html} alt="html" />
            <span> Html </span>
          </li>
          <li>
            <img src={threejs} alt="prisma" />
            <span> ThreeJS </span>
          </li>
          <li>
            <img src={agile} alt="prisma" />
            <span> DevOps </span>
          </li>
          <li>
            <img src={devops} alt="prisma" />
            <span> Agile </span>
          </li>
          <li>
            <img src={css} alt="css" />
            <span> Css </span>
          </li>
          <li>
            <img src={mongodb} alt="mongodb" />
            <span> MongoDB </span>
          </li>
          <li>
            <img src={javascript} alt="javascript" />
            <span> Javascript </span>
          </li>
          <li>
            <img src={firebase} alt="firebase" />
            <span> Firebase </span>
          </li>
        </ul>
        <ul className="skills-list col-12">
          <li>
            <img src={angular} alt="angular" />
            <span> Angular </span>
          </li>
          <li>
            <img src={git} alt="git" />
            <span> Git </span>
          </li>
          <li>
            <img src={nodejs} alt="nodejs" />
            <span> Node.js </span>
          </li>
          <li>
            <img src={jakarta} alt="jakarta" />
            <span> Java </span>
          </li>
          <li>
            <img src={nosql} alt="nosql" />
            <span> NoSQL </span>
          </li>
          <li>
            <img src={bootstrap} alt="bootstrap" />
            <span> Bootstrap </span>
          </li>
          <li>
            <img src={typescript} alt="typescript" />
            <span> Typescript </span>
          </li>
          <li>
            <img src={trello} alt="trello" />
            <span> Trello </span>
          </li>
        </ul>
        <ul className="skills-list col-12">
          <li>
            <img src={prisma} alt="prisma" />
            <span> Prisma </span>
          </li>
          <li>
            <img src={redux} alt="redux" />
            <span> Redux </span>
          </li>
          <li>
            <img src={sass} alt="sass" />
            <span> Sass </span>
          </li>
          <li>
            <img src={mongoose} alt="mongoose" />
            <span> Mongoose </span>
          </li>
          <li>
            <img src={springboot} alt="springboot" />
            <span> SpringBoot </span>
          </li>
          <li>
            <img src={axios} alt="axios" />
            <span> Axios </span>
          </li>
          <li>
            <img src={dart} alt="dart" />
            <span> Dart </span>
          </li>
          <li>
            <img src={mysql} alt="mysql" />
            <span> MySQL </span>
          </li>
        </ul>
        <ul className="skills-list col-12">
          <li></li>
          <li></li>
          <li>
            <img src={electron} alt="electron" />
            <span> Electron </span>
          </li>
          <li>
            <img src={reactjs} alt="reactjs" />
            <span> React.js </span>
          </li>
          <li>
            <img src={flutter} alt="flutter" />
            <span> Flutter </span>
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <p className="mt-4">
        En parallèle de mes études, je me forme à de nouveaux languages et
        technologies afin de rester à jours et de devenir toujours plus
        autonome.
      </p>
    </div>
  );
};

export default SectionToolbox;
