import { useState } from "react";
import DealerDisplay from "./components/DealerDisplay"
import PlayerDisplay from "./components/PlayerDisplay"

function App() {

  let suits = ["clubs", "diamonds", "hearts", "spades"];

  const [dealerScore, setDealerScore] = useState(0);
  const [dealCard, setDealCard] = useState(0);

  const [playerScore, setplayerScore] = useState(0);
  const [playerCard, setplayerCard] = useState(0);

  const hitCard = () => {
    let newCard = Math.floor(Math.random() * (13 - 1) + 1);
    return newCard;
  };

  const handleStartGame = () => {
    let dealerCardValue = hitCard();

    setDealCard(dealerCardValue);
    setDealerScore(dealerCardValue);

    let playerCardValue = hitCard();
    setplayerCard(playerCardValue);
    setplayerScore(playerCardValue)
    
  }

  return (
    <main>
      <h1>Blackjack Js</h1>
      <p>Want to play a round?</p>

      <DealerDisplay dealerScore={dealerScore} dealCard={dealCard}/>

      <PlayerDisplay playerScore={playerScore} playerCard={playerCard}/>

      <button onClick={handleStartGame}>Start Game</button>
      
    </main>
  )
}

export default App
