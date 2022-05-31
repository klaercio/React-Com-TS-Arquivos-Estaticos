import style from './Header.module.scss';
import { Outlet } from 'react-router-dom';

export default function Header() {
    return ( <>
        <header className={style.header}>
            <div className={style.header__text}>
                A casa do codigo e da massa
            </div>
         </header>
         <div>
             <Outlet/>
         </div>
    </>
    );
}