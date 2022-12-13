namespace WeatherBackend
{
    public class ExtendedDailyForecast : DailyForecast
    {
        public string DayTemperature { get; set; }  

        public string NightTemperature { get; set; }

        public string DayOfWeek { get; set; }

        public string Humidity { get; set; }
    }
}
