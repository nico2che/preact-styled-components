import { h } from "preact";
import { createContext, useContext, memo, forwardRef } from "preact/compat";

const ThemeContext = createContext({});
export const ThemeProvider = ({ children, theme }) =>
  h(ThemeContext.Provider, { value: theme }, children);

const filterObject = (rest, shouldForwardProp) =>
  Object.keys(rest)
    .filter(shouldForwardProp)
    .reduce((obj, key) => {
      obj[key] = rest[key];
      return obj;
    }, {});

export const styled = (defaultAs, options) => (styleCalback) => {
  const { shouldForwardProp, label } = options || {};
  function forwaded(element, ref) {
    const { children, as = defaultAs, ...props } = element || {};
    const theme = useContext(ThemeContext);
    return h(
      as,
      {
        ref,
        style: styleCalback({ ...props, theme }),
        ...(shouldForwardProp ? filterObject(props, shouldForwardProp) : props),
      },
      children
    );
  }
  const component = memo(forwardRef(forwaded));
  component.displayName = `${label || defaultAs}💅`;
  return component;
};
