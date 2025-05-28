import axios from "axios";
import { useEffect, useState } from "react";
import ActorCard from "../actors/ActorCard";

export default function Main() {

  const apiUrl = "https://lanciweb.github.io/demo/api/actors/";

  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        console.log(`Dati ricevuti:`, response.data);
        setActors(response.data);
      })
      .catch(error => {
        console.log(`Errore nel recupero dati:`, error)
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  return (
    <main>
      <div className="container">
        <h1 className="my-4 text-center text-white fw-bold">Actors</h1>

        {loading && <p>Loading...</p>}

        <div className="card-container">
          <div className="row row-cols-4 g-4">
            {actors.map(actor => (
            <ActorCard key={actor.id} actor={actor} />
          ))}
          </div>
        </div>
      </div>
    </main>
  );
}
