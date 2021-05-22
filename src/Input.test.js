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
