import React from 'react';
import './Conclusion.css'



export default function Conclusion({ touristNumber, isStudent, days, bikes }) {

    const ticketPriceList = {
        dayTicket: 8.6,
        sevenDayTicket: 34,
        monthlyTicket: 84,
        studentMonthlyTicket: 57,
        dayBikeTicket: 4.9,
        monthlyBikeTicket: 10.5,
        yearlyTicket: 840,
        groupTicket: 23.5
    }

    const months = parseInt(days/30);
    const weeks = parseInt((days%30)/7);
    const daysRemain = parseInt((days%30)%7);

    let ticketTotalPrice = 0; 
    let dayTicketNumber = 0; 
    let sevenDayTicketNumber = 0;
    let monthlyTicketNumber = 0;
    let studentMonthlyTicketNumber = 0;
    let dayBikeTicketNumber = 0;
    let monthlyBikeTicketNumber = 0;
    let yearlyTicketNumber = 0 ;
    let groupTicketNumber = 0;

    if(touristNumber === 1) {
        if(isStudent) {
            if(days > 7) {
                studentMonthlyTicketNumber =  months + 1;
            } else if (days > 4 && days <= 7) {
                sevenDayTicketNumber = 1 
            } else {
                dayTicketNumber = days
            }
        } else {
            if(months >= 10 ) {
                yearlyTicketNumber = 1; 
            } else {   
                if(weeks >= 3) {
                    monthlyTicketNumber = months + 1;
                } else {
                    monthlyTicketNumber = months;
                    sevenDayTicketNumber = weeks;
                }  
            }
        }
    } else if (touristNumber === 2) {
        if(months >= 10 ) {
            yearlyTicketNumber = 2; 
        } else {   
            if(weeks >= 3) {
                monthlyTicketNumber = (months + 1) * 2;
            } else {
                monthlyTicketNumber = months * 2;
                sevenDayTicketNumber = weeks * 2;
            }  
        }
    } else {
        groupTicketNumber = Math.ceil(touristNumber/5) * days
    }

    if(days%30 < 4) {
        monthlyBikeTicketNumber = months * bikes;
        dayBikeTicketNumber = daysRemain * bikes;
    } else {
        monthlyBikeTicketNumber = (months + 1)  * bikes
    }

    ticketTotalPrice = dayTicketNumber * ticketPriceList.dayTicket + sevenDayTicketNumber * ticketPriceList.sevenDayTicket
    + monthlyTicketNumber * ticketPriceList.monthlyTicket + studentMonthlyTicketNumber * ticketPriceList.studentMonthlyTicket + dayBikeTicketNumber * ticketPriceList.dayBikeTicket + monthlyBikeTicketNumber * ticketPriceList.monthlyBikeTicket + yearlyTicketNumber * ticketPriceList.yearlyTicket + groupTicketNumber * ticketPriceList.groupTicket;

    console.log(months, weeks, daysRemain, sevenDayTicketNumber,monthlyTicketNumber, studentMonthlyTicketNumber, dayBikeTicketNumber, monthlyBikeTicketNumber,yearlyTicketNumber, groupTicketNumber)

    return (
        <div className="conclusionSection">
            <div>
                {touristNumber === 1 ? <p>
                    You are visiting Berlin alone.
                </p> : <p>
                    You are in a group of {touristNumber} people.
                </p>}
                {isStudent && <p>and you are a student.</p>}
                <p>You are going to stay in Berlin for {days} days</p>
                {bikes !==0 && <p>You will take {bikes} bike(s) with you</p>}
            </div>
            
            <p>The total price is {ticketTotalPrice} Euro</p>
            <p>You need to buy the following number of tickets for you or your friends:</p>
            <div>
            {dayTicketNumber > 0 && 
                <p>
                    <span>{dayTicketNumber}</span> single day ticket
                </p>
            }
            {sevenDayTicketNumber > 0 && 
                <p>
                    <span>{sevenDayTicketNumber}</span> seven days ticket
                </p>
            }
            {monthlyTicketNumber > 0 && 
                <p>
                    <span>{monthlyTicketNumber}</span> monthly ticket
                </p>
            }
            {studentMonthlyTicketNumber > 0 && 
                <p>
                    <span>{studentMonthlyTicketNumber}</span> monthly ticket for students
                </p>
            }
            {dayBikeTicketNumber > 0 && 
                <p>
                    <span>{dayBikeTicketNumber}</span> single day ticket for bikes
                </p>
            }
            {monthlyBikeTicketNumber > 0 && 
                <p>
                    <span>{monthlyBikeTicketNumber}</span> monthly ticket for bikes
                </p>
            }
            {yearlyTicketNumber > 0 && 
                <p>
                    <span>{yearlyTicketNumber}</span> yearly ticket
                </p>
            }
            {groupTicketNumber > 0 && 
                <p>
                    <span>{groupTicketNumber}</span> group ticket
                </p>
            }
            </div>
        </div>
    );
}
