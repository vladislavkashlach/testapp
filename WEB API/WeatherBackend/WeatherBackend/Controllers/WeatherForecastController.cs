using Microsoft.AspNetCore.Mvc;

namespace WeatherBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }

        [HttpGet(Name = "GetCurrentWeaherWeatherForecast")]
        public CurrentForecast GetCurrentWeaher()
        {
            return new CurrentForecast
            {
                CurrentTemperature = $"{Random.Shared.Next(-20, 55)}C",
                Location = "Warszawa"
            };
        }

        [HttpGet(Name = "GetMonthlyForeCast")]
        public List<DailyForecast> GetMonthlyForeCast()
        {
            var montlyForcecast = new List<DailyForecast>();

            for (int i = 1; i < 31; i++)
            {
                montlyForcecast.Add(new DailyForecast
                {
                    Day = i,
                    ImgClass = Random.Shared.Next(0, 3),
                    Temperature = $"{Random.Shared.Next(-20, 5)}C",
                });
            }

            return montlyForcecast;
        }

        [HttpGet(Name = "GetCurrentLocationForecast")]
        public CurrentLocationForecast GetCurrentLocationForecast()
        {
            return new CurrentLocationForecast
            {
                City = "Lodz",
                CountryCode = "PL",
                Temperature = $"{Random.Shared.Next(-20, 5)}C",
            };
        }

        [HttpGet(Name = "GetWeeklyForecast")]
        public List<ExtendedDailyForecast> GetWeeklyForecast()
        {
            var montlyForcecast = new List<ExtendedDailyForecast>();

            for (int i = 0; i < 7; i++)
            {
                montlyForcecast.Add(new ExtendedDailyForecast
                {
                    ImgClass = Random.Shared.Next(0, 3),
                    Temperature = $"{Random.Shared.Next(-20, 5)}C",
                    DayTemperature = $"{Random.Shared.Next(-20, 5)}C",
                    NightTemperature = $"{Random.Shared.Next(-20, 5)}C",
                    Humidity = $"{Random.Shared.Next(70, 100)}%",
                    DayOfWeek = DateTime.Now.AddDays(i).DayOfWeek.ToString(),
                });
            }

            return montlyForcecast;
        }

    }
}