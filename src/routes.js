import Header from 'components/Header';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Menu from './components/Menu';

export default function AppRouter() {
    return (
        <main>
            <Router>
                <Menu/>
                <Routes>
                    <Route path='/' element={<Header/>}>
                        <Route index element={<Inicio/>}/>
                        <Route path='cardapio' element={<Cardapio/>}/>
                    </Route>
                </Routes>
            </Router>
        </main>
    );
}