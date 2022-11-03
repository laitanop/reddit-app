import React from 'react';
import styles from '../../styles/iconItem.module.css';
import IconButton from '@mui/material/IconButton';
type Props = {
    icon: any;
};
const style = {
    icon: 'h-9 w-9 cursor-pointer rounded stroke-[1.5px] p-1.5 text-gray-300 hover:bg-[#343536]',
};
export const IconItem = ({ icon }: Props) => {
    return (
        <IconButton size="large" className={styles.icon}>
            {icon}
        </IconButton>
    );
};
