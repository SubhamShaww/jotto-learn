import React from "react";
import { shallow } from "enzyme";
import { findbyTestAttr, checkProp } from "../test/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
    guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

/**
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords {...setupProps} />);
};

test("does not throw warning with expected props", () => {
    checkProp(GuessedWords, defaultProps);
});

describe("if there are no words guessed", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords: [] });
    });

    test("renders without error ", () => {
        const component = findbyTestAttr(wrapper, "component-guessed-words");
        expect(component.length).toBe(1);
    });

    test("renders instructions to guess a word", () => {
        const instructions = findbyTestAttr(wrapper, "guess-instructions");
        expect(instructions.text().length).not.toBe(0);
    });
});

describe("if there are words guessed", () => {
    let wrapper;
    const guessedWords = [
        { guessedWord: "train", letterMatchCount: 3 },
        { guessedWord: "agile", letterMatchCount: 1 },
        { guessedWord: "party", letterMatchCount: 5 },
    ];
    beforeEach(() => {
        wrapper = setup({ guessedWords });
    });

    test("renders without error", () => {
        const component = findbyTestAttr(wrapper, "component-guessed-words");
        expect(component.length).toBe(1);
    });

    test('renders "guessed words" section', () => {
        const guessedWordsNode = findbyTestAttr(wrapper, "guessed-words");
        expect(guessedWordsNode.length).toBe(1);
    });

    test("correct number of guessed words", () => {
        const guessedWordNode = findbyTestAttr(wrapper, "guessed-word");
        expect(guessedWordNode.length).toBe(guessedWords.length);
    });
});
