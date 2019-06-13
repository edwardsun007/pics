import axios from "axios";

// create instance of axios
export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID a611e9939cbbe30ff2cc8aa53beb512b17142d324758dde8d016c06937f8bd81"
  }
});
