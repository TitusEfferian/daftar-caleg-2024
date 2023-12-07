'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { generateClient } from 'aws-amplify/api';

import { listCalonLegislatifs } from '@/src/graphql/queries';

const useListOfCaleg = ({ searchName = '' }) => {
    const result = useInfiniteQuery({
        queryKey: ['listOfCaleg', searchName],
        refetchOnWindowFocus: false,
        staleTime: Infinity,
        queryFn: async ({ pageParam }) => {
            const client = generateClient();
            const listOfCaleg = await client.graphql({
                query: listCalonLegislatifs,
                variables: {
                    limit: 10,
                    nextToken: pageParam || null,
                    filter: {
                        name: { contains: searchName },
                    },
                },
            });
            return listOfCaleg;
        },
        initialPageParam: '',
        getNextPageParam: (data) => data.data.listCalonLegislatifs.nextToken || '',
        refetchOnMount: false,
        refetchOnReconnect: false,
    });
    return result;
};

export default useListOfCaleg;
