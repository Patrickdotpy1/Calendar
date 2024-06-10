import Month from './Month'

function App() {

  function getData(year, month) {
    // Months are 0-based in JavaScript Date, so subtract 1 from the month
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0); // 0th day of the next month is the last day of the given month

    // Array of weekday names
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Get the weekday names
    const firstDayOfWeek = weekdays[firstDay.getDay()];
    const lastDayOfWeek = weekdays[lastDay.getDay()];

    return {
        firstDayOfWeek,
        lastDayOfWeek
    };
  }

  let currentYear = new Date();
  console.log(currentYear);
  let data = getData()

  return (
    <Month month='June' daysInMonth='31' firstDateDay='Wed'/>
  )
}

export default App
