import 

function LoginButton(){
    const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
}
function LoginPage() {
    return (
        <div>
            <LoginButton/>
        </div>
    )
}
export default LoginPage;