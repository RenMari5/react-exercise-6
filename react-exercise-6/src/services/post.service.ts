import axios from "axios";
import { Quote } from "../types";

export function fetchAllPosts() {
  return axios
    .get<Quote[]>("https://grandcircusco.github.io/demo-apis/quotes.json")
    .then((response) => {
      // console.log(response);
      // console.log(response.data);
      return response;
    });
}
