import styled from 'styled-components'


export const Container = styled.div`
    max-width: 70%;
    color: #FFF;
    background: #e2711d;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
    padding: 30px;
    margin: 80px auto;
    margin-bottom: 40px;

    h2{
        font-size: 18px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`;

export const Container2 = styled.div`
    display: flex;
    padding: 0;     
    max-width: 65%;  
    margin: auto; 
    align-items: center;
    justify-content: space-between; 
    margin-bottom: 10px;  
    
    h2{
        font-size: 20px;        
    }
`;

export const Title = styled.h1`
    font-size: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;

`;

export const SubmitButton = styled.button`
    border: 0;
    border-radius: 5px;
    font-size:20px;
    font-weight: normal;
    outline: none;
    padding: 4px;
    transition: all 0.5s;

    &:hover{
        background-color: #e2711d;
        color: #FFF;
    }

    a{
        text-decoration: none;
        color: #000;
    }

    a:hover{        
        color: #FFF;
    }
`;