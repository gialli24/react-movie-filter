export default function Button({ type, style, label }) {
    return (
        <button
            type={type}
            className={`btn btn-${style}`}
        >
            {label}
        </button>
    );
}