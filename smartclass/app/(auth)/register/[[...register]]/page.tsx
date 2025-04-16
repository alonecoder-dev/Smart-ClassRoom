import { SignIn, SignUp } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

const RegisterPage = () => {
  return (
    <main className="flex flex-col items-center p-5 gap-10 animate-fade-in">
      <div className="mt-3">
        <SignUp
          appearance={{
            baseTheme: neobrutalism,
          }}
        />
      </div>
    </main>
  );
};

export default RegisterPage;
