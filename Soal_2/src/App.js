import { Component } from "react";
// import animeList from "./dummy-data";
import MovieCard from "./MovieCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    setTimeout(() => this.fetchMovieList(), 1500);
  }
  componentDidUpdate(movieProps, movieState) {
    if (movieState.movieList.length !== this.state.movieList.length) {
      this.setState({
        isLoading: false,
      });
    }
  }
  async fetchMovieList() {
    const response = await fetch("https://api.jikan.moe/v3/top/anime");
    const data = await response.json();
    this.setState({ movieList: data?.top });
  }
  render() {
    return (
      <div className="container my-5">
        <h1 className="text-center">Anime List SOAL 02</h1>
        <div className="container my-5">
          <div id="daftar-anime" className="row">
            {this.state.isLoading ? (
              <h2>Loading...</h2>
            ) : (
              this.state.movieList.map((movie) => (
                <MovieCard key={movie?.mal_id} movie={movie}></MovieCard>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
