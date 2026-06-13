import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import ProfileClient from "@/components/ProfileClient";
import { majors } from "@/data/majors";

export const metadata: Metadata = {
  title: "Your Profile — Spark",
  description: "View your saved college majors.",
};

export default function ProfilePage() {
  return (
    <PageShell>
      <ProfileClient majors={majors} />
    </PageShell>
  );
}
