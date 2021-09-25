import React from 'react'
import './Search.css'

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input: ''
        }
        console.log('propsik', props)

    this.handleChange = this.handleChange.bind(this)
    }
   handleChange(e){
           this.setState({text:e.target.value})
       }

    render(){
            
                 return(
                    <div className="movie__search">
                    <input className="input" type="text" placeholder="Type search the film" value={this.state.text}onChange={this.handleChange} />
                    <button className="btn" type="button" disabled={!this.state.text}  text="Search">Search</button>
                </div>
                 )
             }
           
         }
      
    

export default Search;