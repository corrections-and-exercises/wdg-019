import {useState, useEffect} from 'react';
const Candle = () => {
    const [height, setHeight] = useState(15);

    useEffect(() => {
        const interval = setInterval(() => {
            setHeight((prev) => {
                if (prev === 10) return 85;
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className='exercise'>
            <div className='candleContainer' style={{height: `${height}%`}}>
                <div className='candle'>
                    <div className='flame'>
                        <div className='shadows' />
                        <div className='top' />
                        <div className='middle' />
                        <div className='bottom' />
                    </div>
                    <div className='wick' />
                    <div className='wax' />
                </div>
            </div>
        </div>
    );
};

const App = () => {
    return <Candle />;
};

export default App;
