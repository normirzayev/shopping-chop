import model from "../img/home/girl.png";
import "../style/home.css";
import soat from "../img/home/soat.png";
import soatgirl from "../img/home/soatgirl.png";
import tumor from "../img/home/tumor.png";
import sumka from "../img/home/sumka.png";
import atir from "../img/home/atir.png";
import etik from "../img/home/etik.png";
import achki from "../img/home/achki.png";
import tufli from "../img/home/tufli.png";
import chishka from "../img/home/chishka.png";
import shapka from "../img/home/shapka.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export default function Home () {
  
  const [data] = useState([
    {
      id:1,
      rasm: soat,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      id:2,
      rasm: soatgirl,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      id:3,
      rasm: soat,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      id:4,
      rasm: soat,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      id:5,
      rasm: soat,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      id:6,
      rasm: tumor,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      id:7,
      rasm: sumka,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      id:8,
      rasm: atir,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      id:9,
      rasm: etik,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      id:10,
      rasm: achki,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      id:11,
      rasm: tufli,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      id:12,
      rasm: soat,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      id:13,
      rasm: tufli,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      id:14,
      rasm: chishka,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      id:15,
      rasm: soat,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      id:16,
      rasm: shapka,
      nom:"Multicolored armless top",
      narx:10000
    },
  ])

  return(
    <div className="home">
      <div className="home-header">
        <div className="bg-logo">
          <img src={model} alt="girl-model" />
        </div>
      </div>
      <div className="shop-elements">
        <div className="sarlavha">
          <div className="chiziq"></div>
          <h1>Shop your style</h1>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae gravida cursus adipiscing viverra at tortor, egestas odio parturient. Morbi ut lorem in erat. Et et molestie diam diam ultricies. Scelerisque duis diam ac cras dictum adipiscing. Venenatis at sit proin ut vitae adipiscing id facilisis.</p>
      </div>
      <div className="cards">
        {
          data.map(item => (
            <div className="card" key={item.id}>
              <div className="rasm">
                <img src={item.rasm} alt="rasm" />
                <div className="karzinka">
                  <button> <FontAwesomeIcon icon={faHeart} className="karzinka-icon" /> </button>
                  <button>ADD TO CART <FontAwesomeIcon icon={faCartPlus} className="karzinka-icon"/> </button>
                </div>
              </div>
              <div className="card-about">
                <h4>{item.nom}</h4>
                <p>₦<span>{item.narx}</span></p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
} 