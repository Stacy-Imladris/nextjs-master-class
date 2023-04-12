import {NextPage} from 'next';
import {PropsWithChildren, ReactElement} from 'react';
import {Layout} from 'components/Layout/Layout';

export const BaseLayout: NextPage<PropsWithChildren> = (props) => {
    const {children} = props

    return <Layout>{children}</Layout>
}

export const getLayout = (page: ReactElement) => {
    return <BaseLayout>{page}</BaseLayout>
}