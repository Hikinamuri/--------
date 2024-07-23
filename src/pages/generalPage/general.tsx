/* eslint-disable @typescript-eslint/no-var-requires */
import navBarLogo from '../../assets/img/logo.svg';
import waiting from '../../assets/img/howItsWork/waiting.svg';
import delivery from '../../assets/img/howItsWork/delivery-truck.svg';
import secure from '../../assets/img/howItsWork/secure.svg';
import money from '../../assets/img/howItsWork/money-bags.svg';



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
            <div className={styles.content}>
                <div className={styles.content__how_its_work}>
                    <h1>Как это работает</h1>
                    <div className={styles.content__how_its_work__images}>
                        <div>
                            <img src={waiting} alt="waiting" />
                            <p>Прочитайте задание внимательно</p>
                            <span>думаю у тебя это не займет больше двух-трех минут</span>
                        </div>
                        <div>
                            <img src={delivery} alt="delivery" />
                            <p>Изучи весь макет заранее</p>
                            <span>Подумай как это будет работать на разных разрешениях и при скролле</span>
                        </div>
                        <div>
                            <img src={secure} alt="secure" />
                            <p>Сделай хорошо</p>
                            <span>Чтобы мы могли тебе доверить подобные задачи в будущем</span>
                        </div>
                        <div>
                            <img src={money} alt="money" />
                            <p>Получи предложение</p>
                            <span>Ну тут все просто, не я придумал правила, но думаю так и будет)))</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};