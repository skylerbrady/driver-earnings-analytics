"use client";

import { useMemo, useState } from "react";
import { earningsData } from "@/data/mockData";
import Filters from "./Filters";
import EarningsSummary from "./EarningsSummary";
import EarningsChart from "./EarningsChart";

export default function Dashboard() {
  const [city, setCity] = useState("All");

  const filteredData = useMemo(() => {
    if (city === "All") return earningsData;
    return earningsData.filter((d) => d.city === city);
  }, [city]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Earner Metrics</h1>
        <p className="text-gray-700 mt-1">
          Track earnings and performance at a glance
        </p>
      </div>

      <Filters selectedCity={city} onCityChange={setCity} />

      <EarningsSummary data={filteredData} />

      <div className="bg-white bg-[var(--card)] border border-[var(--border)] p-6 rounded-xl shadow border border-gray-200 dark:border-zinc-800">
        <EarningsChart data={filteredData} />
      </div>
    </div>
  );
}
