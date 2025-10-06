import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar'

function MainLayout() {
    return (
        <>
            <NavBar />
            <main className="pt-20 px-4">
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout;