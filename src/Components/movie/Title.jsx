import '../css/Title.css'

function Title(props){
    
    console.log(props)
    const {titleText} = props
    return(
        <h2 className="title">
         {titleText}
        </h2>
    )
}
export default Title;