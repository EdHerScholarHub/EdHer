import { EDHERSSCHOLARS } from "../../constants";
import Post from "./post";

export default function EdhersChoiceScholars() {
  return (
    <div className="flex gap-4 overflow-x-auto w-full justify-between">
      {
        EDHERSSCHOLARS.map(scholar => (
          <Post {...scholar} key={scholar.id} />
        ))
      }
    </div>
  );
}
