import {useState, useEffect} from 'react';
export default function Timer() {
    useEffect(() => {
        const interValId = setInterval(() => {
            console.log('timer running');
        }, 1000);

        return () => clearInterval(interValId);
    }, []);

    return <p>Timer</p>;
}
