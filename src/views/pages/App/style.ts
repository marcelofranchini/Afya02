import styled from 'styled-components';

export const Container = styled.div`
    width: 80%auto;
    margin: 0 auto;

    .content{
        & button{
            background:blue;
            cursor:pointer;
            border-radius:10px;
            border:none;
            transition: 0.3s;
            padding:10px;
        &:hover{
            background: green;
        }
        }
    }
`