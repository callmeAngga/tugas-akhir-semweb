"use client";

import AppSidebar from "@/components/layout/AppSidebar";
import AppBackdrop from "@/components/layout/AppBackdrop";
import AppHeader from "@/components/layout/AppHeader";
import { useSidebar } from "@/context/SidebarContext";

export default function DashboardLayout({ children }) {
    const { isExpanded, isMobileOpen } = useSidebar();

    const mainContentMargin = isMobileOpen
        ? "ml-0"
        : isExpanded
            ? "lg:ml-[290px]"
            : "lg:ml-[90px]";

    return (
        <div className="xl:flex min-h-screen bg-[#F9FAFB] dark:bg-gray-900">
            <AppSidebar />
            <AppBackdrop />
            <div
                className={`flex-1 transition-all bg-[#F9FAFB] dark:bg-gray-900 ${mainContentMargin}`}
            >
                <AppHeader />
                <main className="p-0 bg-[#F9FAFB] dark:bg-gray-900 h-full mx-auto md:p-0">
                    {children}
                </main>
            </div>
        </div>
    );
}