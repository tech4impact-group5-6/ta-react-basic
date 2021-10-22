import React, {Component} from "react";

export default class MovieCard extends Component{

    constructor(props){
        super(props);     
    }

    render(){
      console.log(this.props);
        return(
            <>
            <div className="col-6 my-3">
              <div class="card h-100">
                <img
                  src={this.props?.movie?.image_url}
                  class="card-img-top"
                  alt="skilvul"
                />
                <div class="card-body">
                  <h5 class="card-title">{this.props?.movie?.title}</h5>
                  <h6 class="card-subtitle mb-2">
                    {/* {this.props?.movie?.type == "TV" ? `badge bg-danger`: `badge bg-success`} */}
                    {/* <span class={`badge bg-danger`}>TV</span> */}
                    {
                      this.props?.movie?.type === "TV"
                      ? <span class={`badge bg-danger`}>{this.props?.movie?.type}</span>
                      : <span class={`badge bg-success`}>{this.props?.movie?.type}</span>
                    }
                  </h6>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div class="card-body">
                  <a
                    href={this.props?.movie.url}
                    class="btn btn-primary w-100 text-uppercase"
                  >
                    readmore
                  </a>
                </div>
              </div>
            </div>
            </>
        )
    }
}