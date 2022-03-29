import { useState } from "react";
import "../style/cloth_shoe_access.css";
import soat from "../img/home/soat.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Clothes () {
  const [data] = useState([
    {
      id:1,
      rasm: soat,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      id:2,
      rasm: soat,
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
      rasm: soat,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      id:7,
      rasm: soat,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      id:8,
      rasm: soat,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      id:9,
      rasm: soat,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      id:10,
      rasm: soat,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      id:11,
      rasm: soat,
      nom:"Multicolored armless top",
      narx:10000
    },
    {
      id:12,
      rasm: soat,
      nom:"Multicolored armless top",
      narx:10000
    },
  ])
  return(
    <div className="clothes">
      <h1>CLOTHES</h1>
      <div className="clothes-flex">
        <div className="category">
          <div className="past-chiziq">
            <h2>CATEGORY</h2>
          </div>
          <ul>
            <li>All</li>
            <li>Dresses</li>
            <li>Denim</li>
            <li>Jeans</li>
            <li>Jumpsuits</li>
            <li>Tops</li>
            <li>Jackets and coats</li>
            <li>Pants</li>
            <li>Shorts</li>
            <li>Skirts</li>
            <li>Loungerie & underwear</li>
            <li>Leather</li>
            <li>Sweaters & knits</li>
          </ul>
          <div className="size">
            <div className="box-nav">
              <h1>SIZE</h1>
              <p>clear  x</p>
            </div>
            <div className="size_number">
              <div>XXS</div>
              <div>XS</div>
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>23</div>
              <div>24</div>
              <div>25</div>
              <div>26</div>
              <div>27</div>
              <div>28</div>
              <div>29</div>
              <div>30</div>
              <div>31</div>
              <div>32</div>
            </div>
          </div>
          <div className="color">
            <div className="box-nav">
              <h1>color</h1>
              <p>clear  x</p>
            </div>
            <div className="color_box">
              <div className="color_flex">
                <div className="beige"></div>
                <p>Beige</p>
              </div>
              <div className="color_flex">
                <div className="blue"></div>
                <p>blue</p>
              </div>
              <div className="color_flex">
                <div className="black"></div>
                <p>black</p>
              </div>
              <div className="color_flex">
                <div className="orange"></div>
                <p>orange</p>
              </div>
              <div className="color_flex">
                <div className="green"></div>
                <p>green</p>
              </div>
              <div className="color_flex">
                <div className="borwn"></div>
                <p>borwn</p>
              </div>
              <div className="color_flex">
                <div className="pruple"></div>
                <p>purple</p>
              </div>
              <div className="color_flex">
                <div className="gold"></div>
                <p>gold</p>
              </div>
              <div className="color_flex">
                <div className="taupe"></div>
                <p>taupe</p>
              </div>
              <div className="color_flex">
                <div className="white"></div>
                <p>white</p>
              </div>
              <div className="color_flex">
                <div className="pink"></div>
                <p>pink</p>
              </div>
              <div className="color_flex">
                <div className="red"></div>
                <p>red</p>
              </div>
            </div>
          </div>
          <div className="price">
            <div className="box-nav">
              <h1>SIZE</h1>
              <p>clear  x</p>
            </div>
            <div className="color-flex">
              <input type="checkbox" />
              <pre>₦0  -  ₦10,000 </pre>
            </div>
            <div className="color-flex">
              <input type="checkbox" />
              <pre>₦10,000  -  ₦20,000 </pre>
            </div>
            <div className="color-flex">
              <input type="checkbox" />
              <pre>₦20,000  -  ₦50,000 </pre>
            </div>
            <div className="color-flex">
              <input type="checkbox" />
              <pre>₦50,000  -  ₦100,000 </pre>
            </div>
            <div className="color-flex">
              <input type="checkbox" />
              <pre>₦100,000  -  ₦200,000 </pre>
            </div>
            <div className="color-flex">
              <input type="number" placeholder="₦" />
                <span>to</span>
              <input type="number" placeholder="₦" />
              <button>Apply</button>
            </div>
          </div>
        </div>
        <div className="clothes-card">
          <div className="past-chiziq">
            <select>
              <option value="sort by popular">sort by popular</option>
              <option value="most popular">most popular</option>
              <option value="best selling ">best selling</option>
              <option value="price: high to low">price: high to low</option>
              <option value="price: low to high">price: low to high</option>
            </select>
          </div>
          <div className="clothes-cards">
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
      </div>
    </div>
  )
} 