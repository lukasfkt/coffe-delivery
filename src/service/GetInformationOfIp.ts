import axios from "axios";

export interface ResponseIPInfo {
  ip: string;
  version: string;
  city: string;
  region: string;
  region_code: string;
  country_code: string;
  country_code_iso3: string;
  country_name: string;
  country_capital: string;
  country_tld: string;
  continent_code: string;
  in_eu: boolean;
  postal: string;
  latitude: number;
  longitude: number;
  timezone: string;
  utc_offset: string;
  country_calling_code: string;
  currency: string;
  currency_name: string;
  languages: string;
  country_area: number;
  country_population: number;
  asn: string;
  org: string;
  hostname: string;
}

interface Props_I {
  ip: string;
  field?: keyof ResponseIPInfo;
}

type Res_T<T> = T extends { field: keyof ResponseIPInfo }
  ? string
  : ResponseIPInfo;

export const Service_GetInformationOfIp = async <T extends Props_I>(
  props: T
): Promise<Res_T<T>> => {
  try {
    const { data } = await axios.get(
      `https://ipapi.co/${props.ip}/${props.field ?? "json"}`
    );
    return data;
  } catch (error: any) {
    if (error === axios.isAxiosError(error)) {
      throw alert("Error request for ipapi");
    }
    throw alert("Error");
  }
};
