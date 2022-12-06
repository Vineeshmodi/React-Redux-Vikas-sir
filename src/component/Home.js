import React from "react";

const Home = (props) => {
  console.log("home",props)

  return (
    <>
      <div className="add-to-cart">
        <span className="cart-count">+</span>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg"
          alt=""
        />
      </div>
      <h1>Home Page</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJNSnbV9iIcELLeaMJUwTwZLtIwihnao176Q&usqp=CAU"
            alt="abc"
          />
        </div>
        <div className="text-wrapper item">
          <b>
            <p>I-Phone</p>
            <p>Price: $1000.00</p>
          </b>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() => props.addToCartHandler({ price: 1000, name: "vineesh" })}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
