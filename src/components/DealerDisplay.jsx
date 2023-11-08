
const DealerDisplay = ({dealerScore  , dealCard}) => {

  const imagenSrc = "../../public/images/";

  const suits = ["clubs", "diamonds", "hearts", "spades"];
  let randomSuit = suits[Math.floor(Math.random(3))]
  
  return (
    <div>
        <p>Dealer: {dealerScore}</p>

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