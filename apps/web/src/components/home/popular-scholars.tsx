import { POPULARSCHOLARS } from "../../constants";
import Post from "./post";

export default function PopularScholars() {
  return (
    <div className="flex gap-4 overflow-x-auto w-full justify-between">

      {
        POPULARSCHOLARS.map(scholar => (
          <Post {...scholar} key={scholar.id} />
        ))
      }

    </div>
  );
}
