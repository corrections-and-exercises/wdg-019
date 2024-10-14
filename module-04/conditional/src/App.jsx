import Student from './components/Student.jsx';
// You can work here or download the template
const studentData = {
    firstName: 'Testy',
    lastName: 'McTest',
    age: 42,
    course: 'Web Development',
    city: 'Berlin',
    picture: 'https://randomuser.me/api/portraits/men/1.jpg',
    gpa: 50,
    graduate: false,
};

const App = () => {
    return (
        <div>
            <Student student={studentData} />
        </div>
    );
};

export default App;
