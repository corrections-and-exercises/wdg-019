import Header from './Header.jsx';
import MainComponent from './MainComponent.jsx';
import Card from './Card.jsx';
import Footer from './Footer.jsx';
import {useUserContext} from './context/UserContext.jsx';
import Frame from './Frame.jsx';
function App() {
    const {user} = useUserContext();
    return (
        <>
            <h1>Context API</h1>
            <Header greeting='hello' />
            <MainComponent />
            <Footer />
            <Frame>
                <p>Hello </p>
            </Frame>
            <Frame>
                <Card />
            </Frame>
        </>
    );
}

export default App;
