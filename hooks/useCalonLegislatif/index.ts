/* eslint-disable max-len */

'use client';

import { useInfiniteQuery } from '@tanstack/react-query';

import { DataStore, Predicates } from 'aws-amplify/datastore';

import { useState } from 'react';
import { CalonLegislatif } from '@/src/models';

const useCalonLegislatif = ({ searchName = '' }) => {
    const [currPage, setCurrPage] = useState(0);
    const result = useInfiniteQuery({
        queryKey: ['listOfCaleg', searchName],
        refetchOnWindowFocus: false,
        staleTime: Infinity,
        queryFn: async ({ pageParam }) => {
            console.log(pageParam);
            if (searchName !== '') {
                const listOfCaleg = await DataStore.query(CalonLegislatif, c => c.name.contains(searchName.toUpperCase()), {
                    page: pageParam,
                    limit: 10,
                });

                return listOfCaleg;
            }
            const listOfCaleg = await DataStore.query(CalonLegislatif, Predicates.ALL, {
                page: pageParam,
                limit: 10,
            });
            return listOfCaleg;
        },
        initialPageParam: currPage,
        getNextPageParam: () => currPage + 1,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });
    return { ...result, setCurrPage };
};

export default useCalonLegislatif;
