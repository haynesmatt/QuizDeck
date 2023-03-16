import './GuessForm.css'

const GuessForm = (props) => {

    const handleOnSubmit = (e) => {
        e.preventDefault()
        props.onSubmit(true)
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <h4>Guess the answer here:</h4>
            <input type="text" name="guess" className="submission" value={props.guessForm.guess} onChange={props.handleChange}></input>
            <input type="submit" value="Submit Guess" className='submit'></input>
        </form>
    )

}

export default GuessForm
