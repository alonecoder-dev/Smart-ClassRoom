import StreamProvider from "@/providers/StreamProvider";
import { SignIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { neobrutalism } from "@clerk/themes";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {

    const user = await currentUser();
    if (!user)  return (
    <main className="flex flex-col items-center p-5 gap-10 animate-fade-in">
      <div className="mt-3">
                <SignIn
                    routing="hash"
          appearance={{
            baseTheme: neobrutalism,
          }}
        />
      </div>
    </main>
  );
        
    return (
      <main className="animate-fade-in">
        <StreamProvider>
          {children}
        </StreamProvider>
      </main>
    );
};

export default MainLayout;
