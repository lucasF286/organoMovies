import { useState } from "react";
import Banner from "./Components/Banner";
import Form from "./Components/Form";
import Title from "./Components/Title";
import Movies from "./Components/Movies";
import Footer from "./Components/Footer";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [geners, setGener] = useState([
    {
      id: uuidv4(),
      name: 'comedy',
      color: '#57C278',
    },
    {
      id: uuidv4(),
      name: 'drama',
      color: '#82CFFA',
    },
    {
      id: uuidv4(),
      name: 'romance',
      color: '#A6D157',
    },
    {
      id: uuidv4(),
      name: 'horror',
      color: '#E06B69',
    },
    {
      id: uuidv4(),
      name: 'action',
      color: '#DB6EBF',
    },
    {
      id: uuidv4(),
      name: 'adventure',
      color: '#FFBA05',
    },
    {
      id: uuidv4(),
      name: 'animation',
      color: '#FF8A29',
    },
    {
      id: uuidv4(),
      name: 'sci-fi',
      color: '#120A8F',
    },
    {
      id: uuidv4(),
      name: 'thriller',
      color: '#9B111E',
    }

  ])

  const initial = [
    {
      id: uuidv4(),
      name: 'Lucas',
      opinion: 'Nice movie!',
      image: 'https://github.com/lucasF286.png',
      gener: geners[1].name
    },
    {
      id: uuidv4(),
      name: 'Lucas',
      opinion: 'Nice movie!',
      image: 'https://github.com/lucasF286.png',
      gener: geners[1].name
    },
    
  ]

  const [movies, setMovies] = useState(initial)

  const whenChangeMovie = (movie) => {
    setMovies([...movies, movie])
  }

  function whenDelete(id) {
    setMovies(movies.filter(movie => movie.id !== id))
  }

  function changeColor(color, id) {
    setGener(geners.map(gener => {
      if (gener.id === id) gener.color = color;
      return gener;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form geners={geners.map(gener => gener.name)} whenRegisterMovie={movie => whenChangeMovie(movie)} />
      <Title title="My movies" />

      {geners.map(gener => <Movies
        key={gener.name}
        name={gener.name}
        color={gener.color}
        movies={movies.filter(movie => movie.gener === gener.name)}
        whenDelete={whenDelete}
        changeColor={changeColor}
        gener={gener}
      />)}

      <Footer />

    </div>
  )
}

export default App;
