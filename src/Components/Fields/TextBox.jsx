import styled from 'styled-components'

const Label = styled.label`
        display: block;
        `
const Input = styled.input`
        width: 20vw;
        height: 3.5vh;        
        `
const Small = styled.small`
        display: block;
        color: red;
        `
const TextBox = ({title, name, type, errors, register, registerOption,custOnInput=null}) => {

    return (
        <>
            <Label htmlFor={name}>{title}</Label>
            <Input id={name} name={name} type={type} {...register(name, registerOption) }
            onInput={custOnInput} 
            style={{ borderColor: errors && "red" }}/>
            
            <Small>
                {errors && errors.message}
            </Small>
        </>
    );
}

export default TextBox;