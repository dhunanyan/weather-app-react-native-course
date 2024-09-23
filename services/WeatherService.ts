import {
  Forecast,
  ForecastType,
  Weather,
  WeatherData,
  WeatherPointResponse,
  WeatherType,
} from "@models";

export class WeatherService {
  private baseUrl: string;
  private nwsUrl: string;
  private city: string = "";
  private state: string = "";
  private API_KEY: string = "API_KEY_GOES_HERE";

  constructor(latitude: number, longitude: number) {
    this.baseUrl = `https://api.tomorrow.io/v4/weather/forecast?apikey=${this.API_KEY}`;
    this.nwsUrl = `https://api.waether.gov/points/${latitude},${longitude}`;
  }

  public async fetchAll(): Promise<WeatherData> {
    const response = await fetch(this.baseUrl);
    const data = await response.json();
    const low = Math.floor(data.timelines.daily[0].values.temperatureMin);
    const high = Math.floor(data.timelines.daily[0].values.temperatureMax);
    const temperature = Math.floor(data.timelines.daily[0].values.temperature);
    const condition = this.getCondition(
      data.timelines.hourly[0].values.weatherCode
    ) as string;

    await this.fetchWeatherPoints();

    const currentWeather: Weather = {
      temperature,
      condition,
      high,
      low,
      city: this.city,
    };

    const hourly = data.timelines.hourly;
    const daily = data.timelines.daily;

    const hourlyForecast = [];
    const weeklyForecast = [];

    for (let i = 0; i < 6; i++) {
      var hour = hourly[i];
      var day = daily[i];

      let f: Forecast = {
        date: new Date(hour.time),
        high: Math.floor(hour.values.temperature),
        low: Math.floor(hour.values.temperature),
        temperature: Math.floor(hour.values.temperature),
        icon: this.mapIcons(),
        location: this.city,
        probability: Math.floor(hour.values.precipitationProbability),
        type: ForecastType.Hourly,
        weather: this.mapWeather(condition),
      };
      hourlyForecast.push(f);

      let d: Forecast = {
        date: new Date(day.time),
        high: Math.floor(day.values.temperature),
        low: Math.floor(day.values.temperature),
        temperature: Math.floor(day.values.temperature),
        icon: this.mapIcons(),
        location: this.city,
        probability: Math.floor(day.values.precipitationProbability),
        type: ForecastType.Weekly,
        weather: this.mapWeather(condition),
      };
      weeklyForecast.push(d);
    }

    return { currentWeather, hourlyForecast, weeklyForecast };
  }
  private async fetchWeatherPoints(): Promise<WeatherPointResponse | null> {
    try {
      const response = await fetch(`${this.nwsUrl}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: WeatherPointResponse = await response.json();
      this.city = data.properties.relativeLocation.properties.city;
      this.state = data.properties.relativeLocation.properties.state;
      return data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return null;
    }
  }
  private mapWeather(condition: string) {
    if (condition.toLowerCase().indexOf("sun")) {
      return WeatherType.Sunny;
    }
    if (condition.toLowerCase().indexOf("rain")) {
      return WeatherType.Rainy;
    }
    if (condition.toLowerCase().indexOf("cloudy")) {
      return WeatherType.Cloudy;
    }
    if (condition.toLowerCase().indexOf("clear")) {
      return WeatherType.Clear;
    }
    if (condition.toLowerCase().indexOf("fog")) {
      return WeatherType.Fog;
    }
    return WeatherType.Clear;
  }
  private mapIcons(): any {
    const icons = this.getIcons();
    const randomIndex = Math.floor(Math.random() * icons.length);

    return icons[randomIndex];
  }
  private getIcons() {
    return [
      require("../assets/forecast/windy.png"),
      require("../assets/forecast/rain.png"),
      require("../assets/forecast/sun_rain.png"),
    ];
  }
  private getCondition(key: number): string | undefined {
    return {
      1000: "Clear, Sunny",
      1100: "Mostly Clear",
      1101: "Partly Cloudy",
      1102: "Mostly Cloudy",
      1001: "Cloudy",
      2000: "Fog",
      2100: "Light Fog",
      4000: "Drizzle",
      4001: "Rain",
      4200: "Light Rain",
      4201: "Heavy Rain",
      5000: "Snow",
      5001: "Flurries",
      5100: "Light Snow",
      5101: "Heavy Snow",
      6000: "Freezing Drizzle",
      6001: "Freezing Rain",
      6200: "Light Freezing Rain",
      6201: "Heavy Freezing Rain",
      7000: "Ice Pellets",
      7101: "Heavy Ice Pellets",
      7102: "Light Ice Pellets",
      8000: "Thunderstorm",
    }[key];
  }
}
