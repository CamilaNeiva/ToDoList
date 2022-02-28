import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;

  background-color: #e0f2ee;
  @media (max-width: 850px) {
    max-width: 550px;
  }
  @media (max-width: 650px) {
    max-width: 400px;
  }
`

export const Formulario = styled.form`
  display: flex;
  color: white;
  font-size: 20px;
  text-align: center;
  padding: 30px;
  width: 100%;
`

export const Titulo = styled.h1`
  display: flex;
  font-size: 30px;
  justify-content: center;
  color: #90bdad;
  padding-top: 20px;
  @media (max-width: 850px) {
    font-size: 25px;
  }
  @media (max-width: 650px) {
    font-size: 20px;
  }
`

export const Input = styled.input`
  flex-grow: 1;
  border: none;
  padding: 12px;
`

export const Botao = styled.button`
  padding: 12px 30px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  background-color: #cfe5e1;
  color: #90bdad;
  &:hover {
    background-color: #90bdad;
    color: #e0f2ee;
    transition: 300ms;
  }
  @media (max-width: 850px) {
    padding: 12px 28px;
  }
  @media (max-width: 650px) {
    padding: 9px 15px;
  }
`

export const ContainerLista = styled.ul`
  display: flex;
  margin: 0 30px;
  flex-direction: column;
  align-items: center;
`

export const Item = styled.li`
  display: flex;
  margin: 8px;
  width: 100%;
  justify-content: space-between;
  background-color: white;
  padding: 10px;
  align-items: center;
`
export const Wrapper = styled.div`
  display: flex;
`
export const Texto = styled.p`
  margin-left: 5px;
  text-decoration: ${({ riscarTexto }) =>
    riscarTexto ? 'line-through' : 'initial'};
`

export const Icone = styled(FontAwesomeIcon)`
  && {
    font-size: 20px;
    color: #90bdad;
    cursor: pointer;
    margin-right: 8px;
    &:hover {
      color: #e0f2ee;
      transition: 300ms;
    }
  }
`
export const WrapperIcone = styled.div`
  display: flex;
`
