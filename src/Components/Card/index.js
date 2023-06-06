import './Card.css'
import { AiFillCloseCircle } from 'react-icons/ai'

const Card = (props) => {
    return (
        <div className="card">
            <div className="header" style={{ backgroundColor: props.color }}>
                <AiFillCloseCircle className='deleteButton' onClick={props.whenDelete} size={25}/>
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