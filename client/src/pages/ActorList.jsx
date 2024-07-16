import { useLoaderData } from "react-router-dom";
import "../styles/actorList.css";
import ActorCard from "../components/ActorCard";

function ActorList() {
  const actorInfos = useLoaderData();
  return (
    <section className="actorPopularList">
      <h1>Acteurs populaires</h1>
      <div className="actorList">
        {actorInfos.map((actor) => (
          <ActorCard actor={actor} key={actor.id} />
        ))}
      </div>
    </section>
  );
}
export default ActorList;
