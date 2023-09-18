import { CountryData } from '../types';

export const filterData = (
  data: CountryData[],
  searchTerm: string,
): CountryData[] => {
  return data.filter(({ country }) =>
    country.toLowerCase().includes(searchTerm.toLowerCase()),
  );
};
