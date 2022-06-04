import style from './Header.module.scss';
import { Outlet } from 'react-router-dom';
import styleTema from 'styles/Tema.module.scss'; 

export default function Header() {
    return ( <>
        <header className={style.header}>
            <div className={style.header__text}>
                A casa do código e da massa
            </div>
         </header>
         <div className={styleTema.container}>
             <Outlet/>
         </div>
    </>
    );
}