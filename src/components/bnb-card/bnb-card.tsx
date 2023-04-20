import classNames from 'classnames';
import styles from './bnb-card.module.scss';
import { useState } from 'react';

export interface BnbCardProps {
    className?: string;
    title: string;
    price: number;
    images: string[];
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-bnb-cards-and-templates
 */
export const BnbCard = ({ className, images, title, price }: BnbCardProps) => {
    const [currentIndex, setCurrenIndex] = useState(0);

    const prevImage = () => {
        setCurrenIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const nextImages = () => {
        setCurrenIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.card}>
                <div className={styles['imagen-contenedor']}>
                    <div className={styles['boton-contenedor']}>
                        <button onClick={prevImage}>Prev</button>
    
                        <button onClick={nextImages}>Next</button>
                    </div>
                    <img src={images[currentIndex]} alt="imagen de referencia" />
                </div>
                <div>
                    <h3>{title}</h3>
                    <p>${price} per night</p>
                </div>
            </div>
        </div>
    );
};
