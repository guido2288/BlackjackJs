
const PlayerDisplay = ({playerScore , playerCard , gameStart}) => {

  const imagenSrc = "/images/";

  const suits = ["clubs", "diamonds", "hearts", "spades"];
  let randomSuit = suits[Math.floor(Math.random() * 4)];

  console.log(playerScore)

  let scoreToDisplay = playerScore.reduce((a, b) => a + b , 0)

  return (
    <div>
        <p>Player: {scoreToDisplay}</p>

        <div className="cardsContainer">
        {
            !gameStart ? <div><img src={`${imagenSrc}card-back1.png`}/> <img src={`${imagenSrc}card-back1.png`}/> </div> 
            : <>
              {
                playerCard.map((card , idx) => {
                  return(
                    <img key={idx} src={`${imagenSrc}card-${randomSuit}-${card}.png`}/> 
                  )
                })
              }
              </> 
        }
        </div>

    </div>
  )
}

export default PlayerDisplay