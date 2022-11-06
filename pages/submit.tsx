import React from 'react';
import NavbarLayout from '../components/layout/NavbarLayout';
import Layout from '../components/layout/Layout';
import SubmitContainer from '../components/submit/SubmitContainer';

type Props = {};

const submit = (props: Props) => {
    return (
        <NavbarLayout>
            <Layout>
                <SubmitContainer />
            </Layout>
        </NavbarLayout>
    );
};
export default submit;
