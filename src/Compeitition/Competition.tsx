import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import { getDateTo, getDateFrom } from "../utils/dateFormat";
import { Match } from "../types";
import "./index.css";

function Competition() {
  const [loading, setLoading] = useState<boolean>(false);
  const [matches, setMatches] = useState<Match[]>([]);
  const { competitionId } = useParams<string>();
  console.log(competitionId);

  useEffect(() => {
    const fetch = () => {
      setLoading(true);
      axios
        .get(
          "http://api.football-data.org/v2/competitions/" +
            competitionId +
            "/matches?dateFrom=" +
            getDateFrom() +
            "&dateTo=" +
            getDateTo(),
          {
            headers: {
              "X-Auth-Token": "e8e3e8181a1146c08cc86bd0afd03110",
            },
          }
        )
        .then(function (response) {
          console.log(response);
          let matches: Match[] = [];
          response.data.matches.forEach((match: any) => {
            const test: Match = {
              names: {
                awayTeam: match.awayTeam.name,
                homeTeam: match.homeTeam.name,
              },
              id: match.id,
              utcDate: match.utcDate,
              result: {
                awayTeam: match.score.fullTime.awayTeam,
                homeTeam: match.score.fullTime.homeTeam,
              },
              status: match.status,
            };
            console.log(test);
            matches.push(test);
          });
          setMatches(matches);
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    };
    fetch();
  }, []);

  return (
    <div>
      {!loading ? (
        <>
          <h4>Competition</h4>
          <div className="wrapper">
            {matches.length > 0 &&
              matches.map((match) => (
                <div className="card">
                  <div>{match.names.homeTeam}</div>
                  {match.status === "FINISHED" && (
                    <div>
                      {match.result.homeTeam} - {match.result.awayTeam}
                    </div>
                  )}
                  {match.status === "SCHEDULED" && <div>NOT STARTED</div>}
                  {match.status === "POSTPONED" && <div>POSTPONED</div>}
                  {match.status === "CANCELED" && <div>POSTPONED</div>}

                  <div>{match.names.awayTeam}</div>
                </div>
              ))}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Competition;
