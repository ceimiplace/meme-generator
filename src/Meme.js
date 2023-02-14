import "./Meme.css";
export default function Meme() {
  return (
    <main>
      <form className="main--form">
        <input placeholder="Top text"></input>
        <input placeholder="Bottom text"></input>
        <button className="main-form--submit-button">
          Get a new meme image
        </button>
      </form>
    </main>
  );
}
