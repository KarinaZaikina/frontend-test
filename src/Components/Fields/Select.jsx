import styled from 'styled-components'

const Label = styled.label`
        display: block;
        `
const SelectBox = styled.select`
        width: 20.5vw;
        height: 4.5vh;
        `

const Select = ({ register, options, name, title, registerOption }) => {
    return (
        <>
            <Label>{title}</Label>
            <SelectBox name={name}  {...register(name, registerOption) }>
                {options.map(value => (
                    <option key={value} value={value}>
                    {value}
                    </option>
                ))}
            </SelectBox>
        </>
    );
}

export default Select;