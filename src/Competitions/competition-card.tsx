import { Link } from "react-router-dom";
import { Competition } from "../types";
import "./index.css";

function CompetitionCard({ code, name, id, emblemUrl }: Competition) {
  return (
    <div style={{ flex: "1 1 0" }}>
      <Link
        style={{ color: "inherit", textDecoration: "inherit" }}
        to={"competitions/" + id}
      >
        <div className="wrapper-competiton-card">
          <div className="container">
            <div
              className="background-image"
              style={{ backgroundImage: `url(${emblemUrl}` }}
            ></div>
          </div>
          <div className="competition-name">{name}</div>
        </div>
      </Link>
    </div>
  );
}
export default CompetitionCard;
