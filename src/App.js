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
import { v4 } from 'uuid'

export const App = () => {
  const [lista, setLista] = useState([])
  const [texto, setTexto] = useState('')

  const adicionarItem = (event) => {
    event.preventDefault()
    setLista([...lista, { texto: texto, id: v4(), check: false }])
    setTexto('')
  }

  const excluir = (id) => {
    setLista(lista.filter((item) => item.id !== id))
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
        {lista.map(({ texto, id, check }) => {
          return (
            <Item key={id}>
              <Wrapper>
                <input type="checkbox" checked={check} />
                <Texto riscarTexto={check}>{texto}</Texto>
              </Wrapper>
              <WrapperIcone>
                <Icone icon={faEdit}></Icone>
                <Icone onClick={() => excluir(id)} icon={faTrashAlt}></Icone>
              </WrapperIcone>
            </Item>
          )
        })}
      </ContainerLista>
    </Container>
  )
}
