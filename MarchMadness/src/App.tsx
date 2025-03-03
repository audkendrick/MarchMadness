import "./App.css";

const bandnames = [
  {
    name: "Dire Straits",
    members: "Mark Knopfler, David Knopfer, John Illsbley, Rick",
    formed: 1977,
  },
  { name: "R.E.M", members: "Michael, Pter, Mike, Bill", formed: 1999 },
  {
    name: "Collective Soul",
    members: "Ed, Ian, David, Ross, Shawn",
    formed: 1996,
  },
  {
    name: "Traffic",
    members: "Steve Winwood, Jim Capaldi Chris Wood, Dave Mason",
    formed: 1967,
  },
];

function Welcome() {
  return <h1>Criminally Underrated Bands</h1>;
}

function Band({
  name,
  members,
  formed,
}: {
  name: string;
  members: string;
  formed: number;
}) {
  return (
    <>
      <img></img>
      <h2>{name}</h2>
      <h3>Original Members {members}</h3>
      <h3>Formed: {formed}</h3>
    </>
  );
}

function BandList() {
  return (
    <>
      {bandnames.map((singleBand) => (
        <Band {...singleBand} />
      ))}
    </>
  );
}

function App() {
  return (
    <>
      <Welcome />
      <BandList />
    </>
  );
}

export default App;
