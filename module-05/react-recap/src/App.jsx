import Posts from './components/Posts.jsx';
import Todos from './components/Todos.jsx';
import SlideIn from './components/SlideIn.jsx';
function App() {
    const text = 'lorem ipsum';
    return (
        <>
            <h1>Recap</h1>
            <SlideIn>Salut</SlideIn>

            <SlideIn duration={5}>
                <Text text={text} />
            </SlideIn>
            {/* <Posts /> */}
            {/* <Todos /> */}
        </>
    );
}

function Text({text}) {
    return <p>{text}</p>;
}

export default App;
