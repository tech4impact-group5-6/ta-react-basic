import { Component } from "react";

class MovieCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div className="col-12 col-lg-3 col-md-4 col-sm-6 my-3">
            <div className="card h-100">
                <img
                    src={this.props?.movie?.image_url}
                    className="card-img-top"
                    alt="skilvul"
                />
                <div className="card-body">
                    <h5 className="card-title">{this.props?.movie?.title}</h5>
                    <h6 class="card-subtitle mb-2">
                        {this.props?.movie?.type === "TV" ? (
                            <span class={`badge bg-danger`}>
                                {this.props?.movie?.type}
                            </span>
                        ) : (
                            <span class={`badge b-success`}>
                                {this.props?.movie?.type}
                            </span>
                        )}
                    </h6>
                    <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                    </p>
                </div>
                <div className="card-body">
                    <a
                    href={this.props?.movie?.url}
                    target="_blank"
                    className="btn btn-primary w-100 text-uppercase"
                    >
                    readmore
                    </a>
                </div>
            </div>
        </div>
      )
    }
}

export default MovieCard;