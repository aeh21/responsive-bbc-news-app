import { COUNTRIES } from "../../constants";
import { CountryCode } from "../../types";

const getCountryNameFromCode = (countryCode: CountryCode ) => {
    const name = COUNTRIES.filter((country) => country.code === countryCode)[0].name;

    return name;
}

export default getCountryNameFromCode;