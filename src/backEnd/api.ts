import { Image } from "../components/App.types";
import axios from "axios";
type FetchData = {
  data: {
    total: number;
    total_page: number;
    results: Image[];
  };
};

const KEY = "vTrfGBVKxKtjkoCvKwE_sjGVgU6lYDr2x8BDlSTT82Q";

const fetchSearch = async (search: string, page: number) => {
  if (search.trim() === "") {
    return;
  }
  const { data }: FetchData = await axios.get(
    `https://api.unsplash.com/search/photos/?page=${page}&per_page=12&client_id=${KEY}&query=${search}`
  );
  return data;
};

export default fetchSearch;
