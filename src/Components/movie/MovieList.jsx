
import Title from "./Title";
import Checkbox from "./Chek";
import '../css/Movie.css'

function MovieList(props) {
  console.log('props',props)
    
    const {name,id,description,posterUrl} = props.data;
   
    return (
      <div className="Movie" data-id={id}>
    
        <Title/>
              <h1>< span className="movie__name" >Film name:</span>   {name} </h1>
      
        

        <img src={posterUrl} alt={'there no poster'}/>

        <p>{description? description : 'Here is no the description...'}</p>

        <a href={''} >more...</a>
        <Checkbox/>
      </div>
    );
  }
  
  export default MovieList;
  