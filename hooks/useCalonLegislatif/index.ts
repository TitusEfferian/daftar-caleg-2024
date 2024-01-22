/* eslint-disable max-len */

'use client';

import { useInfiniteQuery } from '@tanstack/react-query';

import { DataStore, Predicates } from 'aws-amplify/datastore';

import { useState } from 'react';
import { CalonLegislatif } from '@/src/models';

interface UseCalonLegislatifParams {
  searchName?: string;
  corrupted?: boolean;
  dapil?: string[];
}
// const subscription = () => new Promise((resolve) => {
//     const subscription = DataStore.observeQuery(
//       CalonLegislatif, Predicates.ALL,{}
//     ).subscribe(snapshot => {
//       const { items, isSynced } = snapshot;
//       console.log(`[Snapshot] item count: ${items.length}, isSynced: ${isSynced}`);
//     });
//   });

const useCalonLegislatif = ({
  searchName = '',
  corrupted = false,
  dapil = [],
}: UseCalonLegislatifParams) => {
  const [currPage, setCurrPage] = useState(0);
  const result = useInfiniteQuery({
    queryKey: ['listOfCaleg', searchName, corrupted, dapil],
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    queryFn: async ({ pageParam }) => {
      // corrupted and name
      if (corrupted && searchName !== '' && dapil.length !== 0) {
        const listOfCaleg = await DataStore.query(
          CalonLegislatif,
          (c) =>
            c.and((cNested) => [
              cNested.ex_koruptor.eq(true),
              cNested.name.contains(searchName.toUpperCase()),
              cNested.or((cNestedOr) => dapil.map((x) => cNestedOr.dapil.eq(x))),
            ]),
          {
            page: pageParam,
            limit: 10,
          }
        );
        return listOfCaleg;
      }
      if (searchName !== '' && dapil.length > 0) {
        const listOfCaleg = await DataStore.query(
          CalonLegislatif,
          (c) =>
            c.and((cNested) => [
              cNested.name.contains(searchName.toUpperCase()),
              cNested.or((cNestedOr) => dapil.map((x) => cNestedOr.dapil.eq(x))),
            ]),
          {
            page: pageParam,
            limit: 10,
          }
        );
        return listOfCaleg;
      }
      if (corrupted && dapil.length > 0) {
        const listOfCaleg = await DataStore.query(
          CalonLegislatif,
          (c) =>
            c.and((cNested) => [
              cNested.ex_koruptor.eq(true),
              cNested.or((cNestedOr) => dapil.map((x) => cNestedOr.dapil.eq(x))),
            ]),
          {
            page: pageParam,
            limit: 10,
          }
        );
        return listOfCaleg;
      }
      if (dapil.length > 0) {
        const listOfCaleg = await DataStore.query(
          CalonLegislatif,
          (c) => c.or((cNested) => dapil.map((x) => cNested.dapil.eq(x))),
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
  });
  return { ...result, setCurrPage };
};

export default useCalonLegislatif;
