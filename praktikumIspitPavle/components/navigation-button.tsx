import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";


type Props = {
    href: string;
    label: string;
    isActive?: boolean;
};

export const NavButton = ({
    href,
    label,
    isActive
}: Props) => {
    return (
        <Button
            asChild
            size='lg'
            variant='link'
            className={cn("w-full lg:w-auto justify-between font-medium hover:bg-white/90 hover:text-gray border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-slate-850 focus:bg-white/10 transition",
                isActive ? "bg-white/60 text-slate-950" : "bg-transparent"
            )}>
            <Link href={href}>
                {label}
            </Link>
        </Button>
    )
}