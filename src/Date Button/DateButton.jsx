import './DateButton.css'

function DateButton(props){
    
    return(
        <>
        <button className='date-button'>{props.dateNumber}</button>
        </>
    )
}

export default DateButton