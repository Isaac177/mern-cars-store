import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../logo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";

const FooterContainer = styled.div`
    background-color: #1d2124;
    ${tw`
    flex
    flex-col
    min-w-full
    pt-10
    pb-1
    items-center
    justify-center
    md:pt-12
    md:pb-10
    md:items-center
    md:justify-center
    pl-4
    `
    }
`;

const InnerContainer = styled.div`
    ${tw`
    w-full
    h-full
    max-w-screen-2xl
    flex
    flex-wrap
    flex-col
    md:flex-row
    justify-between
    `}
`;


const AboutContainer = styled.div`
    ${tw`
    flex
    flex-col
    `
    }
`;

const AboutText = styled.p`
    color: rgba(255, 255, 255, 0.7);
    ${tw`
    text-sm
    md:text-base
    lg:text-sm
    xl:text-base
    font-normal
    max-w-xs
    leading-5
    mt-2
    mb-4
    `}
`;

const LinksList = styled.ul`
    ${tw`
    outline-none
    list-none
    flex
    flex-col
    mt-2
    `}
`;

const HeaderTitle = styled.h3`
    ${tw`
    text-white
    text-base
    font-bold
    mb-3
    `}
`;

const ListItem = styled.li`
    & > a {
        ${tw`
        text-xs
        md:text-sm
        text-white
        font-normal
        mb-1
        transition-all
        hover:text-gray-300
        `}
    }
`;

const SectionContainer = styled.div`
    ${tw`
    w-full
    md:w-1/2
    lg:w-1/4
    flex
    flex-col
    pr-4
    mb-10
    `}
`;

const RedIcon = styled.span`
    ${tw`
    w-8
    h-8
    text-white
    bg-red-500
    rounded-full
    flex
    items-center
    justify-center
    text-base
    mr-2
    `}
`;

const HorizontalContainer = styled.div`
    ${tw`
    flex
    items-center
    `}
`;

const SmallText = styled.h6`
    ${tw`
    text-white
    text-xs
    `}
`;

const BottomContainer = styled.div`
    ${tw`
    flex
    flex-col
    items-center
    justify-center
    md:flex-row
    justify-between
    md:pl-4
    md:pr-4
    mt-5
    md:mt-0
    `}
`;

const CopywrightText = styled.p`
    ${tw`
    text-xs
    md:text-sm
    text-white
    font-normal
    `}
`;

export const Footer = () => {
    let year = new Date().getFullYear();
    return <FooterContainer>
        <InnerContainer>
            <AboutContainer>
                <Logo color="white" bgColor="dark"/>
                <AboutText>
                    YourCar is the best car renting and selling company in the whole world. We have the best cars and the best prices. You can rent a car from us for as low as 30 dollars per day. No other company can offer you such a great price. We also have the best support team to help you with anything you need.
                </AboutText>
            </AboutContainer>
            <SectionContainer>
                <HeaderTitle>Our Links</HeaderTitle>
                <LinksList>
                    <ListItem>
                        <a href="#">Home</a>
                    </ListItem>
                    <ListItem>
                        <a href="#">Cars</a>
                    </ListItem>
                    <ListItem>
                        <a href="#">Services</a>
                    </ListItem>
                    <ListItem>
                        <a href="#">Contact Us</a>
                    </ListItem>
                </LinksList>
            </SectionContainer>
            <SectionContainer>
                <HeaderTitle>Other Links</HeaderTitle>
                <LinksList>
                    <ListItem>
                        <a href="#">FAQ</a>
                    </ListItem>
                    <ListItem>
                        <a href="#">Support</a>
                    </ListItem>
                    <ListItem>
                        <a href="#">Privacy</a>
                    </ListItem>
                    <ListItem>
                        <a href="#">Terms</a>
                    </ListItem>
                </LinksList>
            </SectionContainer>
            <SectionContainer>
                <HeaderTitle>Call Now</HeaderTitle>
                <HorizontalContainer>
                    <RedIcon>
                        <FontAwesomeIcon icon={faPhoneAlt}/>
                    </RedIcon>
                    <SmallText>+1 234 56 78</SmallText>
                </HorizontalContainer>
                <HorizontalContainer>
                    <RedIcon>
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </RedIcon>
                    <SmallText>info@mail.com</SmallText>
                </HorizontalContainer>
            </SectionContainer>
        </InnerContainer>
        <BottomContainer>
            <CopywrightText>© {year} YourCar. All rights reserved.</CopywrightText>
        </BottomContainer>
        </FooterContainer>
};
