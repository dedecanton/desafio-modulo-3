import styled from "styled-components";

export const BackgroundLogin = styled.div`
  width: 40%;
  background-color: #4abdac;
  display: flex;
  justify-content: center;
  align-items: center;

  svg{
    width:80%;
    height: 100%;
  }
`;

export const InputArea = styled.div`
  background-color: #fff;
  width: 60%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// export const Button = styled.button`
 
// `;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #4abdac;
  font-style: italic;
`;

export const Form = styled.form`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  justify-content: center;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  align-items: center;
  width: 80%;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  color: #4abdac;
  font-weight: bold;
`;

export const Input = styled.input`
  background-color: #fff;
  margin-top: 0.8rem;
  width: 70%;
  outline: none;
  border: none;
  border-bottom: 1px solid #4abdac;
  border-radius: 0.5rem;
  padding: 0.8rem;

  &::placeholder {
    color: #4abdac;
    font-size: 1rem;
  }

  &:focus {
    background-color: #4abdac;
    color: white;

    &::placeholder {
      color: white;
    }
  }
`;
