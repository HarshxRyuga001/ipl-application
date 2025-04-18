import axios from "axios";

const API_URL = "https://cricket-live-line1.p.rapidapi.com";
const HEADERS = {
  "x-rapidapi-host": "cricket-live-line1.p.rapidapi.com",
  "x-rapidapi-key": "8afae0bd5amshbd4961de2d8910ap194cc8jsn4cef3f583e75",
};

export default getPointsTable = async () => {
  const options = {
    method: "GET",
    url: `${API_URL}/series/336/pointsTable`,
    headers: HEADERS,
  };

  try {
    const response = await axios.request(options);
    console.log("response data", response.data);

    if (!response.data?.status || !response.data?.data.A) {
      throw new Error("Invalid points table data format");
    }

    return response.data.data.A.map((team) => ({
      team: team.teams,
      played: team.P,
      win: team.W,
      lost: team.L,
      points: team.pts,
      nrr: team.NRR,
      flag: team.flag,
    }));
  } catch (error) {
    console.log("There is an error getting the data");
    throw error;
  }
};
