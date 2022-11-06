import React from 'react';
import Header from '../header';

type Props = {
    children: any;
};

const NavbarLayout = ({ children }: Props) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default NavbarLayout;
