import Select from "./Select";

export default function FormSelect({ label, value, setValue, options, placeholder, help }) {
    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>

            <Select value={value} setValue={setValue} options={options} placeholder={placeholder} />

            {
                help &&

                <small className="form-text text-danger">
                    {help}
                </small>
            }
        </div>
    );
}