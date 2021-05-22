import React from "react";
import PropTypes from "prop-types";
import "./Input.css";

function Input({ secretWord }) {
    const [currentGuess, setCurrentGuess] = React.useState("");

    return (
        <div data-test="component-input" className="input">
            <form className="input__form">
                <input
                    data-test="input-box"
                    type="text"
                    placeholder="enter guess"
                    value={currentGuess}
                    onChange={(event) => {
                        setCurrentGuess(event.target.value);
                    }}
                />
                <button
                    data-test="submit-button"
                    onClick={(event) => {
                        event.preventDefault();
                        // TODO: update guessedWords
                        // TODO: check against secretWord and update success if needed
                        setCurrentGuess("");
                    }}
                ></button>
            </form>
        </div>
    );
}

Input.propTypes = {
    secretWord: PropTypes.string.isRequired,
};

export default Input;
