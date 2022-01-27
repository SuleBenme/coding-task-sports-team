import { Competition } from "../types";
import "./index.css";

function CompetitionCard({ code, name, id, emblemUrl }: Competition) {
  return (
    <div>
      <div className="container">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${emblemUrl}` }}
        ></div>
      </div>
      <h4>{name}</h4>
    </div>
  );
}
export default CompetitionCard;
