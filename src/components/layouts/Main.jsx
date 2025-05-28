import axios from "axios";
import { useEffect, useState } from "react";
import ActorCard from "../actors/ActorCard";

export default function Main() {

  const actorsUrl = "https://lanciweb.github.io/demo/api/actors/";
  const actressesUrl = "https://lanciweb.github.io/demo/api/actresses/";

  const [actors, setActors] = useState([]);
  const [actresses, setActresses] = useState([]);
  const [loadingActors, setLoadingActors] = useState(true);
  const [loadingActresses, setLoadingActresses] = useState(true);
  const [showActors, setShowActors] = useState(true);

  useEffect(() => {
    axios.get(actorsUrl)
      .then(response => {
        console.log(`Dati ricevuti:`, response.data);
        setActors(response.data);
      })
      .catch(error => {
        console.log(`Errore nel recupero dati:`, error)
      })
      .finally(() => {
        setLoadingActors(false);
      })
  }, []);

  useEffect(() => {
    axios.get(actressesUrl)
      .then(response => {
        console.log(`Dati ricevuti:`, response.data);
        setActresses(response.data);
      })
      .catch(error => {
        console.log(`Errore nel recupero dati:`, error)
      })
      .finally(() => {
        setLoadingActresses(false);
      })
  }, []);

  return (
    <main>
      <div className="container">
        <h1 className="my-4 text-center text-white fw-bold">ATTORI & ATTRICI</h1>

        {/* BONUS 2 */}
        <div className="card-container">
          <h2 className="fw-bold">Attori</h2>
          <div className="row row-cols-4 g-4 mb-5">
            {actors.map(actor => (
              <ActorCard key={actor.id} actor={actor} />
            ))}
          </div>

          <h2 className="fw-bold">Attrici</h2>

          <div className="row row-cols-4 g-4">
            {actresses.map(actress => (
              <ActorCard key={actress.id} actor={actress} />
            ))}
          </div>
        </div>

        {/* BONUS 1 */}
        {/* <button className="btn btn-primary my-3" onClick={() => setShowActors(!showActors)}>
          {showActors ? "Mostra Attrici" : "Mostra Attori"}
        </button> */}

        {/* {showActors && loadingActors && (
          <p className="fs-1 fw-bold text-center">Caricamento attori...</p>
        )}
        {!showActors && loadingActresses && (
          <p className="fs-1 fw-bold text-center">Caricamento attrici...</p>
        )} */}

        {/* {showActors && !loadingActors && (
          <div className="card-container">
            <div className="row row-cols-4 g-4">
              {actors.map(actor => (
                <ActorCard key={actor.id} actor={actor} />
              ))}
            </div>
          </div>
        )}

        {!showActors && !loadingActresses && (
          <div className="card-container">
            <div className="row row-cols-4 g-4">
              {actresses.map(actress => (
                <ActorCard key={actress.id} actor={actress} />
              ))}
            </div>
          </div>
        )} */}

      </div>
    </main>
  );
}
