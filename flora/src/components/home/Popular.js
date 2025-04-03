import React from "react";
import ProductCardNormal from "./ProductCardNormal";
import "./Popular.css";

const Popular = () => {
    return (
        <div className='popular'>
          <h2 className="text">Popular nas lojas</h2>
          <div className="popular-products">
            <ProductCardNormal
            image={"/insetos.svg"}
            title={"nome"}
            price={19.06}
            rating={3}/>
            <ProductCardNormal
            image={"/insetos.svg"}
            title={"nome"}
            price={19.06}
            rating={3}/>
            <ProductCardNormal
            image={"/insetos.svg"}
            title={"nome"}
            price={19.06}
            rating={3}/>
            <ProductCardNormal
            image={"/insetos.svg"}
            title={"nome"}
            price={19.06}
            rating={3}/>
            <ProductCardNormal
            image={"/insetos.svg"}
            title={"nome"}
            price={19.06}
            rating={3}/>
          </div>
          <div className="adcard">
            <img src="/marimaria.png" alt="ad" />
            <img src="/marimaria2.png" alt="ad" />
            <img src="/ox.png" alt="ad" />
            <img src="/medina.png" alt="ad" />
          </div>
          <h2 className="text">Baseado no seu gosto</h2>
          <div className="popular-products">
            <ProductCardNormal
            image={"/insetos.svg"}
            title={"nome"}
            price={19.06}
            rating={3}/>
            <ProductCardNormal
            image={"/insetos.svg"}
            title={"nome"}
            price={19.06}
            rating={3}/>
            <ProductCardNormal
            image={"/insetos.svg"}
            title={"nome"}
            price={19.06}
            rating={3}/>
            <ProductCardNormal
            image={"/insetos.svg"}
            title={"nome"}
            price={19.06}
            rating={3}/>
            <ProductCardNormal
            image={"/insetos.svg"}
            title={"nome"}
            price={19.06}
            rating={3}/>
          </div>
          
        </div>
    );
};

export default Popular;