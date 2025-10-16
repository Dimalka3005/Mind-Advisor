import './Header.css';

const Header = () => {
    return (
        <header className="app-header">
            <div className='container'>
                <div className='header-title'>
                    <span className='title-icon'>
                        🐳
                    </span>
                    <h1 className='title-text'>BlueWell Mind</h1>
                </div>
                <div>
                    <p className='header-subtitle'>
                        Your go-to source for the worst advice on the internet
                    </p>
                </div>
            </div>
        </header>
    )
}

export default Header;