import './Card.css'

const Card = (props) => {
    return (
        <div className="card">
            <div className="header" style={{ backgroundColor: props.primaryColor }}>
                <div className="note">
                    Note: {props.note}
                </div>
                <img src={props.image} alt={props.name} />
            </div>
            <div className='footer'>
                <h4>{props.name}</h4>
                <h5>{props.opinion}</h5>
            </div>
        </div>
    )
}

export default Card