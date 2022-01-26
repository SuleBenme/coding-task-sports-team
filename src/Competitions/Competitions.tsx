import axios from "axios";
import { useState } from "react";
import { Competition } from "../types";
import CompetitionCard from "./competition-card";
// Free tier
const CODES = [
  "WC",
  "CL",
  "BL1",
  "DED",
  "BSA",
  "PD",
  "FL1",
  "ELC",
  "PPL",
  "EC",
  "SA",
  "PL",
  "CLI",
];

function Competitions() {
  const [competitions, setCompetitions] = useState<Competition[]>([]);
  const fetch = () => {
    axios
      .get("http://api.football-data.org/v2/competitions/", {
        headers: {
          "X-Auth-Token": "e8e3e8181a1146c08cc86bd0afd03110",
        },
      })
      .then(function (response) {
        console.log(response);
        let competitions_available: Competition[] = [];
        response.data.competitions.forEach((competition: Competition) => {
          if (CODES.includes(competition.code)) {
            console.log(competition);
            competitions_available.push(competition);
          }
        });
        setCompetitions(competitions_available);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  return (
    <div>
      <button onClick={fetch}>Test competition</button>
      {competitions.length > 0 &&
        competitions.map((competition) => (
          <CompetitionCard
            code={competition.code}
            id={competition.id}
            name={competition.name}
          />
        ))}
    </div>
  );
}

export default Competitions;
