type Props = {
  params: Promise<{ tripId: string }>;
};

export default async function TripDetailsPage({ params }: Props) {
  const { tripId } = await params;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Trip Details</h1>

      <div className="p-6 rounded-xl shadow bg-[var(--card)] border border-[var(--border)]">
        <p className="text-gray-700 mb-2">Trip ID</p>
        <p className="text-xl font-semibold">{tripId}</p>
      </div>
    </div>
  );
}
