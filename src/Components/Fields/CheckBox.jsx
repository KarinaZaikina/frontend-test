import styled from 'styled-components'

const CheckDiv = styled.div`
        display: flex;
        align-items: center;
        `

const P = styled.p`
        display: inline-block;
        margin: 0;
        padding-left: 10px;
        `
const Input = styled.input`
        width: 20px;
        height: 20px;
        `
const Small = styled.small`
        display: block;
        color: red;
        `

const CheckBox = ({title, name, type, errors, register, registerOption}) => {
    return (
        <>
            <CheckDiv>
                <Input name={name} type={type} {...register(name, registerOption) }
                style={{ outline: errors && "2px solid red" }}/>
                <P>{title}</P>
            </CheckDiv>
            <Small>
                {errors && errors.message}
            </Small>
        </>
    );
}

export default CheckBox;