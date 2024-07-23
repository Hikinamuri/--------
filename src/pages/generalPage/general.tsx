/* eslint-disable @typescript-eslint/no-var-requires */
import navBarLogo from '../../assets/img/logo.svg';
import waiting from '../../assets/img/howItsWork/waiting.svg';
import delivery from '../../assets/img/howItsWork/delivery-truck.svg';
import secure from '../../assets/img/howItsWork/secure.svg';
import money from '../../assets/img/howItsWork/money-bags.svg';
import man from '../../assets/img/man.png';

import { Carousel } from '../../components/carousel/index';
import { Faq }  from '../../components/faq/index';
import { InfoItem } from '../../components/infoItem/index';

const styles = require('./style.module.css');


export const GeneralPage = () => {
    const items = [
        {
            ItemName: 'Опрошенных пользовались микрокредитами',
            ItemDescription: 'Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах',
        },
        {
            ItemName: 'Опрошенных пользовались микрокредитами',
            ItemDescription: 'Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафахНе могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах',
        },
        {
            ItemName: 'Опрошенных пользовались микрокредитами',
            ItemDescription: 'Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафахНе могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах',
        },
        {
            ItemName: 'Опрошенных пользовались микрокредитами',
            ItemDescription: 'Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах',
        },
    ];
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
                <div className={styles.content__first_block}>
                    <h1>Как это работает</h1>
                    <div className={styles.content__first_block__images}>
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
                <div className={styles.content__second_block}>
                    <div className={styles.content__second_block__info}> 
                        <h1>Круто, ты дошел до третьего блока</h1>
                        <span>
                            63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.
                            <pre></pre>
                            Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.
                        </span>
                    </div>
                    <img src={man} alt="Мужчина" />
                </div>
                <div className={styles.content__third_block}>
                    <h1>Отзывы</h1>
                    <div className={styles.content__third_block__carousel}>
                        <Carousel />
                    </div>
                </div>
                <div className={styles.content__fourth_block}>
                    <Faq />
                </div>
                <div className={styles.content__fifth_block}>
                    {items.map((item) => (
                        <InfoItem massItems={item} />
                    ))}
                </div>
            </div>
        </>
    );
};