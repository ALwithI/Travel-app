import NewLocationnClient from "@/components/New-location";
export default async function NewLocation({
  params,
}: {
  params: Promise<{ tripId: string }>;
}) {
  const { tripId } = await params;

  return <NewLocationnClient tripId={tripId} />;
}
