import React from 'react';
import styled from 'styled-components';
import tw from "twin.macro";
import { ICar } from '../../../typings/car';
import {Button} from "../button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisH, faFillDrip, faTachometerAlt} from "@fortawesome/free-solid-svg-icons";

interface ICarProps extends ICar {
}

const CarContainer = styled.div`
    width: 16.5em;
    min-height: 22.2em;
    max-height: 25.2em;
    box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
    ${tw`
        flex
        flex-col
        items-center
        p-3
        pb-4
        bg-white
        rounded-md
        m-1
        sm:m-3
        md:m-6
    `};
`;

const CarThumbnail = styled.div`
    width: 100%;
    height: auto;
    
    img {
        width: 100%;
        height: 100%;
    }
`;

const CarName = styled.h3`
    ${tw`
        text-base
        font-bold
        text-black
        mt-1
        mb-1
    `};
`;

const PricesContainer = styled.div`
    ${tw`
        w-full
        flex
        justify-start
        mt-3
    `};
`;

const SmallText = styled.p`
    color: inherit;
    ${tw`
        inline-flex
        text-xs
        font-thin
        /*text-gray-500*/
    `};
`;

const DailyPrice = styled.h5`
    ${tw`
        text-red-500
        font-bold
        text-sm
        mr-3
    `};
`;

const MonthlyPrice = styled.h5`
    ${tw`
        text-gray-500
        font-bold
        text-sm
    `};
`;

const SmallIcon = styled.span`
    ${tw`
        text-red-500
        /*fill-current*/
        text-sm
        mr-1
    `};
`;

const CarDetailsContainer = styled.div`
    ${tw`
        flex
        w-full
        justify-between
    `};
`;

const CarDetail = styled.div`
    ${tw`
        flex
        items-center
    `};
`;

const CarInfo = styled.h6`
    ${tw`
        text-gray-400
        text-xs
    `};
`;

const Seperator = styled.div`
    min-width: 100%;
    min-height: 1px;
    ${tw`
        flex
        bg-gray-300
        mt-2
        mb-2
    `};
`;

const RentButton = styled(Button)`
    ${tw`
        min-w-full
        max-w-full
        w-full
        px-5
        py-3
        bg-red-500
        rounded-md
        text-xs
        sm:text-sm
        font-semibold
        text-white
        focus:outline-none
        hover:bg-red-700
        transition
        ease-in-out
        duration-300
        mt-5
    `};
`;


export const Car = (props: ICarProps) => {
    const { name, thumbnailSrc, mileage, gearType, dailyPrice, monthlyPrice, gas } = props;
    return <CarContainer>
        <CarThumbnail>
            <img src={thumbnailSrc} alt=""/>
        </CarThumbnail>
        <CarName>{name}</CarName>
        <PricesContainer>
            <DailyPrice>${dailyPrice}<SmallText>/Day</SmallText></DailyPrice>
            <MonthlyPrice>${monthlyPrice}<SmallText>/Month</SmallText></MonthlyPrice>
        </PricesContainer>
        <Seperator />
        <CarDetailsContainer>
            <CarDetail>
                <SmallIcon>
                    <FontAwesomeIcon icon={faTachometerAlt} />
                </SmallIcon>
                <CarInfo>{mileage}</CarInfo>
            </CarDetail>
            <CarDetail>
                <SmallIcon>
                    <FontAwesomeIcon icon={faEllipsisH} />
                </SmallIcon>
                <CarInfo>{gearType}</CarInfo>
            </CarDetail>
            <CarDetail>
                <SmallIcon>
                    <FontAwesomeIcon icon={faFillDrip} />
                </SmallIcon>
                <CarInfo>{gas}</CarInfo>
            </CarDetail>
        </CarDetailsContainer>
        <RentButton text="Rent Now" />
    </CarContainer>
};