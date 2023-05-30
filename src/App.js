import { useState } from "react";
import Banner from "./Components/Banner";
import Form from "./Components/Form";
import Title from "./Components/Title";
import Movies from "./Components/Movies";
import Footer from "./Components/Footer";

function App() {

  const geners = [
    {
      name: 'comedy',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'drama',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'romance',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'horror',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'action',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      name: 'adventure',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'animation',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    },
    {
      name: 'sci-fi',
      primaryColor: '#120A8F',
      secondaryColor: '#b5ffff'
    },
    {
      name: 'thriller',
      primaryColor: '#9B111E',
      secondaryColor: '#ffcac1'
    }

  ]

  const [movies, setMovies] = useState([])

  const whenChangeMovie = (movie) => {
    setMovies([...movies, movie])
  }

  return (
    <div className="App">
        <Banner />
        <Form geners={geners.map(gener => gener.name)} whenRegisterMovie={movie => whenChangeMovie(movie)}/>
        <Title title="My movies"/>

        {geners.map(gener => <Movies 
        key={gener.name} 
        name={gener.name}
        primaryColor={gener.primaryColor}
        secondaryColor={gener.secondaryColor}
        movies={movies.filter(movie => movie.gener === gener.name)}
        
        />)}

        <Footer />

    </div>
  )
}

export default App;
