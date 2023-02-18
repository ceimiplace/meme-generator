import "./Meme.css";
import memeData from "./memeData";
export default function Meme() {
  function handleClick() {
    console.log(memeData.data.memes[Math.floor(Math.random() * 101)].url);
  }
  return (
    <main className="main--container">
      <form className="main--form" onSubmit={(e) => e.preventDefault()}>
        <input placeholder="Top text" className="form-input"></input>
        <input placeholder="Bottom text" className="form-input"></input>
        <button className="main-form--submit-button" onClick={handleClick}>
          Get a new meme image
        </button>
      </form>
    </main>
  );
}
