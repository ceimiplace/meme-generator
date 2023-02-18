import "./Meme.css";
export default function Meme() {
  return (
    <main className="main--container">
      <form className="main--form">
        <input placeholder="Top text" className="form-input"></input>
        <input placeholder="Bottom text" className="form-input"></input>
        <button className="main-form--submit-button">
          Get a new meme image
        </button>
      </form>
    </main>
  );
}
