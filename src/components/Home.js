import model from "../img/home/girl.png";
import "../style/home.css";
import soat from "../img/home/soat.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export default function Home () {
  
  const [data, setData] = useState([
    {
      rasm: soat,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      rasm: soat,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      rasm: soat,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      rasm: soat,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      rasm: soat,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      rasm: soat,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      rasm: soat,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      rasm: soat,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      rasm: soat,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      rasm: soat,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      rasm: soat,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      rasm: soat,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      rasm: soat,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      rasm: soat,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      rasm: soat,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      rasm: soat,
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
            <div className="card">
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