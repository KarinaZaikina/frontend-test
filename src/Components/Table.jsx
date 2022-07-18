import React from "react";
import styled from 'styled-components'

const TableContent = styled.section`
      display:flex;
      flex-direction:column;
      align-items:center;
      width:100%;
    `
const TableClients = styled.div`
        margin:20px;
        `
const Title = styled.h1`
        margin:20px 0 1px;
        width:85vw;
        `
const Row = styled.div`
        display: flex;
        `
const Cell = styled.div`
        border: 1px solid #999;
        text-align:center;
        width: 15vw;
        background-color: ${props => props.header ? "rgba(0,0,0,0.1)":"white"};
        `
const Input = styled.input`
            border: none;
            width: 90%;
            height: 26px;

            &:focus {
            outline: none;
            }
        `

const Table = ({clients}) => {
   
    const TableHeader = ({client}) => {
      
        return (
          <Row>
            <Cell header>Имя</Cell>
            <Cell header>Фамилия</Cell>
            <Cell header>Номер телефона</Cell>
            <Cell header>Email</Cell>
            <Cell header>Пол</Cell>
            <Cell header>Адрес</Cell>
          </Row>
        )
      };

    const TableRow = ({client}) => {
        const {
            name,
            surname,
            number,
            email,           
            gender,
            address,
        } = client
      
      
        return (
          <Row>
            <TableCell item={name} />
            <TableCell item={surname} />
            <TableCell item={number} />
            <TableCell item={email} />
            <TableCell item={gender} />            
            <TableCell item={address} />
          </Row>
        )
      };

      const TableCell = ({ item }) => { 
        return (
          <Cell>
            <Input
              readOnly
              value={item}
              onChange={({ target }) => {}}
              type="text" />
          </Cell>
        )
      }

    return (
        clients
        ? 
        <TableContent>
            <Title>Таблица клиентов:</Title>
            <TableClients>
            <TableHeader />
                 {clients.map((client, idx) => <TableRow key={idx} client={client} />)}
             </TableClients>
        </TableContent>
        : <div>Загрузка...</div>
    )
  };

  export default Table;