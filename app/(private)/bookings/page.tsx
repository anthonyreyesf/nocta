import Bookings from "@/components/screens/Bookings";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nocta | Bookings",
  description: "Generated by create next app",
};

export default function Page() {
  return <Bookings />;
}