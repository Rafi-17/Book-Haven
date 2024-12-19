import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-5xl">Oooops!!!</h2>
            <NavLink to={"/"}>Back to home</NavLink>
        </div>
    );
};

export default ErrorPage;