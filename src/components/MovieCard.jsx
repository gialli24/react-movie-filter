export default function MovieCard({ title, genre }) {
    return (
        <div className="col mb-4">
            <div className="card">
                <div className="card-body">
                    <span>{genre}</span>
                    <h3>{title}</h3>
                </div>
            </div>
        </div>
    );
}