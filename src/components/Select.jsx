export default function Input({ value, setValue, options, placeholder }) {
    return (
        <select
            className="form-select form-select"
            aria-describedby="genreHelp"

            value={value}
            onChange={(e) => setValue(e.target.value)}
        >
            <option value="">{placeholder}</option>
            {
                options.map((option, i) => (
                    <option key={i} value={option}>
                        {option}
                    </option>
                ))
            }

        </select>
    );
}