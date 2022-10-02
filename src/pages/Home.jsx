import { useState, useEffect } from "react";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {

    const res = await fetch(url);
    //transforma os dados em um array de objetos javascript
    const data = await res.json();

    setTopMovies(data.results);
  };

  //toda vez que o componente for iniciado será executado essa função  
  useEffect(() => {

    const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`;

    //é nesse momento que ocorre a chamada para API
    getTopRatedMovies(topRatedUrl);
  }, [])


  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando..</p>}
        {topMovies.length > 0 && topMovies.map((movie) => <p>{movie.title}</p>)}
      </div>
    </div>
  )

};

export default Home;