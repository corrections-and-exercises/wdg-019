import Form from './Form.jsx';
import CounterContainer from './CounterContainer.jsx';
import Toggle from './Toggle.jsx';

// check the react dev tools to see how the state changes
function App() {
    return (
        <>
            <h1>State</h1>
            <CounterContainer />
            <Form />
            {/* notice how each toggle instance manages its own state */}
            <Toggle />
            <Toggle />
            <Toggle />
            <Toggle />
        </>
    );
}

export default App;
