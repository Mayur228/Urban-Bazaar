import { AuthCard } from "../components/AuthCard";
import { AuthLayout } from "../components/AuthLayout";
import { SignupForm } from "../components/SignupForm";

export function Signup() {
  return (
    <AuthLayout>

      <AuthCard>

        <SignupForm />

      </AuthCard>

    </AuthLayout>
  );
}