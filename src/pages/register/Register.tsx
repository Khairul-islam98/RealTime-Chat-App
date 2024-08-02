import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";


const Register = () => {
    return (
        <div className="h-[100vh] flex items-center justify-center p-10">
        <div className="w-full md:w-[450px]">
          <h1 className="text-center text-white font-bold text-4xl md:text-6xl mb-10 ">
            Register{" "}
          </h1>
          <div className="flex flex-col  gap-3 bg-white p-6 min-h-[150px] rounded-xl drop-shadow-xl ">
            <Input name="email" type="email" />
            <Input name="password" type="password" />
            <Input name="confirm-password" type="password" />
            <Button text="Register" secondary />
            <Link to='/login'><Button className="w-full" text="Login" /></Link>
          </div>
        </div>
        <div className="h-full w-full bg-gradient-to-r opacity-70 from-myBlue to-myPink absolute  top-0 -z-10" />
        <div className="h-full w-full absolute bg-pattern -z-20 top-0" />
      </div>
    );
};

export default Register;