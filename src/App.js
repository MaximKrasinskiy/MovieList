
import './App.css';
import MovieList from './Components/movie/MovieList';
import Title from './Components/movie/Title';

const filmData = 
  {
    id: '0001',
    name: 'Riverdale',
    posterUrl:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wRbjVBdDo5qHAEOVYoMWpM58FSA.jpg',
    desсription:'Set in the present, the series offers a bold, subversive take on Archie, Betty, Veronica and their friends, exploring the surreality of small-town life, the darkness and weirdness bubbling beneath Riverdale’s wholesome facade.'
  }
;
function App(props) {
  console.log('propsass',props)
  return (
    <div className="App">
      <header className="App-header">
        <Title titleText={'main title'}/>
        <MovieList data={filmData}/> 
        {/* data = {filmData} */}

      </header>
     
    </div>  
  );

}


export default App;
