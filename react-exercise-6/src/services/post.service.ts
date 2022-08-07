import axios from "axios";
import { Forecast, Quote } from "../types";

export function fetchAllPosts() {
  return axios
    .get<Quote[]>("https://grandcircusco.github.io/demo-apis/quotes.json")
    .then((response) => {
      // console.log(response);
      // console.log(response.data);
      return response;
    });
}

export function fetchAllForecasts() {
  return axios
    .get<Forecast[]>("https://api.weather.gov/gridpoints/DTX/65,33/forecast")
    .then((response) => {
      // console.log(response);
      // console.log(response.data);
      return response;
    });
}
