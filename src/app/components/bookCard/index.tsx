import React from 'react';
import styled, {css} from 'styled-components';
import tw from "twin.macro";
import {Marginer} from "../marginer";
import {Button} from "../button";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {SCREENS} from "../responsive";

const CardContainer = styled.div`
    min-height: 4.3em;
    box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
    ${tw`
        flex
        justify-center
        items-center
        rounded-md
        bg-white
        pt-1
        pb-1
        pr-2
        pl-2
        md:pt-2
        md:pb-2
        md:pl-9
        md:pr-9
      `};
`;

const ItemContainer = styled.div`
    ${tw`
        flex relative
    `};
`;

const Icon = styled.div`
    ${tw`
        text-red-500
        fill-current
        text-xs
        md:text-base
        mr-1
        md:mr-3
    `};
`;

const Name = styled.span`
    ${tw`
        text-gray-600
        text-xs
        md:text-sm
        cursor-pointer
        select-none
    `};
`;

const LineSeparator = styled.span`
    width: 2px;
    height: 45%;
    ${tw`
        bg-gray-300
        mr-2
        ml-2
        md:mr-5
        md:ml-5
    `};
`;

const SmallIcon = styled.span`
    ${tw`
        text-gray-500
        fill-current
        text-xs
        md:text-sm
        ml-1
    `};
`;

const DateCalendar = styled(Calendar)`
    position: absolute;
    user-select: none;
    max-width: none;
    top: 3.5em;
    left: 0;
    
    ${({offset}: any) => offset && css`
        left: -7em;
    `}
    
    @media (min-width: ${SCREENS.md}) {
        top: 4em;
        left: -2em;
    }
` as any;

export const BookCard = () => {
    const [startDate, setStartDate] = React.useState<Date>(new Date());
    const [isStartCalendarOpen, setStartCalendarOpen] = React.useState(false);
    const [returnDate, setReturnDate] = React.useState<Date>(new Date());
    const [isReturnCalendarOpen, setReturnCalendarOpen] = React.useState(false);

    const toggleStartDateCalendar = () => {
        setStartCalendarOpen(!isStartCalendarOpen);
        if (isReturnCalendarOpen) setReturnCalendarOpen(false);
    };

    const toggleReturnDateCalendar = () => {
        setReturnCalendarOpen(!isReturnCalendarOpen);
        if (isStartCalendarOpen) setStartCalendarOpen(false);
    };

    return(
        <CardContainer>
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </Icon>
                <Name onClick={toggleStartDateCalendar}>Pick Up Date</Name>
                <SmallIcon>
                    <FontAwesomeIcon icon={isStartCalendarOpen ? faCaretUp : faCaretDown} />
                </SmallIcon>
                {isStartCalendarOpen && <DateCalendar value={startDate} onChange={setStartDate as any}/>}
            </ItemContainer>
            <LineSeparator />
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </Icon>
                <Name onClick={toggleReturnDateCalendar}>Return Date</Name>
                <SmallIcon>
                    <FontAwesomeIcon icon={isStartCalendarOpen ? faCaretUp : faCaretDown} />
                </SmallIcon>
                {isReturnCalendarOpen && <DateCalendar offset value={returnDate} onChange={setReturnDate as any}/>}
            </ItemContainer>
            <Marginer margin="2em" direction='horizontal'/>
            <Button text="Book Your Ride" />
        </CardContainer>
    );
}