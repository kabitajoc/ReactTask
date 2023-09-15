import { useQuery } from "@tanstack/react-query";

export function useVaccinationData() {
  return useQuery("vaccinations", async () => {
    const response = await fetch(
      "https://gist.githubusercontent.com/DikenMaharjan/95754f5efce430c608c7996602b63041/raw/7b1519fa02751628fab5a32275a4729ec7d11c4e/vaccinations.json"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return response.json();
  });
}
