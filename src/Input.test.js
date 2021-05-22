import { shallow } from "enzyme";
import { findbyTestAttr } from "../test/testUtils";
import Input from "./Input";

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = () => {
    return shallow(<Input />);
};

test("renders without error", () => {
    const wrapper = setup();
    const component = findbyTestAttr(wrapper, "component-input");
    expect(component.length).toBe(1);
});
