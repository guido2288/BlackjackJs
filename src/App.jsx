import { useEffect, useState } from "react";
import confetti from 'canvas-confetti'
import DealerDisplay from "./components/DealerDisplay"
import PlayerDisplay from "./components/PlayerDisplay"
import ScoreModal from "./components/ScoreModal";

function App() {

  const [dealerScore, setDealerScore] = useState([]);
  const [dealCard, setDealCard] = useState([]);

  const [playerScore, setplayerScore] = useState([]);
  const [playerCard, setplayerCard] = useState([]);

  const [gameStart , setGameStart] = useState(false);
  const [message, setMessage] = useState('Want to play a round?');

  const [gameResult, setGameResult] = useState(null);

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
    if(dealerCardValue == 1) dealerCardValue = 11

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

  const handleNewCard = () => {
    let newCardDraw = hitCard();
    
    setplayerCard([...playerCard, newCardDraw]);

    if (newCardDraw >= 11) newCardDraw = 10;
    if (newCardDraw == 1) newCardDraw = 1;
    
    setplayerScore([...playerScore, newCardDraw]);

  }

  const handleStand = () => {
    let newCardDealer = hitCard();

    setDealCard([...dealCard, newCardDealer]);

    if(newCardDealer >= 11) newCardDealer = 10;
    if(newCardDealer == 1) newCardDealer = 11;

    setDealerScore([...dealerScore, newCardDealer]);

  }

  const checkwinner = (player , dealer) => {

    if(player === 21){
      confetti()
      return setGameResult("You Win!")
    }
    if(dealer === 21){
      return setGameResult("You Lost!")
    }
    if(player > 21){
      return setGameResult("You Lost!")
    }
    if(dealCard > 21){
      return setGameResult("You Lost!")
    }

    if((player - 21) > (dealer - 21)){
      confetti()
      return setGameResult("You Win!")
    }

    if((dealer - 21) > (player - 21)){
      return setGameResult("You Lost!")
    }

    if(dealer == player){
      return setGameResult("Tied Game")
    }
  }

  const resetGame = () => {
    setDealerScore([])
    setDealCard([])

    setplayerScore([])
    setplayerCard([])

    setGameStart(false)
    setGameResult(null)
  }

  useEffect(() => {

    let scoreDealerTotal = dealerScore.reduce((a, b) => a + b , 0);
    let scorePlayerTotal = playerScore.reduce((a, b) => a + b , 0);

    if(dealCard.length > 1){

      if(scoreDealerTotal <= 16){
        let newCardDealer = hitCard();
  
        setDealCard([...dealCard, newCardDealer]);
    
        if(newCardDealer >= 11) newCardDealer = 10;
        if(newCardDealer == 1) newCardDealer = 11;
    
        setDealerScore([...dealerScore, newCardDealer]);

        handleStand()
      } else {
        
        setTimeout(() =>  {
          checkwinner(scorePlayerTotal,scoreDealerTotal )
        }, 1000)

      }
    
    }

  }, [dealCard , playerCard])
  
  return (
    <main>
      <h1>Blackjack Js</h1>
      <p>{message}</p>

      <DealerDisplay dealerScore={dealerScore} dealCard={dealCard}/>

      <PlayerDisplay playerScore={playerScore} playerCard={playerCard} gameStart={gameStart}/>

      {
        !gameStart ? <button onClick={handleStartGame}>Start Game</button>
        : <>
            <button onClick={handleNewCard} >New Card</button> 
            <button onClick={handleStand}>Stand</button>          
          </> 
      }

      <ScoreModal gameResult={gameResult} resetGame={resetGame}/>
      
      
    </main>
  )
}

export default App
