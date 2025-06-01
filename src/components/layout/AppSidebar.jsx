"use client";

import { useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import menuNavigation from "@/data/navigation";
import { useSidebar } from "../../context/SidebarContext";

export default function AppSidebar() {
    const { isExpanded, isMobileOpen } = useSidebar(false);
    const pathname = usePathname();
    const isActive = useCallback((path) => path === pathname, [pathname]);

    const renderMenuItems = (menuNavigation) => (
        <ul className="flex flex-col gap-4">
            {menuNavigation.map((nav) => (
                <li key={nav.title}>
                    {nav.path && (
                        <Link
                            href={nav.path}
                            className={`menu-item ${isExpanded ? "pl-4 " : "pl-0"} ${isExpanded && isActive(nav.path) ? "bg-background dark:bg-[#1A2233]" : ""}  ${isActive(nav.path) ? "menu-item-active " : "menu-item-inactive"} 
                                }`}
                        >
                            <div className="flex items-center justify-center gap-3 w-full">
                                <div
                                    className={`menu-item-icon-container ${isActive(nav.path)
                                        ? "icon-container-active"
                                        : "icon-container-inactive"
                                        }`}
                                >
                                    {nav.icon}
                                </div>
                                {(isExpanded || isMobileOpen) && (
                                    <span className="menu-item-text font-semibold flex-1">{nav.title}</span>
                                )}
                            </div>
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    );

    return (
        <aside
            className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen z-50 border-r border-gray-300 
                transition-[width,transform] duration-300 ease-in-out
                ${isExpanded || isMobileOpen ? "w-[290px]" : "w-[90px]"}
                ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
                lg:translate-x-0`}
            onMouseEnter={() => !isExpanded}
        >
            <div
                className={`h-20 pt-4 flex items-center ${!isExpanded ? "lg:justify-center" : "justify-start"
                    }`}
            >
                <Link href="/">
                    {isExpanded || isMobileOpen ? (
                        <>
                            <div className="flex items-center">
                                <Image
                                    className="dark:hidden pl-4 mr-4"
                                    src="/logo.png"
                                    alt="Logo"
                                    width={70}
                                    height={70}
                                />
                                <p className="dark:hidden font-bold text-[#7F2F2F] italic text-lg" >Suluk<span className="text-primary">Sujinah</span>.</p>
                            </div>

                            <div className="flex items-center">
                                <Image
                                    className="hidden pl-4 mr-4 dark:block"
                                    src="/logo.png"
                                    alt="Logo"
                                    width={70}
                                    height={70}
                                />
                                <p className="hidden dark:block font-bold text-[#7F2F2F] italic" >Suluk<span className="text-primary">Sujinah</span>.</p>
                            </div>
                        </>
                    ) : (
                        <Image
                            className="p-0"
                            src="/logo.png"
                            alt="Logo"
                            width={40}
                            height={40}
                        />
                    )}
                </Link>
            </div>
            <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar h-full">
                <nav className="my-10 h-full">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            {renderMenuItems(menuNavigation)}
                        </div>
                    </div>
                </nav>
            </div>
        </aside>
    );
}