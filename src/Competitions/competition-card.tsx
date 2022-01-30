import { Competition } from "../types";
import "./index.css";

function CompetitionCard({ code, name, id, emblemUrl }: Competition) {
  return (
    <div style={{ flex: "1 1 0" }}>
      <div className="wrapper-competiton-card">
        <div className="container">
          <div
            className="background-image"
            style={{ backgroundImage: `url(${emblemUrl}` }}
          ></div>
        </div>
        <div className="competition-name">{name}</div>
      </div>
    </div>
  );
}
export default CompetitionCard;
