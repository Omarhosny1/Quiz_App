const NextButton = ({ dispatch, numQuestions, answer, index }) => {
    if (answer === null) return null;

    if (index < numQuestions - 1)
        return (
            <div>
                <button className="btn btn-ui"
                    onClick={() => dispatch({ type: 'newQuestion' })}
                >Next</button>
            </div>
        )

    if (index === numQuestions - 1)
        return (
            <div>
                <button className="btn btn-ui"
                    onClick={() => dispatch({ type: 'Finish' })}
                >Finish</button>
            </div>
        )
}

export default NextButton
