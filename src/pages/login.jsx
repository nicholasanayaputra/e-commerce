import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout";

const loginPage = () => {
  return (
    <>
      <AuthLayout title="Login" type="login">
        <FormLogin />
      </AuthLayout>
    </>
  );
};

export default loginPage;
