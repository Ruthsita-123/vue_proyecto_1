import axios from "axios"

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=-33.4569&longitude=-70.6483&hourly=temperature_2m'

export const getTemperatura = async () => {
    const respuesta = await axios.get(API_URL);
    const nuevaTemperatura = respuesta.data.current.temperature_2m;
    return nuevaTemperatura
}
