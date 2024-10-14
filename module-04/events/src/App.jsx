const App = () => {
    function handleClick(content) {
        console.log(content);
    }

    function handleChange(event) {
        console.log(event.target.value);
    }
    return (
        <div>
            <input onChange={handleChange} type='text' name='' id='' />
            <button onClick={() => handleClick('world')}>Click</button>
        </div>
    );
};

export default App;
