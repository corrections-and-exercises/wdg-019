import Button from './components/Button.jsx';
import Card from './components/Card.jsx';
function App() {
    const myFriends = [
        {firstName: 'Karl'},
        {firstName: 'Hannah'},
        {firstName: 'John'},
        {firstName: 'Jane', age: 40},
    ];
    return (
        <>
            <h1>Salut</h1>
            <Button />
            <Button />
            <Button />
            <Button />
            {myFriends.map((friend, index) => (
                <Card key={friend.firstName} person={friend} />
            ))}
            {/* <Card firstPerson={myFriends[0]} /> */}
            {/* <Card firstPerson='Karl' age={40} location={{city: 'berlin'}} />
            <Card firstPerson='Hannah' />
            <Card firstPerson='John' /> */}
        </>
    );
}

export default App;
