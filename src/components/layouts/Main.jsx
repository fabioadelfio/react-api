import axios from "axios";
import { useEffect, useState } from "react";

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
      });
  }, []);

  return (
    <main>
      <div className="container">
        <h1 className="my-4 text-center">Cast</h1>

       {loading && <p>Loading...</p>}

       
      </div>

    </main>
  );
}
