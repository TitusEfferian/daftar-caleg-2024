import FilterSort from './FilterSort';
import ListOfCaleg from './ListOfCaleg';
import SearchInput from './SearchInput';
import { FilterSortProvider } from './context';

export default function HomePage() {
  return (
    <FilterSortProvider>
      <SearchInput />
      <FilterSort />
      <ListOfCaleg />
    </FilterSortProvider>
  );
}
