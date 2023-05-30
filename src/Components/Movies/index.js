import Card from '../Card'
import './Movies.css'

const Movies = (props) => {
    return (
        props.movies.length > 0 && <section className='movies' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>

            <div className="movieCard">
                {props.movies.map(movie => <Card key={movie}
                    image={movie.image}
                    name={movie.name}
                    opinion={movie.opinion}
                    primaryColor={props.primaryColor}
                    note={movie.note}
                />)}
            </div>

        </section>
    )
}

export default Movies