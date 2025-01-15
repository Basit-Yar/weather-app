
// const todayHourlyWeatherInfo = () => {

//     fetch("https://api.openweathermap.org/data/2.5/forecast?q=bhopal&appid=66ec6d9193d441b0fe920565f19f4442")
//         .then(response => response.json())
//         .then(data => {
//             matchedData = data.list.filter(x => dateExtractor(x.dt));
//             console.log(matchedData);
//         });

// }

// const dateExtractor = (timestamp) => {

//     const currentDate = new Date().getDate();
//     const date = new Date(timestamp * 1000); // Multiply by 1000 to convert to milliseconds
//     if(currentDate == date.getDate())
//         return true;
//     return false;
// }

// todayHourlyWeatherInfo();
// console.log(dateExtractor(1736964000));