import Menu from "./Menu";
import Greet from "./Greet";
import About from "./About";
import { useState } from "react";


const Layout = (): JSX.Element => {

    const [tab, setTab] = useState('home')

    return (
       <>
            <div className="bg-primary text-white py-3">
                <h1 className="text-center">
                    Paul Reynolds<br />
                    web developer
                </h1>

            </div>
            <div>
                <Menu />
            </div>
            <div className="container">
                <Greet name={"Paul"}/>
                <About />
            </div>
            
       </> 
    )
}

export default Layout;