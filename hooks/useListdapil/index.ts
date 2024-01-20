import { useQuery } from '@tanstack/react-query';
import { DataStore } from 'aws-amplify/datastore';
import { Dapil } from '@/src/models';

// const realDapil = () => new Promise((resolve) => {
//   const subs = DataStore.observeQuery(Dapil).subscribe(observe => {
//     if (observe.isSynced) {
//       subs.unsubscribe();
//       resolve(observe.items);
//     }
//   });
// });

const useListDapil = () => {
  const queryData = useQuery({
    queryKey: ['listDapil'],
    refetchInterval: 100,
    queryFn: async () => {
      const data = await DataStore.query(Dapil);
      return data;
    },
  });
  return queryData;
};

export default useListDapil;
