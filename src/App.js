import { useState } from "react";
import Banner from "./Components/Banner";
import Form from "./Components/Form";
import Title from "./Components/Title";
import Movies from "./Components/Movies";
import Footer from "./Components/Footer";

function App() {

  const [geners, setGener] = useState([
    {
      name: 'comedy',
      color: '#57C278',
    },
    {
      name: 'drama',
      color: '#82CFFA',
    },
    {
      name: 'romance',
      color: '#A6D157',
    },
    {
      name: 'horror',
      color: '#E06B69',
    },
    {
      name: 'action',
      color: '#DB6EBF',
    },
    {
      name: 'adventure',
      color: '#FFBA05',
    },
    {
      name: 'animation',
      color: '#FF8A29',
    },
    {
      name: 'sci-fi',
      color: '#120A8F',
    },
    {
      name: 'thriller',
      color: '#9B111E',
    }

  ])

  const initial = [{
    name: 'Lucas',
    opinion: 'Nice movie!',
    image: 'https://github.com/lucasF286.png',
    gener: geners[1].name
  }]

  const [movies, setMovies] = useState(initial)

  const whenChangeMovie = (movie) => {
    setMovies([...movies, movie])
  }

  function whenDelete () {
    console.log('deleting this movie');
  }

  function changeColor (color, id) {
    setGener(geners.map(gener => {
      if(gener.name === id) gener.color = color;
      return gener;
    }))
  }

  return (
    <div className="App">
        <Banner />
        <Form geners={geners.map(gener => gener.name)} whenRegisterMovie={movie => whenChangeMovie(movie)}/>
        <Title title="My movies"/>

        {geners.map(gener => <Movies 
        key={gener.name} 
        name={gener.name}
        color={gener.color}
        movies={movies.filter(movie => movie.gener === gener.name)}
        whenDelete={whenDelete}
        changeColor={changeColor}
        />)}

        <Footer />

    </div>
  )
}

export default App;
