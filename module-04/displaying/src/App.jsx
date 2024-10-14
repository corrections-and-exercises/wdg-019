// You can work here or download the template
import Student from './components/Student.jsx';

const App = () => {
    const studentData = {
        firstName: 'Testy',
        lastName: 'McTest',
        age: 42,
        course: 'Web Development',
        city: 'Berlin',
        picture: 'https://randomuser.me/api/portraits/men/1.jpg',
    };
    return (
        <>
            <Student student={studentData} />
        </>
    );
};

export default App;
