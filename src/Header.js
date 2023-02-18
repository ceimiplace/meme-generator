import "./Header.css";
export default function Header() {
  return (
    <header className="header">
      <img src="./images/trollFace.png" className="header--logo" />
      <h2 className="header--title">Meme Generator</h2>
      <p className="header--couse">React Meme Generator</p>
    </header>
  );
}
