import styled from "styled-components";
import { Form as FormikForm, ErrorMessage } from 'formik';

export const Form = styled(FormikForm)`
    width: 500px;
    padding: 15px;
    margin-bottom: 30px;
    border: 1px solid #153462;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const ErrorFormik = styled(ErrorMessage)`
    color: #be1212;
    font-style: italic;
    font-size: 20px;
`;

export const Button = styled.button`
    width: 150px;
    height: 50px;
    margin-left: auto;
    margin-right: auto;
    border: none;
    border-radius: 5px;
    background-color: #BAD1C2;
    color: #153462;
    box-shadow: 2px 2px 12px 1px #15346263;
    cursor: pointer;
`