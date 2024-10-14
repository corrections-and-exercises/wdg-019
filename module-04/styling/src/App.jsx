// You can work here or download the template
// Your components go here

const Navigation = () => {
    return (
        <nav className='navigation'>
            <ul>
                <li>
                    <a href='#hero'>Home</a>
                </li>
                <li>
                    <a href='#services'>Services</a>
                </li>
                <li>
                    <a href='#footer'>Footer</a>
                </li>
            </ul>
        </nav>
    );
};

const Header = () => {
    return (
        <header
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
            }}
        >
            <h1 style={{color: 'blue'}}>My Website</h1>
            <Navigation />
        </header>
    );
};

const Hero = () => {
    return (
        <section className='hero'>
            <h2>Welcome to Our Website</h2>
            <p>This is the hero section with some introductory text</p>
        </section>
    );
};

const Services = () => {
    return (
        <section className='services'>
            <h2>Our Services</h2>
            <p>We offer a variety of services to meet your needs</p>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className='footer'>
            <p>My Website. All rights reserved</p>
        </footer>
    );
};

const App = () => {
    return (
        <>
            <Header />
            <Hero />
            <Services />
            <Footer />
        </>
    );
};

export default App;
