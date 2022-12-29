import React, {useState} from 'react';
import styled from 'styled-components';
import tw from "twin.macro";
import {ICar} from "../../../typings/car";
import {Car} from "../../components/car";
import Carousel, { Dots, slidesToShowPlugin} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import {useMediaQuery} from "react-responsive";
import {SCREENS} from "../../components/responsive";

const TopCarsContainer = styled.div`
   max-width: 1080px;
    ${tw`
        w-full
        flex
        flex-col
        items-center
        justify-center
        md:justify-start
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
        flex-col
        flex-wrap
        justify-center
        md:justify-start
        mt-7
        md:mt-10
    `};
`;


export const TopCars = () => {

    const [current, setCurrent] = useState(0);

    const isMobile = useMediaQuery({maxWidth: SCREENS.sm});

    const testCar: ICar = {
        name: "HONDA cITY 5 Seater Car",
        mileage: "20k",
        thumbnailSrc: "https://images4.fanpop.com/image/photos/22000000/Random-Cars-autorev-22070941-500-332.jpg",
        dailyPrice: 50,
        monthlyPrice: 1500,
        gearType: "Auto",
        gas: "Petrol",
    }

    const testCar2: ICar = {
        name: "Mercedes Benz C300",
        mileage: "15k",
        thumbnailSrc: "https://images4.fanpop.com/image/photos/22000000/Random-Cars-autorev-22070941-500-332.jpg",
        dailyPrice: 80,
        monthlyPrice: 2000,
        gearType: "Auto",
        gas: "Petrol",
    }

    const testCar3: ICar = {
        name: "Audi A6 2018 Model",
        mileage: "10k",
        thumbnailSrc: "https://images4.fanpop.com/image/photos/22000000/Random-Cars-autorev-22070941-500-332.jpg",
        dailyPrice: 70,
        monthlyPrice: 1800,
        gearType: "Auto",
        gas: "Petrol",
    }

    const cars = [
        <Car {...testCar}/>,
        <Car {...testCar2}/>,
        <Car {...testCar3}/>,
        <Car {...testCar}/>,
        <Car {...testCar2}/>,
    ]

    const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);

    return (
        <TopCarsContainer>
            <Title>Explore Our Top Deals</Title>
            <CarsContainer>
                <Carousel
                    value={current}
                    onChange={setCurrent}
                    slides={cars}
                    plugins={[
                        'clickToChange',
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 3,
                            }
                        }
                        ]}
                    breakpoints={{
                        640: {
                            plugins: [
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 1,
                                    }
                                }
                            ]
                        },
                        900: {
                            plugins: [
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 2,
                                    }
                                }
                            ]
                        }
                    }}
                >
                </Carousel>
                <Dots
                    value={current}
                    onChange={setCurrent}
                    number={numberOfDots} />
            </CarsContainer>
        </TopCarsContainer>
    );
}