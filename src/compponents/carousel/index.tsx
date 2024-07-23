/* eslint-disable @typescript-eslint/no-var-requires */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Photo1 from '../../assets/img/comment-photo/Ellipse 21.svg';
import Photo2 from '../../assets/img/comment-photo/Ellipse 21-1.svg';
import Photo3 from '../../assets/img/comment-photo/Ellipse 21-2.svg';


const styles = require('./carousel.module.css');

export const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        dotsClass: `slick-dots ${styles.dots}`,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    const items = [
        { id: 1, image: Photo1, name: 'Константинов Михаил Павлович', city: 'Санкт-Петербург', description: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы ' },
        { id: 2, image: Photo2, name: 'Иван Иванов', city: 'Санкт-Петербург', description: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.' },
        { id: 3, image: Photo3, name: 'Артем Корнилов', city: 'Самара', description: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.' },
    ];

    return (
        <Slider {...settings}>
            {items.map(item => (
                <div key={item.id} className={styles.slide}>
                    <div className={styles.item__image_block}>
                        <img src={item.image} alt={item.description}/>
                        <div>
                            <p className={styles.item_name}>{item.name}</p>
                            <p className={styles.item_city}>{item.city}</p>
                        </div>
                    </div>
                    <span className={styles.item_description}>{item.description}</span>
                </div>
            ))}
        </Slider>
    );
}