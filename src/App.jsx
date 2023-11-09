import { useState } from "react";
import DealerDisplay from "./components/DealerDisplay"
import PlayerDisplay from "./components/PlayerDisplay"

function App() {

  let suits = ["clubs", "diamonds", "hearts", "spades"];

  const [dealerScore, setDealerScore] = useState([]);
  const [dealCard, setDealCard] = useState([]);

  const [playerScore, setplayerScore] = useState([]);
  const [playerCard, setplayerCard] = useState([]);

  const [gameStart , setGameStart] = useState(false);
  const [message, setMessage] = useState('Want to play a round?');

  const hitCard = () => {
    let newCard = Math.floor(Math.random() * (13 - 1) + 1);

    return newCard;
  };

  

  const handleStartGame = () => {

    setGameStart(true);

    setMessage("Want to draw a card new card?")

    let dealerCardValue =   hitCard() ;
    
    setDealCard([...dealCard, dealerCardValue]);

    if(dealerCardValue >= 11) dealerCardValue = 10

    setDealerScore([...dealerScore, dealerCardValue]);

    let playerCardValue1 = hitCard();

    let playerCardValue2 = hitCard();
   
    setplayerCard([...playerCard,playerCardValue1, playerCardValue2]);

    if(playerCardValue1 >= 11) playerCardValue1 = 10
    if(playerCardValue1 == 1) playerCardValue1 = 11
    if(playerCardValue2 >= 11) playerCardValue2 = 10
    if(playerCardValue2 == 1) playerCardValue2 = 11

    setplayerScore([...playerScore ,playerCardValue1 , playerCardValue2]);

    
  };

  return (
    <main>
      <h1>Blackjack Js</h1>
      <p>{message}</p>

      <DealerDisplay dealerScore={dealerScore} dealCard={dealCard}/>

      <PlayerDisplay playerScore={playerScore} playerCard={playerCard} gameStart={gameStart}/>

      {
        !gameStart ? <button onClick={handleStartGame}>Start Game</button>
        : <>
            <button>New Card</button> 
            <button>Stand</button>          
          </> 
      }

      
      
    </main>
  )
}

export default App
