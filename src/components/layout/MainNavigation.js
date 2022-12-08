import "./MainNavigation.css";

const MainNavigation = () => {
    return(
        <header className="header">
            <div className="logo">React <span> navigace, props, css, form,... </span></div>
            <nav>
                <ul>
                    <li>
                        <a href="/">Moje knihy</a>
                    </li>
                    <li>
                        <a href="/OnePage">Přidat novou knihu</a>
                    </li>
                    <li>
                        <a href="/Contact">Oblíbené knihy</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation