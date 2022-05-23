import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rebeccapurple;

  .form-wrapper {
    display: grid;
    text-align: center ;
    .card {
      background-color: #fff;
      padding: 10px;
      border-radius: 10px;
      align-items: center;
      justify-content: center;
     
      form {
        display: grid;
        input {
          margin: 10px 5px;
          padding: 5px;
        }
        button{
          margin: 10px ;
        }
      }
    }
  }
`;
