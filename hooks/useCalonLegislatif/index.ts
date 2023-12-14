/* eslint-disable max-len */

'use client';

import { useInfiniteQuery } from '@tanstack/react-query';

import { DataStore, Predicates } from 'aws-amplify/datastore';

import { useState } from 'react';
import { CalonLegislatif } from '@/src/models';

const useCalonLegislatif = ({ searchName = '', corrupted = false }) => {
  const [currPage, setCurrPage] = useState(0);
  const result = useInfiniteQuery({
    queryKey: ['listOfCaleg', searchName, corrupted],
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    queryFn: async ({ pageParam }) => {
      // corrupted and name
      if (corrupted && searchName !== '') {
        const listOfCaleg = await DataStore.query(
          CalonLegislatif,
          (c) =>
            c.and((cNested) => [
              cNested.ex_koruptor.eq(true),
              cNested.name.contains(searchName.toUpperCase()),
            ]),
          {
            page: pageParam,
            limit: 10,
          }
        );
        return listOfCaleg;
      }
      // filter corrupted only
      if (corrupted) {
        const listOfCaleg = await DataStore.query(CalonLegislatif, (c) => c.ex_koruptor.eq(true), {
          page: pageParam,
          limit: 10,
        });
        return listOfCaleg;
      }
      // search name only
      if (searchName !== '') {
        const listOfCaleg = await DataStore.query(
          CalonLegislatif,
          (c) => c.name.contains(searchName.toUpperCase()),
          {
            page: pageParam,
            limit: 10,
          }
        );
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
