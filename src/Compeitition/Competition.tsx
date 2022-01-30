import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import { getDateTo, getDateFrom } from "../utils/dateFormat";

function Competition() {
  const [loading, setLoading] = useState<boolean>(false);
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
    <>
      <h4>Competition</h4>
    </>
  );
}

export default Competition;
