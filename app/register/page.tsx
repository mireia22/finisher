import RegisterForm from "../components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-sm">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
