export default function ActorCard ({ actor }) {
    return (
        <div className="col text-white">
            <div className="card h-100">
                <div className="card-title text-center fw-bold fs-5">{actor.name || "Nome non disponibile"}</div>
                <img src={actor.image} className="card-img-top" alt={actor.name || "Nome non disponibile"}></img>
                <div className="card-body">
                    <p className="card-text"><strong>Anno di nascita:</strong> {actor.birth_year || "N/A"}</p>
                    <p className="card-text"><strong>Nazionalità:</strong> {actor.nationality || "N/A"}</p>
                    <p className="card-text"><strong>Biografia:</strong> {actor.biography || "Biografia non disponibile"}</p>
                    <p className="card-text"><strong>Riconoscimenti:</strong> {Array.isArray(actor.awards) ? actor.awards.join(", ") : (actor.awards || "Nessuno")}</p>
                </div>
            </div>
        </div>
    );
}