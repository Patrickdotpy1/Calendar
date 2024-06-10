import React, { useEffect } from 'react';
import DateButton from "./Date Button/DateButton";


function Month(props){
    // Add a function to gray out the days that are outside of the month
    // ! Add here !
    useEffect(() => {
        const handleLoad = () => {
            grayOut();
        };

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    const grayOut = () => {
        let Dates = document.getElementsByClassName('date-button');
        let beforeDatesGrayedOut = false;
        let nextMonthDates = false;
        for (let date of Dates){
            if (beforeDatesGrayedOut === false){
                if (date.innerHTML !== '1'){
                    //console.log(`BEFORE - ${date.innerHTML}`);
                    date.classList.toggle('outside');
                }
                else{
                    beforeDatesGrayedOut = true;
                }
            }
            if (nextMonthDates === true){
                //console.log(`AFTER - ${date.innerHTML}`);
                date.classList.toggle('outside');
            }
            if (date.innerHTML === (props.daysInMonth + 1).toString()){
                nextMonthDates = true;
            }
        }
    }



    let daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let FirstDateDay = props.firstDateDay;

    // Calculating the number of days prior to the 1st date of that week
    const daysPrior = daysOfWeek.indexOf(FirstDateDay);
    let datePrior = Number(props.daysInMonth) - daysPrior;

    // Calculating the number of days after the 30th/31th date of that week
    if ( props.daysInMonth === '30' ){
        var daysAfter = daysOfWeek.indexOf(FirstDateDay) + 2;
        //console.log(`daysAfter: ${daysAfter}`);
    }
    else if ( props.daysInMonth === '31' ){
        var daysAfter = daysOfWeek.indexOf(FirstDateDay) + 1;
        //console.log(`2 - daysAfter: ${daysAfter}`);
    }
    
    let NumberOfDaysAfter = Number(daysAfter);

    // Adding the dates of the month
    let DaysInMonth = [];
    
    // Adding the dates from the previous month
    for(let date = Number(datePrior); date<Number(props.daysInMonth); date++) { DaysInMonth.push(date); }

    // Adding the dates from the current month
    for(let date = 1; date<(Number(props.daysInMonth) + 1); date++) { DaysInMonth.push(date); }

    // Adding the dates from the future month
    for(let date = 1; date<Number(NumberOfDaysAfter); date++) { DaysInMonth.push(date); }

    //console.log('Days in month', DaysInMonth);

    // Separate the dates into weeks
    let Week1 = DaysInMonth.slice(0,7);
    let Week2 = DaysInMonth.slice(7,14);
    let Week3 = DaysInMonth.slice(14,21);
    let Week4 = DaysInMonth.slice(21, 28);
    let Week5 = DaysInMonth.slice(28);

    /*console.log('WEEK 1', Week1);
    console.log('WEEK 2', Week2);
    console.log('WEEK 3', Week3);
    console.log('WEEK 4', Week4);*/
    //console.log('WEEK 5', Week5);

    return(
        <div id='calendar-container'>
            <center><h1 style={{fontSize: '40px'}}>{props.month}</h1></center>
            <div id='dates-container'>
                <table id='dates-table'>
                    <tbody>
                        <tr>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thu</th>
                            <th>Fri</th>
                            <th>Sat</th>
                            <th>Sun</th>
                        </tr>


                        <tr>
                        {Week1.map((element) => (
                            <td><DateButton dateNumber={element}/></td>
                        ))}
                        </tr>

                        <tr>
                        {Week2.map((element) => (
                            <td><DateButton dateNumber={element}/></td>
                        ))}
                        </tr>

                        <tr>
                        {Week3.map((element) => (
                            <td><DateButton dateNumber={element}/></td>
                        ))}
                        </tr>

                        <tr>
                        {Week4.map((element) => (
                            <td><DateButton dateNumber={element}/></td>
                        ))}
                        </tr>
                    
                        <tr>
                        {Week5.map((element) => (
                            <td><DateButton dateNumber={element}/></td>
                        ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Month