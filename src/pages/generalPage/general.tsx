/* eslint-disable @typescript-eslint/no-var-requires */
import navBarLogo from '../../assets/img/logo.svg';

const styles = require('./style.module.css');


export const GeneralPage = () => {
    return (
        <>
            <div className={styles.general}>
                <div className={styles.general__navbar}>
                    <div className={styles.general__navbar_logo}>
                        <img src={navBarLogo} alt="" />
                        <p>testLab</p>
                    </div>
                    <div className={styles.general__navbar__buttons}>
                        <p>Как это работает</p>
                        <p>3-й блок</p>
                        <p>Вопросы и ответы</p>
                        <p>Форма</p>
                    </div>
                </div>
                <div className={styles.general__main_info}>
                    <div>
                        <h1>Говорят, никогда не поздно сменить профессию</h1>
                        <p>Сделай круто и у тебя получится</p>
                    </div>
                    <button>Проще простого</button>
                </div>
            </div>
            <div className={styles.mainInfo}>

            </div>
        </>
    );
};