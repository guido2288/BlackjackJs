
const DealerDisplay = ({dealerScore  , dealCard}) => {

  const imagenSrc = "/images/";

  const suits = ["clubs", "diamonds", "hearts", "spades"];
  let randomSuit = suits[Math.floor(Math.random() * 4)]

  let scoreToDisplay = dealerScore.reduce((a, b) => a + b , 0)
  
  return (
    <div>
        <p>Dealer: {scoreToDisplay}</p>

        <div className="cardsContainer">

          {
            dealCard == 0 ? <img src={`${imagenSrc}card-back1.png`}/> 
            : <img src={`${imagenSrc}card-${randomSuit}-${dealCard}.png`}/> 
          }
          <img src={`${imagenSrc}card-back1.png`}/> 

         
       
        </div>

    </div>
  )
}

export default DealerDisplay