import "./App.css";
import marchMadnessData from "./CollegeBasketballTeams.json";

// Define a Team interface to represent the structure of each team object
interface Team {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}
// Define props for the TeamCard component
interface TeamCardProps {
  team: Team;
}

function Welcome() {
  return (
    <h1>
      It's time for MARCH MADNESS! Come take a look at your favorite NCAA teams
      and let's see who will win!
    </h1>
  );
}

function TeamCard({ team }: TeamCardProps) {
  return (
    <div className="team-card">
      <h2>{team.school}</h2>
      <p>
        <strong>Mascot:</strong> {team.name}
      </p>
      <p>
        <strong>Location:</strong> {team.city}, {team.state}
      </p>
    </div>
  );
}

function TeamList() {
  return (
    <div className="team-grid">
      {marchMadnessData.teams.map((team) => (
        <TeamCard key={team.tid} team={team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <>
      <Welcome />
      <TeamList />
    </>
  );
}

export default App;
