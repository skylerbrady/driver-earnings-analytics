"use client";

import { EarningsRecord } from "@/types";

type Props = {
  data: EarningsRecord[];
};

export default function EarningsSummary({ data }: Props) {
  const totalEarnings = data.reduce((sum, d) => sum + d.earnings, 0);
  const totalTrips = data.reduce((sum, d) => sum + d.trips, 0);
  const avgPerTrip =
    totalTrips === 0 ? 0 : Math.round(totalEarnings / totalTrips);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <Metric title="Total Earnings" value={`₹${totalEarnings}`} />
      <Metric title="Total Trips" value={totalTrips} />
      <Metric title="Avg / Trip" value={`₹${avgPerTrip}`} />
    </div>
  );
}

function Metric({ title, value }: { title: string; value: any }) {
  return (
    <div className="bg-white bg-[var(--card)] border border-[var(--border)] p-6 rounded-xl shadow border border-gray-200 dark:border-zinc-800">
      <div className="text-sm text-gray-700">{title}</div>
      <div className="text-2xl font-bold mt-2">{value}</div>
    </div>
  );
}
