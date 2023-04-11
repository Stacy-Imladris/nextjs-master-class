import Image from 'next/image';
import {NextPageWithLayout} from './_app';
import {PageWrapper} from '../components/PageWrapper/PageWrapper';
import {Header} from '../components/Header/Header';

const Home: NextPageWithLayout = () => (
    <PageWrapper>
        <Header/>
        <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
        />
    </PageWrapper>
);

export default Home;
