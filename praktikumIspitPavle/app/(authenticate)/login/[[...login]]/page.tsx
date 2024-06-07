import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full">
        <div className="space-y-3 pt-10 text-center">
          <h1 className="font-extrabold text-xl text-[#575757]">
            Dobrodošli nazad na aplikaciju.
          </h1>
        </div>

        <div className="mt-5">
          <ClerkLoaded>
            <SignIn path="/login" />
          </ClerkLoaded>

          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
    </div>
  );
}
