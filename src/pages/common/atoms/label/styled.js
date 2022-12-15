import styled from "styled-components"

const StyledLabel = styled.label`
    margin: ${({ margin }) => margin};
    padding: ${({ padding })=> padding};
    display: ${({ display }) => display};
    font-size: ${({ fontSize }) => fontSize};
    color: ${({ color }) => color};
    line-height: ${({ lineHeight }) => lineHeight};
`
export default StyledLabel