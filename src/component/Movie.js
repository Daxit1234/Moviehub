import React, { useEffect, useState } from "react";
import Movieitem from "./Movieitem";
 function Movie() {
    const [data, setdata] = useState(null);
   let loaddata=async() => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3e4413209bmshe1f993c54217b42p149a13jsn7f481d93c921',
            'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
        }
    };
    
    fetch('https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=1', options)
        .then(response => response.json())
        .then(response => setdata(response))
        .catch(err => console.error(err));
    }
    useEffect(()=>{
        loaddata()
    },[])
   try {
       return (
           <div>
               <div className="row mx-2">
                   {data.results.map((element) => {
                       return (
                           <div className="col-md-3 col-sm-12" key={element.imdbid}>
                               <Movieitem
                                   title={element.title}
                                   discription={element.synopsis}
                                   imgurl={element.imageurl[0]}
                                   released={element.released}
                                   imdbrating={element.imdbrating}
                                   genre={element.genre}
                               />
                           </div>
                       );
                   })}
               </div>
           </div>
       );
   } catch (error) {
     
   }
}

export default Movie;
// import React, { Component } from 'react'

// export default class Movie extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             movie:null
//         }
//     }
//   async componentDidMount(){
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '3e4413209bmshe1f993c54217b42p149a13jsn7f481d93c921',
//             'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
//         }
//     };
    
//     fetch('https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=1', options)
//         .then(response => response.json())
//         .then(response => this.setState({movie:response.results}))
//         .catch(err => console.error(err));
//         console.log(this.state.movie)
//    }
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }

