import LoginForm from "../components/auth/LoginForm";


const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
