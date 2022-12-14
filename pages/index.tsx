import type { NextPage } from 'next';
import Feed from '../components/feed/feed';
import NavbarLayout from '../components/layout/NavbarLayout';
import Layout from '../components/layout/Layout';
const Home: NextPage = () => {
    return (
        <NavbarLayout>
            <Layout>
                <Feed />
            </Layout>
        </NavbarLayout>
    );
};

export default Home;
