import './Title.css'
import PropTypes from 'prop-types'

function Title(props){
    
    console.log('Title', props)
    const {titleText} = props
    return(
        <h2 className="title">
         {titleText}
        </h2>
    )
}
Title.propTypes={
    titleText:PropTypes.string
}
export default Title;