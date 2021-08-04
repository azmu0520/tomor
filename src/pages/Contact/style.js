import styled from 'styled-components';

export const Form = styled.form``;
export const MianWrap = styled.div``;
export const ItemWrap = styled.form`
  margin-bottom: 2rem;
  display: flex;

  .btn {
    background-color: var(--main-color) !important;
    font-size: 14px !important;
    font-weight: 500 !important;
    border: 0 !important;
    border-radius: 50px !important;
    padding: 1px 12px !important;
    line-height: 35px !important;
    min-width: 100px !important;
  }
`;
export const Input = styled.input`
  border-style: none;
  border-bottom: 1px solid black;

  margin-right: 2rem;
  outline: none;
`;
export const textArea = styled.textarea`
  border-style: dashed;
  border-width: none;
`;
