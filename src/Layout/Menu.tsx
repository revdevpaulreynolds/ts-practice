
const Menu = (): JSX.Element => {
    return (
        <>
            <ul className="nav justify-content-center bg-warning">
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link" href="#">Your mom</a>
                </li> */}
            </ul>
        </>
    );
}

export default Menu;