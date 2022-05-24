import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  border: solid black 1px;

  fieldset {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    border-radius: 5px;
    background-color: darkviolet;
  }
  input {
    margin: 10px;
    border-radius: 5px;
    padding: 5px ;
  }
  input[type='submit'] {
    padding: 5px;
    transition: 0.2s;
    border-radius: 10px ;
    cursor: pointer ;

    &:hover {
      color: white;
      background-color: #444;
    }
    &:active {
      color: white;
      background-color: #000;
    }
  }
`;
