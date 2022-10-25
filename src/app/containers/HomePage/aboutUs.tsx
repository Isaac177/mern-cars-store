import React from 'react';
import styled from 'styled-components';
import tw from "twin.macro";
import {SCREENS} from "../../components/responsive";
import JeepImg from "../../../assets/images/jeep.png";



const AboutUsContainer = styled.div`
    ${tw`
        w-full
        flex    
        flex-col
        lg:flex-row
        items-center
        2xl:justify-center
        pt-4
        pb-4
        pr-7
        md:pl-0
        md:pr-0
        bg-white
    `};
`;

const CarContainer = styled.div`
    width: auto;
    height: 15em;
    margin-left: -30px;
    
    img {
        width: auto;
        height: 100%;
    }
    
    @media (min-width: ${SCREENS.md}) {
        height: 28em;
    }
    
    @media (min-width: ${SCREENS.lg}) {
        height: 30em;
    }
    
    @media (min-width: ${SCREENS["2xl"]}) {
        height: 35em;
        margin-left: 0;
    }
`;

const InfoContainer = styled.div`
    ${tw`
        md:w-1/2
        flex
        flex-col
        md:ml-6
        2xl:ml-16
    `};
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

const InfoText = styled.p`
    ${tw`
        max-w-2xl
        text-xs
        md:text-sm
        text-center
        md:text-left
        text-gray-500
        font-normal
    `};
`;

export const AboutUs = () => {
    return (
        <AboutUsContainer>
            <CarContainer>
                <img src={JeepImg} alt="car" />
            </CarContainer>
            <InfoContainer>
                <Title>Feel The Best Experience With Our Rental Deals</Title>
                <InfoText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </InfoText>
            </InfoContainer>
        </AboutUsContainer>
    );
}