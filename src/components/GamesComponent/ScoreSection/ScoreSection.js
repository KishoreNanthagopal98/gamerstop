import "../ScoreSection/scoresection.scss";
import crackergif from "../../../assets/firecracker-emoji-celebration.gif";

function ScoreSection({ score, handleModal }) {
  return (
    <>
      <div className="backdrop"></div>
      <div className="gameover-modal">
        <h2 className="gameover-title">Game Over!!</h2>
        {Number(score) == 0 && <p className="gameover-score gameover-title">You can do it!</p>}
        <p className="gameover-score gameover-title">Your Score is: {score}</p>
				<img src={crackergif} className="cracker-gif"/>
        <img src={crackergif} className="cracker-gif-right"/>
        <br />
        <button className="closebtn" onClick={handleModal}>Close</button>
				
      </div>
    </>
  );
}

export default ScoreSection;
