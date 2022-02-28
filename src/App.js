import React, { useState } from 'react'
import {
  Botao,
  Container,
  Formulario,
  Input,
  Titulo,
  ContainerLista,
  Item,
  Wrapper,
  Texto,
  Icone,
  WrapperIcone
} from './style'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export const App = () => {
  const [lista, setLista] = useState([])
  const [texto, setTexto] = useState('')

  const adicionarItem = (event) => {
    event.preventDefault()
    setLista([...lista, { texto: texto, check: false }])
    setTexto('')
  }

  return (
    <Container>
      <Titulo>My To Do List</Titulo>

      <Formulario onSubmit={adicionarItem}>
        <Input
          type="text"
          value={texto}
          onChange={(event) => setTexto(event.target.value)}
        />
        <Botao type="submit">Adicionar</Botao>
      </Formulario>
      <ContainerLista>
        {lista.map(({ texto, check }) => {
          return (
            <Item>
              <Wrapper>
                <input type="checkbox" checked={check} />
                <Texto riscarTexto={check}>{texto}</Texto>
              </Wrapper>
              <WrapperIcone>
                <Icone icon={faEdit}></Icone>
                <Icone icon={faTrashAlt}></Icone>
              </WrapperIcone>
            </Item>
          )
        })}
      </ContainerLista>
    </Container>
  )
}
