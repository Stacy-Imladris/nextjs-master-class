import type {AppProps} from 'next/app';
import {ReactElement, ReactNode, useState} from 'react';
import {NextPage} from 'next';
import {QueryClient} from '@tanstack/query-core';
import {Hydrate, QueryClientProvider} from '@tanstack/react-query';
import {useLoader} from 'assets/hooks/useLoader';
import 'styles/nprogress.css'

export type NextPageWithLayout<P = {}> = NextPage<P> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function App({Component, pageProps}: AppPropsWithLayout) {
    const [queryClient] = useState(() => new QueryClient)

    useLoader()

    const getLayout = Component.getLayout ?? ((page) => page);

    return getLayout(
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydrateState}>
                <Component {...pageProps} />
            </Hydrate>
        </QueryClientProvider>
    );
}
