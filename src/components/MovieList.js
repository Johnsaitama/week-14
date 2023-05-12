
import  { useState } from 'react';

import Movie from './Movie';

export default function MovieList(props) {
      
  

    const movies = [
        {
            Id: 0,
            Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSspP2ltQ55mD37PZRBGzlJKI-04mk6u9UruNUI9ZCu6DlQ1Kwa",
            Title: "Constantine",
            Year: "February 18, 2005",
            Bio: "As a suicide survivor, demon hunter John Constantine (Keanu Reeves) has literally been to hell and back  and he knows that when he dies, he's got a one-way ticket to Satan's realm unless he can earn enough goodwill to climb God's stairway to heaven. ",
            Reviews: [{
                Name: "hbk",
                Review: "Watched this as a kid, and I keep coming back to it. Now almost two decades since it came out, I saw it again. The world, visuals and cool to it still gets me. The pacing and worldbuilding is also superb, with you being given information in a subtle way Its a very dark and stylish movie, with an interesting mystical lore in a modern setting, jaded often bitter characters, that still try to do their best during the circumstances.",
                Rating:"1"
                
            }],
            
        },
        {
            Id: 2,
            Img: "https://m.media-amazon.com/images/M/MV5BNTFmMjM3M2UtOTIyZC00Zjk3LTkzODUtYTdhNGRmNzFhYzcyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
            Title: "IpMan",
            Year: "2008",
            Bio: "Ip Man is a series of Hong Kong martial arts films based on the life events of the Wing Chun master of the same name.",
            Reviews: [{
                Name: "",
                Review: "",
                Rating:"1"
                
            }],
        },
        {
            Id: 1,
            Img: "https://image.tmdb.org/t/p/original/9BwIgrRbqo9OlWdO8gJ6klv8Qzv.jpg",
            Title: "300",
            Year: "2006",
            Bio: "In 480 B.C. a state of war exists between Persia, led by King Xerxes (Rodrigo Santoro), and Greece. At the Battle of Thermopylae, Leonidas (Gerard Butler), king of the Greek city state of Sparta, leads his badly outnumbered warriors against the massive Persian army. Though certain death awaits the Spartans, their sacrifice inspires all of Greece to unite against their common enemy.",
            Reviews: [{
                Name: "sientist",
                Review: "It's no use to review this epic movie; it has become a classic. Snyder managed to give us an epic, battle-themed thriller with some fantastic elements and yet imbue it with so much historical veneer that one begins to question oneself: Did the Persians really have half-human monsters among their armies? That, my friend, is the mark of a great work of cinematic art. It's a movie worthy of timeless praise.",
                Rating:"1"
                
            }],
        }
    ]
    const [reviewlist, setreviewlist] = useState([{ Id:0, author:"net ninja",movieId:2 }])
    
    return (
        <div>
            <Movie movies={movies} reviewlist={reviewlist} />
            <p>
                {props.movie}
            </p>
        </div>
    
    )
}


