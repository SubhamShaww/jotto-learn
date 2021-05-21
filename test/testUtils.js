import checkPropTypes from "check-prop-types";

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val
 * @returns {ShallowWrapper}
 */
export const findbyTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`);
};

export const checkProp = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        "prop",
        component.name
    );
    expect(propError).toBeUndefined();
};
