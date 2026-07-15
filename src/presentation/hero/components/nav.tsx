import "./navBar.css";

const leftNavItem = [
    "New Arrival",
    "Collection",
    "Editorial"
]

const rightNavItem = [
    "Sustainable Art",
    "Archives"
]

export function NavBar() {
    return <header className="navBar">
        // Left Side
        <nav className="nav-left">
            {leftNavItem.map((item, index) =>(
                <a
                key={item} 
                href="#"
                className={index === 0 ? "active" : ""}
                >
                  {item}
                </a>
            ))}
        </nav>

        //Web Name or Title
        <div className="webName">
            URBAN BAZAAR
        </div>

        //Right Side

        <div className="navRight">
            <nav className="navRightLink">
                {rightNavItem.map((item, index) =>(
                    <a
                    key={item} 
                    href="#"
                    >
                        {item}
                    </a>
                ))}
            </nav>

            // End Icons
            <div className="icons">
                <button>
                    
                </button>
            </div>
        </div>
    </header>
    
}