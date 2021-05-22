import React from "react";
import "./App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";

function App() {
    // BEM convention
    return (
        <div className="app">
            <div className="app__body">
                <h1>JOTTO</h1>
                <Congrats success={true} />
                <GuessedWords
                    guessedWords={[
                        { guessedWord: "train", letterMatchCount: 3 },
                        { guessedWord: "train", letterMatchCount: 3 },
                        { guessedWord: "train", letterMatchCount: 3 },
                        { guessedWord: "train", letterMatchCount: 3 },
                        { guessedWord: "train", letterMatchCount: 3 },
                        { guessedWord: "train", letterMatchCount: 3 },
                        { guessedWord: "train", letterMatchCount: 3 },
                        { guessedWord: "train", letterMatchCount: 3 },
                        { guessedWord: "train", letterMatchCount: 3 },
                        { guessedWord: "train", letterMatchCount: 3 },
                        { guessedWord: "train", letterMatchCount: 3 },
                        { guessedWord: "train", letterMatchCount: 3 },
                        { guessedWord: "train", letterMatchCount: 3 },
                        { guessedWord: "train", letterMatchCount: 3 },
                        { guessedWord: "train", letterMatchCount: 3 },
                        { guessedWord: "train", letterMatchCount: 3 },
                    ]}
                />
            </div>
        </div>
    );
}

export default App;
