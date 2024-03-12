const Header = ({ heading }) => {
    return (
        <div className="header-container">
            <h1 className="heading">{heading}</h1>
            <input className="search-box" type="text" placeholder="Search to find your note!" />
        </div>
    )
}

export default Header;