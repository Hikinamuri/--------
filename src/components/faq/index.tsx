/* eslint-disable @typescript-eslint/no-var-requires */
import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
const styles = require('./style.module.css');

export const Faq = () => {
    const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
    const contentRefs = useRef<HTMLDivElement[]>([]);

    const toggleQuestion = (index: any) => {
        setSelectedQuestion(selectedQuestion === index ? null : index);
    };

    const faqData = [
        {
            question: 'Подтверждено: сознание наших соотечественников не замутнено пропагандой?',
            answer: 'Это пример ответа на вопрос номер один.',
        },
        {
            question: 'Прототип нового сервиса - это как трубный призыв?',
            answer: 'Это пример ответа на вопрос номер два.',
        },
        {
            question: 'Частокол на границе продолжает удивлять?',
            answer: 'В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.',
        },
        {
            question: 'Очевидцы сообщают, что слышали грохот грома градущих изменений?',
            answer: 'Это пример ответа на вопрос номер четыре.',
        },
        {
            question: 'И по сей день в центральных регионах звучит перекатами печальный плач оппозиции?',
            answer: 'Это пример ответа на вопрос номер пять.',
        },
        {
            question: 'Нынче никто не может себе позволить инициировать треск разлетающихся скреп?',
            answer: 'Это пример ответа на вопрос номер шесть.',
        },
        {
            question: 'Высококачественный прототип будущего проекта обнадёживает?',
            answer: 'Это пример ответа на вопрос номер чемь.',
        },
    ];


    useEffect(() => {
        contentRefs.current.forEach((ref, index) => {
            if (ref) {
                ref.style.maxHeight = selectedQuestion === index ? `${ref.scrollHeight}px` : '0';
            }
        });
    }, [selectedQuestion]);

    return (
        <div className={styles.content__fourth_block}>
            <h2>Вопросы и ответы</h2>
            <div className={styles.faqContainer}>
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className={styles.faqItem}
                        onClick={() => toggleQuestion(index)}
                    >
                        <div className={styles.question}>
                            {item.question}
                            <div className={classNames({ [styles.rotate]: selectedQuestion === index })}>
                                <p>+</p>
                            </div>
                        </div>
                        <div
                            ref={(el) => (contentRefs.current[index] = el!)}
                            className={classNames(styles.answer, { [styles.show]: selectedQuestion === index })}
                        >
                            <div className={classNames(styles['answer-content'], { [styles.show]: selectedQuestion === index })}>
                                {item.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};  