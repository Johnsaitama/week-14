
import React from 'react';
import {Rating} from '@mui/material'
import MovieList from './MovieList'
import reviewList from "./reviewList"
import ReviewForm from './ReviewForm';
import { useState } from "react";
import Review from './Review';


export default function Movie(props) {

  const [allReviews, setAllReviews] = useState([{
      Name: "mad man",
      Review: "Watched this as a kid, and I keep coming back to it. Now almost two decades since it came out, I saw it again. The world, visuals and cool to it still gets me. The pacing and worldbuilding is also superb, with you being given information in a subtle way Its a very dark and stylish movie, with an interesting mystical lore in a modern setting, jaded often bitter characters, that still try to do their best during the circumstances.",
      Rating: "3",
      Id: 0,
      movieID: 0,
  }, {
      Name: "sientist",
      Review: "",
      Rating: 4,
      Id: 1,
      movieID: 3,
  }, {
      Name: "two mad",
      Review: "Ip Man is a martial arts action film at its best. There's rarely another film like this.Ip Man is a genre-defining kung fu epic. The film covers a bit of pre-war China into the Second Sino-Japanese War. Studio sets are accurate and beautiful, giving us a peek into life during this era. The representation of pre-war China especially makes one nostalgic for a bygone era.",
      Rating: 4,
      Id: 2,
      movieID: 2,
  }, {
      Name: "TheLittleSongbird",
      Review: "It's no use to review this epic movie; it has become a classic. Snyder managed to give us an epic, battle-themed thriller with some fantastic elements and yet imbue it with so much historical veneer that one begins to question oneself: Did the Persians really have half-human monsters among their armies? That, my friend, is the mark of a great work of cinematic art. It's a movie worthy of timeless praise",
      Rating: 5,
      Id: 4,
      movieID: 1
  }, {
      Name: "big chungus",
      Review: "",
      Rating: 3,
      Id: 5,
      movieID: 0
  }])
  console.log(props.movies.Reviews)
  function addReview(review) {
      setAllReviews([...allReviews, review])
  }

  return (
      console.log(props.movies),
      <>
          {props.movies.map(movie => (
              <div key={movie.Id}>
                  <div className="container">
                      <div className="row my-3 mx-auto">
                          <div className="col-lg">
                              <div className="card mx-auto mb-5" style={{ width: "60rem" }}>
                                  <img className="card-img-top mt-2 mx-auto" src={movie.Img} style={{ width: "auto", height: "25rem" }} />
                                  <div className="card-header mt-1">
                                      <h2 className="card-title mx-auto mt-3">{movie.Title}</h2>
                                      <h4 className="card-subtitle mx-auto">{movie.Year}</h4>
                                  </div>
                                  <div className="card-body mx-auto">
                                      <p className="card-text">{movie.Bio}</p>
                                      <div className="card-footer">
                                          <h3>Reviews</h3>
                                          {allReviews.filter(Review => (Review.movieID == movie.Id)).map(review => (
                                              <div key={review.Id}>
                                                  <p className="blockquote card-text">{review.Review}</p>
                                                  <p className="blockquote-footer card-text">User: {review.Name} Rating: {review.Rating}/5</p>
                                              </div>
                                          ))}
                                          <h3 className="mt-3">Leave your Review!</h3>
                                          <ReviewForm onSubmit={addReview} movieID={movie.Id} />
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div >

              </div>
          ))}
      </>
  )
}
