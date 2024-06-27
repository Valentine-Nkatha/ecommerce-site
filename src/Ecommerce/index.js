import "./index.css";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa";
import person from "../Assets/eccommerce1.jpeg";
// import headphones from "../Assets/headphones.jpeg";
// import speakers from "../Assets/speakers.jpeg";
// import whitepods from "../Assets/whitepods.jpeg";
// import blackpods from "../Assets/blackpods.jpeg";
function Ecommerce() {
  return (
    <div>
      <div className="landing-page-one">
        <p>
          +91-097567788862</p>
         <p> Get 50% on selection|Shop Now
        </p>
        <select id="categories">
          <option value="All Category">Eng</option>
        </select>
        <select id="categories">
          <option value="All Category">Location</option>
        </select>
      </div>
      <nav>
        <select id="categories">
          <option value="category">CategoryBrand</option>
          <option value="earpods">Watches</option>
          <option value="charger">Chargers</option>
        </select>
        <p>Deals</p>
          
          <p>What's New</p>
          
          <p>Delivery</p>
          <p>Search Product...<FaSearch/></p>
          <p><CgProfile/>Account</p>
          <p><FaCartPlus/> Cart</p>
          
        
      </nav>
      <div className="landing-page-image">
        <div>
        <button className="btn-discount">Weekly Discount</button>
        <h1>Premium Product Online Shop</h1>
        <h4>
          There are many variations of passages of Lorem ipsum available, but
          <br />
          the majority have suffered alteration in some form
        </h4>
        <button className="btn-shop">Shop Now</button>
      </div>
      <div>
        <img src = {person} alt="a-man" className="image"/>
      </div>
      </div>
      <div>
      <h2>Our Top Categories</h2>
      <div className="page-two">
        
        <select id="categories">
          <option value="All Category">All Category</option>
        </select>
        <select id="top-categories">
          <option value="Earphones">Earphones</option>
        </select>
        <select id="top-categories">
          <option value="wireless">Wireless</option>
        </select>
        <select id="top-categories">
          <option value="All Category">Review</option>
        </select>
        <select id="top-categories">
          <option value="All Category">Price</option>
        </select>
        <select id="top-categories">
          <option value="All Category">Color</option>
        </select>
        <select id="top-categories">
          <option value="All Category">Offer</option>
        </select>
        <p>Filters</p>
      </div>
      </div>
      {/* <div className="Top-categories">
        <img src={headphones} alt="headphones" className="Image"/>
        <img src={speakers} alt="speakers" className="Image"/>
        <img src={whitepods} alt="white-ear-pods" className="Image"/>
        <img src={blackpods} alt="white-ear-pods" className="Image"/>

      </div> */}
    </div>
  );
}
export default Ecommerce;
