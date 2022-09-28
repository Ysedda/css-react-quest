 /** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';

const Banner = styled.div`
    background-image: url('https://picsum.photos/400/200');
    min-width: 400px;
    min-height: 200px;
    background-repeat: no-repeat;
`;

const CardStyle = styled.div`
    display: flex;
    width: fit-content;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    margin-inline-start: 2rem;
    border: 1px solid black;
`

const Header = styled.h1`
    font-size: 36px;
    color: blue;
    text-align:start;
    width: 100%;
    margin-inline-start: 2rem;
    margin-block-start: 1rem;
`

const Text = styled.p`
    font-family: Ubuntu;
    font-size: 12px;
    margin: 0;
    margin-inline-end: 0.5rem; 
    text-align: end;
    width: 100%;
`


const Card = () => {
  return (
    <CardStyle>
        <Banner></Banner>
        <Header>Title</Header>
        <Text>I'm some text</Text>
        <Text>I'm more text</Text>
        <Text>I'm definitely way more text</Text>
    </CardStyle>
  )
}

export default Card