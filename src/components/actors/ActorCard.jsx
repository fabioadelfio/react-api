export default function ActorCard ({ actor }) {
    return (
        <div className="card">
            <div className="card-title text-center">{actor.name}</div>
            <img src={actor.image} class="card-img-top" alt={actor.name}></img>
            <p className="card-text">Anno di nascita: {actor.birth_year}</p>
            <p className="card-text">Nazionalità: {actor.nationality}</p>
            <p className="card-text">Biografia: {actor.biography}</p>
            <p className="card-text">Riconoscimenti: {actor.awards.join(`, `)}</p>
        </div>
    );
}