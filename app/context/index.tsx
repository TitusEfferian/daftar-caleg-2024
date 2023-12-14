'use client';

import { useSearchParams } from 'next/navigation';
import { Dispatch, createContext, useContext, useReducer } from 'react';

const INITIAL_STATE = {
  searchName: '',
  toggleCorrupted: false,
};

type ACTIONTYPE =
  | { type: 'SEARCH_NAME'; data: string }
  | { type: 'TOGGLE_CORRUPTED'; data: string };

function reducer(state: typeof INITIAL_STATE, action: ACTIONTYPE): typeof INITIAL_STATE {
  switch (action.type) {
    case 'SEARCH_NAME': {
      return {
        ...state,
        searchName: action.data,
      };
    }
    case 'TOGGLE_CORRUPTED': {
      return {
        ...state,
        toggleCorrupted: !state.toggleCorrupted,
      };
    }
    default:
      return state;
  }
}

const FilterSortContext = createContext<typeof INITIAL_STATE>({
  searchName: '',
  toggleCorrupted: false,
});
const FilterSortDispatch = createContext<Dispatch<ACTIONTYPE>>(() => {});

// @ts-ignore
const FilterSortProvider = ({ children }) => {
  const searchParams = useSearchParams();
  const [state, dispatch] = useReducer(reducer, {
    ...INITIAL_STATE,
    searchName: searchParams.get('searchName') ?? '',
    toggleCorrupted: Boolean(searchParams.get('corrupted')) ?? false,
  });
  console.log(state);
  return (
    <FilterSortDispatch.Provider value={dispatch}>
      <FilterSortContext.Provider value={state}>{children}</FilterSortContext.Provider>
    </FilterSortDispatch.Provider>
  );
};

const useFilterSort = () => useContext(FilterSortContext);
const useFilterSortDispatch = () => useContext(FilterSortDispatch);

export { FilterSortProvider, useFilterSort, useFilterSortDispatch };
