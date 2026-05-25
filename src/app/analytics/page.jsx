"use client";
import { useAuth } from "@/contexts/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AnalyticsDashboard from "@/components/dashboard/AnalyticsDashboard";

export default function AnalyticsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return <div className="p-8 text-foreground font-light">Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return <AnalyticsDashboard instructorId={user.email} />;
}
