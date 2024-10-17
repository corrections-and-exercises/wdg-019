import {useState} from 'react';
export default function Toggle() {
    const [isOn, setIsOn] = useState(false);

    return (
        <>
            <button onClick={() => setIsOn(!isOn)}>toggle state</button>
            {/* this is an example for conditionally rendering */}
            {/* notice how the ui changes when you toggle the state */}
            {isOn ? (
                <div>
                    <p>ON</p>
                </div>
            ) : (
                <div>
                    <p>OFF</p>
                </div>
            )}
        </>
    );
}
