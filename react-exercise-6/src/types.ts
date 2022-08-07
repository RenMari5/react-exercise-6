export interface Quote {
  text: string;
  author: string;
}

export interface Forecast {
  name: string;
  temperature: number;
  icon: string;
  detailedForecast: string;
}
