import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID TdMVGGkWW68WLnhOYf6TzZaG_b73iI1VdaKnpB5yVwM",
  },
});
