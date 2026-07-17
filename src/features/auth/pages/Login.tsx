import { AuthCard } from "../components/AuthCard";
import { AuthLayout } from "../components/AuthLayout";
import { LoginForm } from "../components/LoginForm";

export function Login() {
  return (
    <AuthLayout>

      <AuthCard>

        <LoginForm />

      </AuthCard>

    </AuthLayout>
  );
}