import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AutLayout";

const loginPage = () => {
  return (
    <>
      <AuthLayout title="login">
        <FormLogin />
      </AuthLayout>
    </>
  );
};

export default loginPage;
