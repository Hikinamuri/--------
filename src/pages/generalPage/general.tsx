/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import { useEffect, useState } from 'react';

import navBarLogo from '../../assets/img/logo.svg';
import general from '../../assets/img/general.svg';
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
    const [isChecked, setIsChecked] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
    });
    const [errors, setErrors] = useState({
        name: '',
        phone: '',
        checkbox: '',
    });

    const toggleMobileMenu = () => {
        if (isMobileMenuOpen) {
            setIsMenuVisible(false);
            setIsMobileMenuOpen(false);
        } else {
            setIsMenuVisible(true);
            setIsMobileMenuOpen(true);
        }
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
        setIsMenuVisible(false);
    };

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        setErrors({
            ...errors,
            checkbox: '',
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        let valid = true;
        const num = formData.phone
            .replace(/[()\-+\s]/g, '');
        const newErrors = { name: '', phone: '', checkbox: '' };

        if (!formData.name) {
            newErrors.name = 'Имя обязательно';
            valid = false;
        }

        if (!((num.startsWith('8') || num.startsWith('7')) && 
            num.length === 11 &&
            (!isNaN(Number(num))))) {
            newErrors.phone = 'Некорректный номер телефона';
            valid = false;
        }

        if (!formData.phone) {
            newErrors.phone = 'Телефон обязателен';
            valid = false;
        }

        if (!isChecked) {
            newErrors.checkbox = 'Вы должны согласиться с условиями';
            valid = false;
        }

        setErrors(newErrors);

        if (!valid) {
            return;
        }

        try {
            const response = await fetch('/your-endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log(response)
            } else {
                console.log('Ошибка')
            }
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Ошибка при отправке формы.');
        }
    };

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

    // useEffect(() => {
        
    // }, [isMobileMenuOpen]);

    useEffect(() => {
        if (!isMobileMenuOpen) {
            const timer = setTimeout(() => setIsMenuVisible(false), 300);
            return () => clearTimeout(timer);
        }
    
        const handleScroll = () => {
            if (isMobileMenuOpen) {
                const originalScrollBehavior = document.documentElement.style.scrollBehavior;
                
                document.documentElement.style.scrollBehavior = 'auto';
                
                window.scrollTo({
                    top: 0,
                    behavior: 'auto'
                });
                
                document.documentElement.style.scrollBehavior = originalScrollBehavior;
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobileMenuOpen]);
    
    return (
        <>
            <div className={styles.general}>
                <img className={styles.general_img} src={general} alt="" />
                <div className={styles.general__navbar}>
                    <div className={styles.general__navbar_logo}>
                        <img src={navBarLogo} alt="" />
                        <h5>testLab</h5>
                    </div>
                    <div className={styles.general__navbar__buttons}>
                        <a href='#firstBlock'>Как это работает</a>
                        <a href='#thirdBlock'>3-й блок</a>
                        <a href='#fourthBlock'>Вопросы и ответы</a>
                        <a href='#sixthBlock'>Форма</a>
                    </div>
                    <div className={`${styles.hamburger_menu} ${isMobileMenuOpen ? styles.open : ''}`} onClick={toggleMobileMenu}>
                        <div className={`${styles.icon} ${styles.hamburger}`}>⚌</div>
                        <div className={`${styles.icon} ${styles.close}`}>⨯</div>
                    </div>
                    <div
                        className={`${styles.mobile_menu} ${isMenuVisible ? (isMobileMenuOpen ? styles.show : styles.hide) : styles.hide}`}
                    >
                        <div className={styles.mobile_menu__div}> 
                            <div className={styles.mobile_menu__logo}>
                                <img src={navBarLogo} alt="Logo" />
                                <h5>testLab</h5>
                            </div>
                            <div className={`${styles.hamburger_menu} ${isMobileMenuOpen ? styles.open : ''}`} onClick={toggleMobileMenu}>
                                <div className={`${styles.icon} ${styles.hamburger}`}>⚌</div>
                                <div className={`${styles.icon} ${styles.close}`}>⨯</div>
                            </div>
                        </div>
                        <div>
                            <a onClick={closeMobileMenu} href='#firstBlock'>Как это работает</a>
                            <p className={styles.arrow}></p>
                        </div>
                        <div>
                            <a onClick={closeMobileMenu} href='#thirdBlock'>3-й блок</a>
                            <p className={styles.arrow}></p>
                        </div>
                        <div>
                            <a onClick={closeMobileMenu}href='#fourthBlock'>Вопросы и ответы</a>
                            <p className={styles.arrow}></p>
                        </div>
                        <div>
                            <a onClick={closeMobileMenu}href='#sixthBlock'>Форма</a>
                            <p className={styles.arrow}></p>
                        </div>
                    </div>
                </div>
                <div className={styles.general__main_info}>
                    <div>
                        <h1>Говорят, никогда не поздно сменить профессию</h1>
                        <p>Сделай круто тестовое задание и у тебя получится</p>
                    </div>
                    <button>Проще простого</button>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.content__first_block} id='firstBlock'>
                    <h2>Как это работает</h2>
                    <div className={styles.content__first_block__images}>
                        <div className={styles.content__first_block__images_div}>
                            <img src={waiting} alt="waiting" />
                            <div>
                                <p>Прочитайте задание внимательно</p>
                                <span>думаю у тебя это не займет больше двух-трех минут</span>
                            </div>
                        </div>
                        <div className={styles.content__first_block__images_div}>
                            <img src={delivery} alt="delivery" />
                            <div>
                                <p>Изучи весь макет заранее</p>
                                <span>Подумай как это будет работать на разных разрешениях и при скролле</span>
                            </div>
                        </div>
                        <div className={styles.content__first_block__images_div}>
                            <img src={secure} alt="secure" />
                            <div>
                                <p>Сделай хорошо</p>
                                <span>Чтобы мы могли тебе доверить подобные задачи в будущем</span>
                            </div>
                        </div>
                        <div className={styles.content__first_block__images_div}>
                            <img src={money} alt="money" />
                            <div>
                                <p>Получи предложение</p>
                                <span>Ну тут все просто, не я придумал правила, но думаю так и будет)))</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.content__second_block}>
                    <div className={styles.content__second_block__info} id='thirdBlock'> 
                        <h1>Круто, ты дошел до третьего блока</h1>
                        <span>
                            63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.
                            <pre></pre>
                            Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.
                        </span>
                    </div>
                    <div>
                        <img src={man} alt="Мужчина" />
                    </div>
                </div>
                <div className={styles.content__third_block}>
                    <h1>Отзывы</h1>
                    <div className={styles.content__third_block__carousel}>
                        <Carousel />
                    </div>
                </div>
                <div className={styles.content__fourth_block} id='fourthBlock'>
                    <Faq />
                </div>
                <div className={styles.content__fifth_block}>
                    <div className={styles.content__fifth_block__infoItems}>
                        {items.map((item) => (
                            <InfoItem massItems={item} />
                        ))}
                    </div>
                </div>
                <div className={styles.content__sixth_block} id='sixthBlock'>
                    <h2>Отправь форму</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.content__sixth_block_inputs}>
                            <div>
                                <input 
                                    className={styles.content__sixth_block__text_input}
                                    placeholder='Имя'
                                    type='text'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                                {errors.name && <p className={styles.error}>{errors.name}</p>}
                            </div>
                            <div>
                                <input 
                                    className={styles.content__sixth_block__text_input}
                                    placeholder='Телефон'
                                    type='text'
                                    name='phone'
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                                {errors.phone && <p className={styles.error}>{errors.phone}</p>}
                            </div>
                        </div>
                        <div className={styles.content__sixth_block_inputs}>
                            <div className={styles.content__sixth_block__checkbox}>
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                />
                                <p>Согласен, отказываюсь</p>
                                {errors.checkbox && <p className={styles.error}>{errors.checkbox}</p>}
                            </div>
                            <button
                                type="submit"
                                className={styles.content__sixth_block__button}
                            >
                                <h5>Отправить</h5>
                            </button>
                        </div>
                    </form>
                </div>
                <div className={styles.content__seventh_block}>
                    <p>© 2021 Лаборатория интернет</p>
                </div>
            </div>
        </>
    );
};