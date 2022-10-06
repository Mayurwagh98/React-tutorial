import "./styles.css";
import Sdata from "./Sdata";
import Card from "./Card";

export default function App() {
  return (
    <>
      <h1 className="heading_style">Top Netlflix Series</h1>

      <Card
        imgsrc={Sdata[0].imgscr}
        title={Sdata[0].title}
        sname={Sdata[0].sname}
        link={Sdata[0].links}
      />

      <Card
        imgsrc={Sdata[1].imgscr}
        title={Sdata[1].title}
        sname={Sdata[1].sname}
        link={Sdata[1].links}
      />

      <Card
        imgsrc={Sdata[2].imgscr}
        title={Sdata[2].title}
        sname={Sdata[2].sname}
        link={Sdata[2].links}
      />

      <Card
        imgsrc={Sdata[3].imgscr}
        title={Sdata[3].title}
        sname={Sdata[3].sname}
        link={Sdata[3].links}
      />
    </>
  );
}
