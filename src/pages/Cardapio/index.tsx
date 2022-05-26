import style from './Cardapio.module.scss';
import {ReactComponent as Logo} from 'assets/logo.svg';
import Buscador from './Buscador';
import { useState } from 'react';

export default function Cardapio() {

    const [busca, setBusca] = useState("");

    return <>
        <main>
            <nav className={style.menu}>
                <Logo/>
            </nav>
            <header className={style.header}>
                <div className={style.header__text}>
                    A casa do codigo e da massa
                </div>
                <section className={style.cardapio}>
                    <h3 className={style.cardapio__titulo}>Cardápio</h3>
                    <Buscador busca={busca} setBusca={setBusca} />
                </section>
            </header>
        </main>
    </>
}