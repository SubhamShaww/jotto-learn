import React from "react";
import PropTypes from "prop-types";
import "./Congrats.css";

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component {or null if `success` prop is false}
 */
function Congrats({ success }) {
    if (success) {
        return (
            <div data-test="component-congrats" className="congrats">
                <span data-test="congrats-message">
                    Congratulations! You guessed the word!
                </span>
            </div>
        );
    } else {
        return <div data-test="component-congrats" />;
    }
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
};

export default Congrats;
