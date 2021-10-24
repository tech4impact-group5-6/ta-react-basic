import { Component } from "react";
import movieList from "./dummy-data";
import MovieCard from "./MovieCard";


class App extends Component {
  render() {
    // console.log(animeList);
    return (
      <div className="container my-5">
        <h1 className="text-center">Anime List</h1>
        <div className="container my-5">
          <div id="daftar-anime" className="row">
            {
              movieList?.map((movie) =>(
                <MovieCard key={movie?.mal_id} movie={movie}></MovieCard>
              ))
            }
          
          </div> 
        </div>
      </div>
    );
  }
}

export default App;
