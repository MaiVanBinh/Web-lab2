import React, {useState, useEffect} from "react";
import "./products.css";

import Fliter from "./fliter/fliter";
import ListProducts from "./listProducts/listProducts";
import Pangination from "./pangination/pagination";
const PRODUCTS = [
  {
    imageLink: "http://mvbinz.xyz/images/1.jpg",
    name: "Rayon a-line Dress",
    price: "13.45",
    type: "Orther",
  },
  {
    imageLink: "http://mvbinz.xyz/images/2.jpg",
    name: "Black men Watch",
    price: "13.45",
    type: "Watch",
  },
  {
    imageLink: "http://mvbinz.xyz/images/3.jpg",
    name: "Men's Regular Fit Shirts",
    price: "13.45",
    type: "Shirts",
  },
  {
    imageLink: "http://mvbinz.xyz/images/4.jpg",
    name: "Men's Handbag",
    price: "13.45",
    type: "Handbag",
  },
  {
    imageLink: "http://mvbinz.xyz/images/5.jpg",
    name: "Women's Relaxed Fit Jeans",
    price: "13.45",
    type: "Orther",
  },
  {
    imageLink: "http://mvbinz.xyz/images/6.jpg",
    name: "Round Neck Printed Top",
    price: "13.45",
    type: "Orther",
  },
  {
    imageLink: "http://mvbinz.xyz/images/7.jpg",
    name: "Mens Running Shoe",
    price: "13.45",
    type: "Orther",
  },
  {
    imageLink: "http://mvbinz.xyz/images/8.jpg",
    name: "Men Pullover Sweater",
    price: "13.45",
    type: "Orther",
  },
];

const Products = () => {
    // khoi tao state viet hoa ten comp
    const [currType, setCurrType] = useState("Orther");
    const [currProducts, setCurrProducts] = useState([]);
  
    useEffect(() => {
      let newProd = [];
      if(currType === "All") {
        newProd = [...PRODUCTS];
        setCurrProducts(newProd);
      } else {
        newProd = PRODUCTS.filter(el => el.type === currType);
        setCurrProducts(newProd);
      }
    }, [currType]);
  
    const filterChangeHandler = (type) => {
      setCurrType(type);
    }

  return (
    <section>
      <Fliter onClickHandler={(el) => filterChangeHandler(el)} />
      <ListProducts products={currProducts}/>
      <Pangination />
    </section>
  );
};

export default Products;
