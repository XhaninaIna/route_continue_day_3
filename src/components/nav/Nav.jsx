import {Link} from "react-router-dom";
export default function Nav(){
    return (
        <div className="layout_nav">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/store">Store</Link>
        </div>
    )
}