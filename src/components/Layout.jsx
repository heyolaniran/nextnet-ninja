import NavBar from "./NavBar";

export default function Layout ({ children }) {

    return (
        <div className="content">

            <NavBar/> 

            { children }

        </div>
    )
}