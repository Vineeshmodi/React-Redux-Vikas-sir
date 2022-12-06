import React from "react";

const Child = (props) => {
  //   const data = props;
  //   console.log(props);
  //   console.log(props.data.name);
  const { data } = props;
  return (
    <div>
      <center>
        {" "}
        <h1 style={{ color: "orangered" }}> vineesh {props.data.name}</h1>
        <h1 style={{ color: "green" }}> age :{props.data.age}</h1>
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <h1 style={{ color: "orangered" }}> vineesh {data.name}</h1>
        <h1 style={{ color: "green" }}> age :{data.age}</h1>{" "}
      </center>
    </div>
  );
};

export default Child;

// <Child data={{ name: "modi ji", age: 22 }} />
