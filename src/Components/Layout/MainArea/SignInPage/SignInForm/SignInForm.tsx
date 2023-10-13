import "./SignInForm.css";
import { useForm } from "react-hook-form";

function SignInForm(): JSX.Element {

    const { register, handleSubmit } = useForm();
    function checkData(data: any) {
        console.log(data);
    }

    return (

        <form onSubmit={handleSubmit(checkData)} className="SignInForm">
            <h1>Sign In</h1>

            <input type="text" placeholder="UserName" required {...register("username")} />

            <input type="password" placeholder="Password" required {...register("password")} />

            <button type="submit">Sign In</button>

            <div>Don't have an account yet?<br />Register here:</div>
            <button>Register</button>
        </form>

    );
}

export default SignInForm;
