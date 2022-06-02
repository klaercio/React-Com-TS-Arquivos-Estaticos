import style from './NotFound.module.scss';
import {ReactComponent as NotFoundImage} from 'assets/not_found.svg';
import classNames from 'classnames';
import styleTema from 'styles/Tema.module.scss';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {

    const navigate = useNavigate();

    return (
        <div className={classNames({
            [style.container] : true,
            [styleTema.container] : true,
        })}>
            <div className={style.voltar}>
                <button onClick={()=> navigate(-1)}>
                    {'< Voltar'}
                </button>
            </div>
            <NotFoundImage/>
        </div>
    );
}