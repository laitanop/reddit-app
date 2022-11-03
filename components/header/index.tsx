import Image from 'next/image';
import { useEffect, useState } from 'react';
import Icons from './Icons';
import Logo from './Logo';
import SearchBar from './SearchBar';
import styles from '../../styles/header.module.css';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
type Props = {};

const Header = (props: Props) => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.leftHeader}>
                    <Logo />
                    <SearchBar />
                </div>
                <div className={styles.rightHeader}>
                    <Icons />

                    <Button>
                        <Avatar src="/broken-image.jpg" />
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
