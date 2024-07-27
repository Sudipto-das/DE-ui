import axios from "axios";
import { CountryCode } from "../../types/countryCode";

export const fetchCountryCodes = async (): Promise<CountryCode[]> => {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    const countries = response.data
        .filter((country: any) => country.idd && country.idd.root && country.idd.suffixes && country.idd.suffixes.length > 0)
        .map((country: any) => ({
            code: country.idd.root + country.idd.suffixes[0],
            name: country.name.common
        }));

    countries.sort((a: { name: string; }, b: { name: string; }) => a.name.localeCompare(b.name));

    return countries;
};
