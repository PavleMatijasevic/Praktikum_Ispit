"use client";

import { useState } from "react";
import { useMedia } from "react-use";
import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { NavButton } from "@/components/navigation-button"
import { Button } from "@/components/ui/button";


import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";


const route = [
    {
        href: '/',
        label: 'Pocetna'
    },
    {
        href: '/usluge',
        label: 'Usluge'
    },
    {
        href: '/kontakt',
        label: 'Kontakt'
    },
    {
        href: '/vesti',
        label: 'Vesti'
    },
    {
        href: '/galerija',
        label: 'Galerija'
    },
];

export const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);
    const ruter = useRouter();
    const trenutniUrl = usePathname();
    const mobilniUredjaj = useMedia("(max-width: 1024px)", false);
    const onClick = (href: string) => {
        ruter.push(href);
        setIsOpen(false);
    }

    if (mobilniUredjaj) {
        return (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger>
                    <Button
                        variant='outline'
                        size='lg'
                        className="header-button"
                    >
                        <Menu className="size-3" />
                    </Button>
                </SheetTrigger>

                <SheetContent side="right" className="px-3">
                    <nav className="flex flex-col gap-y-3 pt-5">
                        {route.map((rute) => (
                            <Button
                                key={rute.href}    
                                variant={rute.href === trenutniUrl ? "default" : "outline"}
                                onClick={() => onClick(rute.href)}
                                className="header-button"
                            >
                                {rute.label}
                            </Button>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        );
    }

    return (
        // Meni kada je ekran smanjen!
        <nav className="text-blue-800 hidden lg:flex items-center gap-x-3 overfrlow-x-auto">
            {route.map((rute) => (
                <NavButton
                    key={rute.href}
                    href={rute.href}
                    label={rute.label}
                    isActive={trenutniUrl === rute.href}
                />
            ))}
        </nav>
    );
};