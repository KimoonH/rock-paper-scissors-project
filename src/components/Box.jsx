import React from 'react';
import rockImage from "../assets/images/rock.png";
import paperImage from "../assets/images/paper.png";
import scissorsImage from "../assets/images/scissors.png";

const Box = ({ title, item, result }) => {
  const imageMap = {
    rock: rockImage,
    paper: paperImage,
    scissors: scissorsImage,
  };

  let borderColor = "";
  if (result === "win" && title === "You") {
    borderColor = "green";
  } else if (result === "lose" && title === "You") {
    borderColor = "red";
  } else if (result === "tie") {
    borderColor = "black";
  } else if (result === "win" && title === "Computer") {
    borderColor = "red";
  } else if (result === "lose" && title === "Computer") {
    borderColor = "green";
  }

  return (
    <div className={`box ${borderColor}`}>
          <h1>{title}</h1>
          {item && <img src={item.img} alt={item.name}/>}
          {!item && <p>선택해주세요</p>}
          <h2>{item ? item.name : "선택 없음"}</h2>
    </div>
  )
}

export default Box