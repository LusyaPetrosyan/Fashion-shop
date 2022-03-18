import { useAuth0 } from "@auth0/auth0-react";

function LoginButton(){
    const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
}
function LoginPage() {
    return (
        <div style={{}}>
            <LoginButton/>
        </div>
    )
}
export default LoginPage;