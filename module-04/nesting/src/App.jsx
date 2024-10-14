// You can work here or download the template
// Your components go here

const Navigation = () => {
    return (
        <nav>
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
        <header>
            <h1>My Website</h1>
            <Navigation />
        </header>
    );
};

const Hero = () => {
    return (
        <section>
            <h2>Welcome to Our Website</h2>
            <p>This is the hero section with some introductory text</p>
        </section>
    );
};

const Services = () => {
    return (
        <section>
            <h2>Our Services</h2>
            <p>We offer a variety of services to meet your needs</p>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className=''>
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
