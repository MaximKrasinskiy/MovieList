
import Title from "../Title/Title";
import Checkbox from "../Check/Chek";
import './Movie.css'
import PropTypes from 'prop-types'

function MovieList(props) {
  console.log('props',props)
    
    const {name,id,description,posterUrl} = props.data;
   
    return (
      <div className="Movie" data-id={id}>
     
        <Title/>
              <h1>< span className="movie__name" >Film name:</span> {name} </h1>
      
              <img src={posterUrl} alt={'there no poster'}/>
      
              <p>{description? description : 'Here is no the description...'}</p>

              <a href={''} >more...</a>
        <Checkbox/>
        
      </div>
      
      
    );
  }
  MovieList.propTypes={
    id:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    posterUrl:PropTypes.string,
    desсription:PropTypes.string
  }
  export default MovieList;
  