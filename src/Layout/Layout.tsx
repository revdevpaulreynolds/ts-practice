import Menu from "./Menu";
import Greet from "./Greet";
import About from "./About";
import Header from "./Header";
import { useState } from "react";


const Layout = (): JSX.Element => {

    const [tab, setTab] = useState('home')

    return (
       <>
            <Header />
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