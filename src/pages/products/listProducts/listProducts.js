import React  from "react";
import "./listProducts.css";
import ProductItem from "./ProductItem/ProductItem";



const ListProducts = (props) => {
  const {products} = props;
  return (
    <>
      <div className="container">
        <div className="listPro">
          {products && products.map((el) => (
            <ProductItem
              key={el.name}
              price={el.price}
              name={el.name}
              image={el.imageLink}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ListProducts;
