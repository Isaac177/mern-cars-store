import React from 'react';
import styled from 'styled-components';
import tw from "twin.macro";
import {Navbar} from "../../components/navbar";
import {TopSection} from "./topSection";
import {BookCard} from "../../components/bookCard";
import {Marginer} from "../../components/marginer";
import {BookingSteps} from "./bookingSteps";
import {AboutUs} from "./aboutUs";
import {TopCars} from "./topCars";
import {Footer} from "../../components/footer";


const PageContainer = styled.div`
    ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
   `}
 `;

export const HomePage = () => {
    return (
        <PageContainer>
            <Navbar />
            <TopSection />
            <Marginer margin='5em' direction='vertical'/>
            <BookCard />
            <Marginer margin='10em' direction='vertical'/>
            <BookingSteps />
            <Marginer margin='8em' direction='vertical'/>
            <AboutUs />
            <Marginer margin='8em' direction='vertical'/>
            <TopCars />
            <Footer />
        </PageContainer>
    );
}