import Card from '../Card'
import './Movies.css'
import hexToRgba from 'hex-to-rgba';


const Movies = (props) => {
    return (
        props.movies.length > 0 && <section className='movies' style={{ backgroundColor: hexToRgba(props.color, '0.6')}}>
            <input type='color' className='inputColor' value={props.color} onChange={e => props.changeColor(e.target.value, props.gener.id)}/>
            <h3 style={{ borderColor: props.color }}>{props.name}</h3>

            <div className="movieCard">
                {props.movies.map(movie => <Card key={movie.id}
                    image={movie.image}
                    name={movie.name}
                    opinion={movie.opinion}
                    color={props.color}
                    whenDelete={props.whenDelete}
                    movie={movie} 
                    whenFavorite={props.whenFavorite}
                />)}
            </div>

        </section>
    )
}

export default Movies