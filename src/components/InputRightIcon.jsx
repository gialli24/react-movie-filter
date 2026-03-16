export default function InputRightIcon({ value, setValue, icon, placeholder }) {
    return (
        <>
            <input
                type="text"
                className="form-control"
                placeholder={placeholder}

                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <span className="input-group-text">
                <i className={`bi bi-${icon}`}></i>
            </span>
        </>
    );
}