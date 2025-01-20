import DailyForecast from "./DailyForecast";

const WeeklyForecast = ({dailyForecastData}) => {
    console.log("======== WeeklyForecast: ");
    console.log(dailyForecastData);
    return (
        <>
            <div className="bg-green-100 py-2 px-4 sm:p-4 mx-3 sm:mx-16 rounded-md shadow-md">
                <h2 className="text-center text-xl font-semibold">
                    WEEKLY FORECAST
                </h2>
                <h4 className="text-center text-xs sm:text-sm font-normal text-slate-400">
                    {dailyForecastData.length} available forecasts
                </h4>

                {
                    dailyForecastData.map((item, index) => {
                       return <DailyForecast key={index} data={item} />
                    })
                }
            </div>
        </>
    );
}

export default WeeklyForecast;