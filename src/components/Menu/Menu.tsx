'use client'
import React, { useEffect, useState } from 'react';
import menuService from '@/services/MenuService';
import styles from './Menu.module.scss';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const subscription = menuService.menuState$.subscribe(setIsOpen);
        return () => subscription.unsubscribe(); // Очистка при размонтировании
    }, []);

    const handleClose = () => {
        menuService.closeMenu(); // Закрыть меню
    };

    return (
        <div className={`${styles.menu} ${isOpen ? styles.open : styles.closed}`}>
            <button className={styles.closeButton} onClick={handleClose}>✖</button>
            <ul className={styles.menuList}>
                <li><a href="/">Главная</a></li>
                <li><a href="/about">О нас</a></li>
                <li><a href="/contact">Контакты</a></li>
            </ul>
        </div>
    );
};

export default Menu;
