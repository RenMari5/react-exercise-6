export interface Quote {
  text: string;
  author: string;
}

export interface WeatherForecast {
  properties: {
    periods: Period[];
  };
}

export interface Period {
  name: string;
  temperature: number;
  icon: string;
  detailedForecast: string;
}
