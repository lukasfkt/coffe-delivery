import axios from "axios";

interface ResponseIpIfy_I {
  ip: string;
}

export const Service_GetUserIp = async (): Promise<string> => {
  try {
    const { data } = await axios.get<ResponseIpIfy_I>(
      "https://api.ipify.org?format=json"
    );
    return data.ip;
  } catch (error: any) {
    if (error === axios.isAxiosError(error)) {
      throw alert("Error request for ipify");
    }
    throw alert("Error");
  }
};
