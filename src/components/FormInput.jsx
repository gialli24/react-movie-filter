export default function FormInput({ label, value, setValue, placeholder, help }) {
    return (
        <div className="mb-3">
            <label htmlFor="title" className="form-label">{label}</label>

            <input
                type="text"
                className="form-control"
                placeholder={placeholder}

                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

            {
                help &&

                <small className="form-text text-danger">
                    {help}
                </small>
            }
        </div>
    );
}