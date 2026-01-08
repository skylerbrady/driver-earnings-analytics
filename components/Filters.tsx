"use client";

import { earningsData } from "@/data/mockData";

type Props = {
  selectedCity: string;
  onCityChange: (city: string) => void;
};

export default function Filters({ selectedCity, onCityChange }: Props) {
  const cities = Array.from(new Set(earningsData.map((d) => d.city)));

  return (
    <div className="bg-white bg-[var(--card)] border border-[var(--border)] p-4 rounded-lg shadow border border-gray-200 dark:border-zinc-800 w-fit">
      <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
        City
        <select
          value={selectedCity}
          onChange={(e) => onCityChange(e.target.value)}
          className="ml-3 px-3 py-2 text-sm rounded-md border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="All">All</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
