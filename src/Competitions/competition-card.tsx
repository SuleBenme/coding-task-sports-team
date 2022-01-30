import { Link } from "react-router-dom";
import { Competition } from "../types";
import "./index.css";

function CompetitionCard({ code, name, id, emblemUrl }: Competition) {
  return (
    <div style={{ flex: "1 1 0" }}>
      <div className="wrapper-competiton-card">
        <Link
          style={{ color: "inherit", textDecoration: "inherit" }}
          to={"competitions/" + id}
        >
          <div className="container">
            <div
              className="background-image"
              style={{ backgroundImage: `url(${emblemUrl}` }}
            ></div>
          </div>
          <div className="competition-name">{name}</div>
        </Link>
      </div>
    </div>
  );
}
export default CompetitionCard;
