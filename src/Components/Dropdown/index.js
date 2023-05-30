import "./Dropdown.css"

const Dropdown = (props) => {
    return (
        <div className="dropdown">
            <label>{props.label}</label>
            <select required={props.required} onChange={parameter => (props.whenChanged(parameter.target.value))}>
                <option></option>
                {props.parameter.map(parameter => <option key={parameter}>{parameter}</option>)}
            </select>
        </div>
    )
}

export default Dropdown