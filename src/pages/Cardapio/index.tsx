import style from './Cardapio.module.scss';
import {ReactComponent as Logo} from 'assets/logo.svg';
import Buscador from './Buscador';
import { useState } from 'react';
import Filtros from './Filtros';

export default function Cardapio() {

    const [busca, setBusca] = useState("");
    const [filtro, setFiltro] = useState<number | null>(null);

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
                    <div className={style.cardapio__filtros}>
                        <Filtros filtro={filtro} setFiltro={setFiltro}/>
                    </div>
                </section>
            </header>
        </main>
    </>
}