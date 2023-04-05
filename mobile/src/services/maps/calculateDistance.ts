import { getPreciseDistance } from "geolib";
import api from "../api/api";

export async function calculateDistance(
  lat: number = 0,
  long: number = 0,
  city: string
) {

  if(lat == 0 && long == 0 ){
    return 0
  }

  let calculatePreciseDistance = await getPreciseDistance(
    { latitude: lat, longitude: long },
    { latitude: -22.6797926040641, longitude: -47.62749220220461 }
  ) ?? 0;

  const distanceKM = (calculatePreciseDistance / 1000) ;
  
  let frete: any;
  await api
    .get(`/frete`, { params: { city: city } })
    .then((response) => frete = response.data)
    .catch((error) => console.log(error));

  
  const valuePerKm = frete?.valueKm ?? 2;

  const valueCalc = (distanceKM * valuePerKm);

  if(valueCalc > frete?.valueMax){
    return frete?.valueMax ?? 0
  }

  if(valueCalc < frete?.valueMin){
    return frete?.valueMin ?? 0
  }

  return valueCalc

}
