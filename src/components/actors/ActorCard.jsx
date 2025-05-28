export default function ActorCard ({ actor }) {
    return (
        <div className="col text-white">
            <div className="card h-100">
                <div className="card-title text-center fw-bold fs-5">{actor.name}</div>
                <img src={actor.image} class="card-img-top" alt={actor.name}></img>
                <div className="card-body">
                    <p className="card-text"><strong>Anno di nascita:</strong> {actor.birth_year}</p>
                    <p className="card-text"><strong>Nazionalità:</strong> {actor.nationality}</p>
                    <p className="card-text"><strong>Biografia:</strong> {actor.biography}</p>
                    <p className="card-text"><strong>Riconoscimenti:</strong> {actor.awards.join(`, `)}</p>
                </div>
            </div>
        </div>
    );
}