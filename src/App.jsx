import { useState } from 'react'
import './App.css'
import Box from "./components/Box"
import scissorsImage from "./assets/images/scissors.png";
import rockImage from "./assets/images/rock.png"
import paperImage from "./assets/images/paper.png"
import pendingImage from "./assets/images/pending.png";

// 1. 박스 2개(타이을, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다.
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3 4번 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패 결과에 다라 테두리 색이 바뀐다. (이기면 - 초록, 지면 - 빨강, 비기면 검은색)
const choice = {
  rock: {name:"Rock", img:rockImage},
  scissors: {name:"Scissors", img:scissorsImage},
  paper: {name:"Paper", img:paperImage}
}

const initialChoice = {name: "Pending", img: pendingImage}; // New initial choice object

function App() {
  const [userChoice, setUserChoice] = useState(initialChoice); // Initialize with pending
  const [computerChoice, setComputerChoice] = useState(initialChoice); // Initialize with pending
  const [result, setResult] = useState(""); 

  const randomChoice = () => {
    const itemArray = Object.keys(choice); 
    const randomItem = itemArray[Math.floor(Math.random() * itemArray.length)];
    return choice[randomItem];
  };

  const decideWinner = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (
      (user.name === "Rock" && computer.name === "Scissors") ||
      (user.name === "Scissors" && computer.name === "Paper") ||
      (user.name === "Paper" && computer.name === "Rock")
    ) {
      return "win";
    } else {
      return "lose";
    }
  };

  const playGame = (userSelection) => {
    const user = choice[userSelection];
    const computer = randomChoice();

    setUserChoice(user);
    setComputerChoice(computer);

    const gameResult = decideWinner(user, computer);
    setResult(gameResult);
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userChoice} result={result} />
        <Box title="Computer" item={computerChoice} result={result} />
      </div>
      <div className="buttons">
        <button onClick={() => playGame("scissors")}>가위</button>
        <button onClick={() => playGame("rock")}>바위</button>
        <button onClick={() => playGame("paper")}>보</button>
      </div>
      <h2>{result}</h2>
    </div>
  );
}

export default App;
