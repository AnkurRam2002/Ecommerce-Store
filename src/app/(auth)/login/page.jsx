//import LoginForm from "@/components/loginForm/loginForm";
//import { handleGithubLogin } from "@/lib/action";
import styles from "./login.module.css";
import { auth, signIn } from "@/lib/auth";

const LoginPage = async() => {
  const session = await auth();

  const handleGithubLogin = async() => {
    "use server"
    await signIn("github");
  }

  return (
    <div>
      <div>
        <form action={handleGithubLogin}>
          <button>Login with Github</button>
        </form>

      </div>
    </div>
  );
};

export default LoginPage;