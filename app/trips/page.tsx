import Link from "next/link";

const trips = [
  { id: "trip-101", date: "2025-01-01", earnings: 300 },
  { id: "trip-102", date: "2025-01-02", earnings: 450 },
  { id: "trip-103", date: "2025-01-03", earnings: 380 },
];

export default function TripsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Trips</h1>
        <p className="text-gray-700">Individual trip breakdown</p>
      </div>

      <div className="bg-white bg-[var(--card)] border border-[var(--border)] rounded-xl shadow border border-gray-200 dark:border-zinc-800 divide-y">
        {trips.map((trip) => (
          <Link
            key={trip.id}
            href={`/trips/${trip.id}`}
            className="block p-4 hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            <div className="flex justify-between">
              <span>{trip.date}</span>
              <span className="font-semibold">₹{trip.earnings}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
