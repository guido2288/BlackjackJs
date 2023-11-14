const ScoreModal = ({gameResult , resetGame}) => {

  if(gameResult === null) return null

  return (
    <div className="winner">
        <div>
            <h2>{gameResult}</h2>

            <button onClick={resetGame}>Play again?</button>

        </div>
    </div>
  )
}

export default ScoreModal