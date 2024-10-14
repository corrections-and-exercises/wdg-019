import Grade from './Grade.jsx';
const Student = ({student}) => {
    return (
        <div className='student-card'>
            <img
                src={student.picture}
                alt={student.firstName}
                className='student-picture'
            />
            <h2>
                {student.firstName} {student.lastName}
            </h2>
            <p>
                <strong>Age:</strong> {student.age}
            </p>
            <p>
                <strong>Course: </strong> {student.course}
            </p>
            <p>
                <strong>City:</strong> {student.city}
            </p>
            <p>
                <strong>
                    <Grade gpa={student.gpa} />
                </strong>
            </p>
            <p>
                <strong>Status: </strong>
                {student.graduate ? 'Graduate' : 'Student'}
            </p>
        </div>
    );
};
export default Student;
