import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav style={{ textAlign: "center", marginTop: "20px" }}>
            <Link to="/dashboard" style={{ padding: "10px" }}>
                Dashboard
            </Link>
            <Link to="/profile" style={{ padding: "10px" }}>
                Profile
            </Link>
            <Link to="/about" style={{ padding: "10px" }}>
                About
            </Link>
        </nav>
    );
};
export default Navbar;