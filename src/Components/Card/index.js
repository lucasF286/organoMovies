import './Card.css'
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

const Card = (props) => {

    function favorite () {
        props.whenFavorite(props.movie.id);
    }

    const propsFavorito = {
        size: 25,
        onClick: favorite
    }

    return (
        <div className="card">
            <div className="header" style={{ backgroundColor: props.color }}>
                <AiFillCloseCircle className='deleteButton' onClick={() => props.whenDelete(props.movie.id)} size={25} />
                <img src={props.image} alt={props.name} />
            </div>
            <div className='footer'>
                <h4>{props.name}</h4>
                <h5>{props.opinion}</h5>
                <div className='favorite'>
                    {props.movie.favorite
                        ? <AiFillHeart {...propsFavorito} color='#FF0000'/>
                        : <AiOutlineHeart {...propsFavorito} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Card