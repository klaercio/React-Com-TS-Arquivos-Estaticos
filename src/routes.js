import Footer from 'components/Footer';
import Header from 'components/Header';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import NotFound from 'pages/NotFound/Index';
import Sobre from 'pages/Sobre/Index';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Menu from './components/Menu';
import Prato from 'pages/Prato';

export default function AppRouter() {
    return (
        <main className='container'>
            <Router>
                <Menu/>
                <Routes>
                    <Route path='/' element={<Header/>}>
                        <Route index element={<Inicio/>}/>
                        <Route path='cardapio' element={<Cardapio/>}/>
                        <Route path='sobre' element={<Sobre/>}></Route>
                    </Route>
                    <Route path='*' element={<NotFound/>}/>
                    <Route path='/prato/:id' element={<Prato/>}/>
                </Routes>
                <Footer/>
            </Router>
        </main>
    );
}