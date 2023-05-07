import { useCallback, useEffect, useMemo, useState } from "react";
import { ResponseIPInfo, Service_GetInformationOfIp } from "../service/GetInformationOfIp";
import { Service_GetUserIp } from "../service/GetUserIp";

type result<T> = T extends undefined ? string : ResponseIPInfo; 

type resolveHook<T> = { load: boolean, data: result<T> | null, err: boolean }

export function useLocationUserClient<T extends string>(field?: keyof ResponseIPInfo): resolveHook<T> {
  const [load, set_load] = useState(false);
  const [data, set_data] = useState<result<T> | null>(null);
  const [err, set_err] = useState<boolean>(false);
  
  const handle = useCallback(async () => {
    try {
      const ip = await Service_GetUserIp();
      const data = await Service_GetInformationOfIp({ip, field: field}) as result<T>;
      set_data(data);
      set_load(true);
    } catch (error) {
      set_err(true);
    }
  }, []);

  useEffect(() => {
    handle();
  }, []);

  const values = useMemo(() => {
    return {
      load, 
      data,
      err
    }
  }, [load, err]);

  return values
};

