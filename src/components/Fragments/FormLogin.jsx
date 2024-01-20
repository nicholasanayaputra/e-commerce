import Button from "../Elements/Button";
import InputForm from "../Elements/input";

const FormLogin = () => {
  return (
    <>
      {" "}
      <form action="">
        <InputForm
          label="Email"
          type="email"
          placeholder="example@mail.com"
          name="email"
        />
        <InputForm
          label="Password"
          type="password"
          placeholder="******"
          name="password"
        />

        <Button classname="bg-yellow w-full">Login</Button>
      </form>
    </>
  );
};

export default FormLogin;
