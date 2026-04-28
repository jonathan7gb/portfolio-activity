"use client";

import { Airplay, House, MonitorSmartphone, SquareUserRound } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="w-full text-white">
            <div className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-2xl m-2 group relative w-max">
                        <Airplay className="w-9 h-9 text-primary" />
                    </Link>

                    <button
                        type="button"
                        className="m-2 inline-flex items-center justify-center rounded-md p-2 text-white transition hover:bg-primary-dark md:hidden"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        aria-expanded={isMenuOpen}
                        aria-label="Abrir menu de navegacao"
                    >
                        <span className="sr-only">Abrir menu</span>
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            {isMenuOpen ? (
                                <path d="M18 6L6 18M6 6l12 12" />
                            ) : (
                                <path d="M3 6h18M3 12h18M3 18h18" />
                            )}
                        </svg>
                    </button>

                    <nav className="hidden flex-row items-center justify-between gap-2 md:flex lg:gap-6">
                        <Link href="/" className="text-base font-medium m-2 group relative w-max">

                            <span className="flex items-center gap-2"> <House className="w-5 h-5 text-white" strokeWidth={1.8} /> Home</span>
                            <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-full"></span>
                        </Link>
                        <Link href="/about" className="text-base font-medium m-2 group relative w-max">
                            <span className="flex items-center gap-2"> <SquareUserRound className="w-5 h-5 text-white" strokeWidth={1.8} /> About</span>
                            <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-full"></span>
                        </Link>
                        <Link href="/projects" className="text-base font-medium m-2 group relative w-max">
                            <span className="flex items-center gap-2"> <MonitorSmartphone className="w-5 h-5 text-white" strokeWidth={1.8} /> Projects</span>
                            <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-full"></span>
                        </Link>
                    </nav>
                </div>

                {isMenuOpen && (
                    <nav className="mt-3 flex flex-col gap-1 border-b border-primary p-2 md:hidden">
                        <Link href="/" className="rounded-md px-3 py-2 text-base font-medium transition hover:bg-primary-dark" onClick={closeMenu}>
                            <span className="flex items-center gap-2"> <House className="w-5 h-5 text-white" strokeWidth={1.8} /> Home</span>
                        </Link>
                        <Link href="/about" className="rounded-md px-3 py-2 text-base font-medium transition hover:bg-primary-dark" onClick={closeMenu}>
                            <span className="flex items-center gap-2"> <SquareUserRound className="w-5 h-5 text-white" strokeWidth={1.8} />About</span>
                        </Link>
                        <Link href="/projects" className="rounded-md px-3 py-2 text-base font-medium transition hover:bg-primary-dark" onClick={closeMenu}>
                            <span className="flex items-center gap-2"> <MonitorSmartphone className="w-5 h-5 text-white" strokeWidth={1.8} /> Projects</span>
                        </Link>
                    </nav>
                )}
            </div>
        </header>
    );
}