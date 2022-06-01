import {ReactComponent as Logo} from 'assets/logo.svg';
import style from './Menu.module.scss';
import {Link} from 'react-router-dom';

export default function Menu() {

    const rotas = [{
        label: 'Início',
        to : '/'
    }, {
        label : 'Cardápio',
        to : '/cardapio'
    }, {
        label : 'sobre',
        to : '/sobre'
    }];

    return (
        <nav className={style.menu}>
           <Logo/>
           <ul className={style.menu__list}>
               {rotas.map((rota,index) => (
                   <li key={index} className={style.menu__link}>
                       <Link to={rota.to}>
                           {rota.label}
                       </Link>
                   </li>
               ))}
           </ul>
        </nav>
    )
}