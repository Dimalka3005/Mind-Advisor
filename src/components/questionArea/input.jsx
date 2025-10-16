import './input.css';

const Input = () => {
    return (
        <div className="container">
            <textarea name="question" id="question" placeholder='What is your question ?'>
            </textarea>

            <div className="buttonBar">
                <button className='submitBtn'>Submit</button>
            </div>

            <div className="answer-area">
                <div className="lable">
                    <label className='mt-3 fw-bold' htmlFor="answer">Answer :</label>
                </div>

                <div className="answer mt-3 mx-3" id='answer'>
                    
                </div>
            </div>


        </div>
    )
}

export default Input;