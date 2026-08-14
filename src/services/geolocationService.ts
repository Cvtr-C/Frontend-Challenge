import { ErrorTextEnum } from "../enums/error-text.enum";
interface IpLocation {
  city: string;
  country_name: string;
  latitude: number;
  longitude: number;
}

export async function getInitialLocation(): Promise<string> {
  const response = await fetch("https://ipapi.co/json/");

  if (!response.ok) {
    throw new Error(ErrorTextEnum.ERROR_OBTAIN_IP);
  }

  const data: IpLocation = await response.json();

  if (!data.city) {
    throw new Error(ErrorTextEnum.CITY_NOT_FOUND);
  }

  return data.city;
}
