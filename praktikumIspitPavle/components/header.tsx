import { Navigation } from "@/components/navigation";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

export const Header = () => {
    return (
<header className="h-24 bg-gray-200 px-5 py-10 lg:px-12 pb-20">
            <div className="max-w-screen-2xl mx-auto relative">
                <div className="w-full flex items-center justify-between mb-10">
                    <div className="flex items-center justify-end w-full gap-x-10">
                        <Navigation />
                        <ClerkLoaded>
                            <div className="animate-pulse">
                                <UserButton afterSignOutUrl="/" />
                            </div>
                        </ClerkLoaded>
                        <ClerkLoading>
                            <Loader2 className="size-7 animate-spin text-slate-400" />
                        </ClerkLoading>
                    </div>
                </div>
                <div className="absolute top-0 left-0 animate-blink z-10">
                    <h1 className="text-black text-4xl">Pavle Clinic</h1>
                </div>
            </div>
        </header>
    );
};
