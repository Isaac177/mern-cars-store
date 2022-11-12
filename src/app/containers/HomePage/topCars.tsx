import React from 'react';
import styled from 'styled-components';
import tw from "twin.macro";
import {ICar} from "../../../typings/car";
import {Car} from "../../components/car";

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


const testCar: ICar = {
    name: "HONDA cITY 5 Seater Car",
    mileage: "20k",
    thumbnailSrc: "https://cdn.jdpower.com/Models/640x480/2018-Honda-Civic-Sedan-LX.jpg",
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: "Auto",
    gas: "Petrol",
}

const testCar2: ICar = {
    name: "Mercedes Benz C300",
    mileage: "15k",
    thumbnailSrc: "https://cdn.jdpower.com/Models/640x480/2017-Mercedes-Benz-C-Class-C300-4MATIC.jpg",
    dailyPrice: 80,
    monthlyPrice: 2000,
    gearType: "Auto",
    gas: "Petrol",
}

export const TopCars = () => {
    return (
        <TopCarsContainer>
            <Title>Explore Our Top Deals</Title>
            <CarsContainer>
                <Car {...testCar} />
                <Car {...testCar2} />
            </CarsContainer>
        </TopCarsContainer>
    );
}