import {
    createBrowserRouter,
    createRoutesFromElements,
    Link,
    Navigate,
    Outlet,
    Route,
    RouterProvider,
    useOutletContext,
} from 'react-router-dom';
import {useState} from 'react';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
            <Route index element={<div>Home</div>} />
            <Route path='login' element={<div>Login form here...</div>} />
            <Route path='protected' element={<ProtectedLayout />}>
                <Route index element={<div>Protected section</div>} />
            </Route>
        </Route>
    )
);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

function MainLayout() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const data = {
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'system',
                content: 'You are a helpful assistant.',
            },
            {
                role: 'user',
                content: 'Who won the world series in 2020?',
            },
            {
                role: 'assistant',
                content:
                    'The Los Angeles Dodgers won the World Series in 2020.',
            },
            {
                role: 'user',
                content: 'Where was it played?',
            },
        ],
    };
    async function sendToOpenAi() {
        console.log('sending');
        try {
            const res = await fetch(
                'http://localhost:5050/api/v1/chat/completions',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        "mode": "development",
                        "provider": "open-ai"
                    },
                    method: 'POST',
                    body: JSON.stringify(data),
                }
            );
            if (!res.ok) throw new Error('Request failed');
            const answer = await res.json();
            console.log(answer);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>

                {isAuthenticated && (
                    <li>
                        <Link to='/protected'>Dashboard</Link>
                    </li>
                )}
            </ul>
            <div>
                <button onClick={sendToOpenAi}>Send</button>
            </div>
            <div>
                <Outlet context={{isAuthenticated}} />
            </div>
        </>
    );
}

function ProtectedLayout() {
    const {isAuthenticated} = useOutletContext();
    return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
}

export default App;
