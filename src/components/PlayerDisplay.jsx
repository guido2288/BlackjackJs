
const PlayerDisplay = ({playerScore , playerCard}) => {

  const imagenSrc = "../../public/images/";

  const suits = ["clubs", "diamonds", "hearts", "spades"];
  let randomSuit = suits[Math.floor(Math.random(3))]

  return (
    <div>
        <p>Player: {playerScore}</p>

        <div className="cardsContainer">
        {
            playerCard == 0 ? <img src={`${imagenSrc}card-back1.png`}/> 
            : <img src={`${imagenSrc}card-${randomSuit}-${playerCard}.png`}/> 
          }
          <img src={`${imagenSrc}card-back1.png`}/> 
       
        </div>

    </div>
  )
}

export default PlayerDisplay