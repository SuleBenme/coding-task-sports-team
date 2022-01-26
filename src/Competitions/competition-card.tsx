import { Competition } from "../types";

function CompetitionCard({ code, name, id }: Competition) {
  return (
    <div>
      <h1>{code}</h1>
    </div>
  );
}
export default CompetitionCard;
