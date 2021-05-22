import React from "react";
import { shallow } from "enzyme";
import { checkProp, findbyTestAttr } from "../test/testUtils";
import Input from "./Input";

const defaultProps = { secretWord: "secretword" };

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Input {...setupProps} />);
};

test("renders without error", () => {
    const wrapper = setup();
    const component = findbyTestAttr(wrapper, "component-input");
    expect(component.length).toBe(1);
});

test("does not throw warning with expected props", () => {
    checkProp(Input, defaultProps);
});

describe("state controlled input field", () => {
    test("state updates with value of input box upon change", () => {
        const mockSetCurrentGuess = jest.fn();
        React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

        const wrapper = setup();
        const inputBox = findbyTestAttr(wrapper, "input-box");

        const mockEvent = { target: { value: "train" } };
        inputBox.simulate("change", mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
    });
});
