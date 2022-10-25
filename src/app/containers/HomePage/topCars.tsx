import React from 'react';
import styled from 'styled-components';
import tw from "twin.macro";

const TopCarsContainer = styled.div`
    ${tw`
        max-w-screen-2xl
        w-full
        flex
        flex-col
        items-center
        justify-center
        md:justify-start
        px-3
        md:px-0
        mb-10
    `}
`;

const Title = styled.h1`
    ${tw`
        text-black
        text-2xl
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal
        text-center
        md:text-left
        mb-4
    `};
`;

const CarsContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        justify-center
        md:justify-start
    `};
`;
