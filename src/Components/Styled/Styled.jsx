import styled from 'styled-components';

const Title = styled.h1`
    font-size: 1.8em;
    text-align: center;
    color: palevioletred;
`;
const TitleFilter = styled.h3`
    font-size: 1.3em;
    text-align: center;
    color: palevioletred;
`;
const List = styled.ul`
    text-align: center;
    color: palevioletred;
`;
const ListItem = styled.li`
    height: 20px;
    display: flex;
    justify-content: space-between;
    :not(:last-of-type) {
        margin-bottom: 10px;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

const Wrapper = styled.div`
    dispay: flex;
    flex-direction: column;
    margin: 5px auto;
`;

const SpanName = styled.span`
    margin-right: 16px;
`;

const Input = styled.input`
    margin-left: 20px;
`;

const InputFilter = styled.input`
    margin-left: 100px;
`;
const Button = styled.button`
    width: 100px;
    margin: 8px auto;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
    :hover,
    :focus {
        background-color: palevioletred;
        color: #fff;
    }
`;
const BtnDelete = styled.button`
    height: 20px;
    margin-top: 20px;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
    :hover,
    :focus {
        background-color: palevioletred;
        color: #fff;
    }
`;
const Text = styled.p`
    text-align: center;
`;

export {
    Text,
    Title,
    Form,
    Wrapper,
    SpanName,
    Input,
    Button,
    List,
    TitleFilter,
    InputFilter,
    ListItem,
    BtnDelete,
};
