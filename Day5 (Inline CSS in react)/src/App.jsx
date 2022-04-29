import "./styles.css";

let heading = {
    textAlign: "center",
    color: "blue",
    fontWeight: "bold",
    textShadow: "black",
}

export default function App() {
  const name = "Mayur";
  const img1 = "https://picsum.photos/150/300";
  const img2 = "https://picsum.photos/id/237/200/300";
  const img3 = "https://picsum.photos/seed/picsum/200/300";
  return (
    <div className="App">
      <h1 style = {heading} contentEditable="true">
        Hello, This is {name}'s Image Gallery
      </h1>
      <div className="img_div">
        <img src={img1} alt="randomImage" />
        <img src={img2} alt="randomImage" />
        <img src={img3} alt="randomImage" />
      </div>
    </div>
  );
}
