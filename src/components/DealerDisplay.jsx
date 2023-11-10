
const DealerDisplay = ({dealerScore  , dealCard}) => {

  const imagenSrc = "/images/";

  let scoreToDisplay = dealerScore.reduce((a, b) => a + b , 0)
  
  return (
    <div>
        <p>Dealer: {scoreToDisplay}</p>

        <div className="cardsContainer">

          {
            dealCard == 0 ? <img src={`${imagenSrc}card-back1.png`}/> 
            :
            
            <>
              {
                dealCard.map((card , idx) => {
                  return(
                    <img key={idx} src={`${imagenSrc}card-clubs-${card}.png`}/> 
                  )
                })
              }
            </>
            
          }
          
         
       
        </div>

    </div>
  )
}

export default DealerDisplay