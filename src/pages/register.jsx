import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AutLayout";

const RegisterPage = () => {
  return (
    <>
      <AuthLayout title="register">
        <FormRegister />
      </AuthLayout>
    </>
  );
};

export default RegisterPage;
