import { CountryData } from '../types';

export const filterData = (
  data: CountryData[],
  searchTerm: string,
  startDate: string,
  endDate: string,
): CountryData[] => {
  return data
    .filter(({ country }) =>
      country.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .map((countryData) => {
      if (startDate || endDate) {
        countryData.data = countryData.data.filter(({ date }) => {
          return (
            (!startDate || date >= startDate) && (!endDate || date <= endDate)
          );
        });
      }
      return countryData;
    });
};