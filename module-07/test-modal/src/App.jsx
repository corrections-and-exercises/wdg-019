import {useState} from 'react';
import myData from '../data.json';

function App() {
    // const myData = [
    //     {
    //         text: 'lorem ipsum',
    //         author: 'karl karlsen',
    //         id: 1,
    //         description: 'more lorem ipsum tralalal',
    //     },
    //     {
    //         text: 'lorem ipsum 2',
    //         author: 'johanna johannsen',
    //         id: 2,
    //         description: 'more lorem ipsum tralalal2',
    //     },
    // ];

    const [cardData, setCardData] = useState(myData);

    return (
        <>
            <h1>Test Modal</h1>

            {cardData.map((el) => (
                <Card key={el.id} el={el} />
            ))}
        </>
    );
}

function Card({el}) {
    return (
        <div>
            <p>{el.text}</p>
            <ModalButton id={el.id} />
            <Modal data={el} />
        </div>
    );
}

function Modal({data}) {
    return (
        <>
            <dialog id={`my_modal_${data.id}`} className='modal'>
                <div className='modal-box'>
                    <h3 className='font-bold text-lg'>{data.text}</h3>
                    <p className='py-4'>{data.description}</p>
                    <p>{data.author}</p>
                    <div className='modal-action'>
                        <form method='dialog'>
                            {/* if there is a button in form, it will close the modal */}
                            <button className='btn'>Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
}

function ModalButton({id}) {
    return (
        <button
            className='btn'
            onClick={() =>
                document.getElementById(`my_modal_${id}`).showModal()
            }
        >
            open modal
        </button>
    );
}

export default App;
