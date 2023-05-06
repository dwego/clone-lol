import axios from "axios";

export const api = axios.create({
  baseURL: "https://ddragon.leagueoflegends.com/cdn/",
});

export class Endpoints {
  static champions = async () => {
    const { data } = await api.get("/13.9.1/data/pt_BR/champion.json");
    return data;
  };
  static infoChampion = async (slug) => {
    const { data } = await api.get(`/13.9.1/data/pt_BR/champion/${slug}.json`);
    return data;
  };
}
