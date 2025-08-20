"use client";

import { Trip } from "@/app/generated/prisma";

interface tripDetailClientProps {
  trip: Trip;
}
export default function TripDetailClient({ trip }: tripDetailClientProps) {
  return <div>TripsDetail</div>;
}
