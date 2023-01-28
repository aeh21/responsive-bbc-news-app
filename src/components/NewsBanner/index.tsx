import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { CountryCode } from "../../types";
import getCountryNameFromCode from "../../utils/getCountryNameFromCode/getCountryNameFromCode";

const NewsBanner = () => {
  const [countryCode, setCountryCode] = useState<CountryCode | undefined>(
    undefined
  );

  const { pathname } = useLocation();

  useEffect(() => {
    const isNewsPage = pathname.indexOf("news") !== -1;

    if (isNewsPage) {
      const code = pathname.split("/").at(-1) as CountryCode;

      setCountryCode(code);
    } else {
      setCountryCode(undefined);
    }
  }, [pathname]);

  return (
    <div className="w-full">
      <div className="bg-bbc-red py-4">
        <div className="container mx-auto">
          <h1 className="text-white text-3xl uppercase font-bold">News</h1>
        </div>
      </div>

      <div className="py-4">
        <div className="container mx-auto">
          <h2 className="text-2xl border-b-[5px] border-b-bbc-red w-fit">
            {countryCode ? getCountryNameFromCode(countryCode) : "Countries"}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default NewsBanner;
