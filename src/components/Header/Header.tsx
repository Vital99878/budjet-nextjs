'use client'
import React, { useEffect, useState } from 'react';
import menuService from '@/services/MenuService';
import styles from './Header.module.scss';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const subscription = menuService.menuState$.subscribe(setIsMenuOpen);
        return () => subscription.unsubscribe(); // Очистка при размонтировании
    }, []);

    const handleToggleMenu = () => {
        menuService.toggleMenu();
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>Бюджет</div>
            <button
                className={isMenuOpen ? styles.menuButtonHide : styles.menuButton}
                onClick={handleToggleMenu}
            >
                ☰
            </button>
        </header>
    );
};

export default Header;
