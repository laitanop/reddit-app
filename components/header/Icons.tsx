import React from 'react';
import styles from '../../styles/icons.module.css';
import { IconItem } from '../common/IconItem';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PublicIcon from '@mui/icons-material/Public';
import VideocamIcon from '@mui/icons-material/Videocam';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddIcon from '@mui/icons-material/Add';
import CampaignIcon from '@mui/icons-material/Campaign';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Button from '@mui/material/Button';
type Props = {};

const Icons = (props: Props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.iconsLeft}>
                <IconItem icon={<AutoAwesomeIcon />} />
                <IconItem icon={<PublicIcon />} />
                <IconItem icon={<VideocamIcon />} />
            </div>
            <div className={styles.iconsRight}>
                <IconItem icon={<ChatIcon />} />
                <IconItem icon={<NotificationsIcon />} />
                <IconItem icon={<AddIcon />} />
                <IconItem icon={<CampaignIcon />} />

                <Button variant="contained" className={styles.freeBtn}>
                    <AttachMoneyIcon />
                    Free
                </Button>
            </div>
        </div>
    );
};
export default Icons;
