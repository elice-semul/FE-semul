import StyledLabel from "./styled"

const Label = ({ children, htmlFor, margin, padding, display, lineHeight, fontSize, color }) => {
    return (
    <StyledLabel
    {...{ htmlFor }}
    {...{ margin }}
    {...{ padding }}
    {...{ display }}
    {...{ fontSize }}
    {...{ color }}
    {...{ lineHeight }}
    >
    {children}
    </StyledLabel>)
}

export default Label