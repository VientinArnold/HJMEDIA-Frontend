import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import PageLoading from "@/components/Loading/PageLoading";

export default function Layout() {
  return (
    <div>
      <Suspense fallback={<PageLoading />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
