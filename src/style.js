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

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  justify-content: center;
  align-items: center;
`

export const Modal = styled.div`
  background: white;
  padding: 25px;
  border: 3px solid #90bdad;
  box-shadow: 0 0 0 5px white;
  position: relative;
`

export const InputModal = styled.input`
  width: 600px;
  box-sizing: border-box;
  padding: 10px;
  border: 1px dashed #90bdad;
`

export const BotaoFecharModal = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid white;
  top: -20px;
  right: -20px;
  position: absolute;
  background: #90bdad;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3);
  font-size: 16px;
  color: white;
  cursor: pointer;
`

export const BotaoSalvarModal = styled.button`
  padding: 12px 16px;
  border: none;
  cursor: pointer;
  background-color: #90bdad;
  color: #e0f2ee;
  &:hover {
    background-color: #cfe5e1;
    color: #90bdad;
    transition: 300ms;
  }
`
