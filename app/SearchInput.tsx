'use client';

import { Box, Button, Group, TextInput } from '@mantine/core';

import { useCallback, useState } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('');
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { push } = useRouter();

  const handleOnClick = useCallback(() => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('name', searchValue);

    if (newParams.get('name') === '') {
      push(`${pathname}?${newParams}`);
      return;
    }
    push(`${pathname}?${newParams}`);
  }, [pathname, push, searchParams, searchValue]);

  // const handleResetAll = useCallback(() => {
  //   push('/');
  // }, [push]);
  return (
    <Group>
      <Box style={{ flex: 2 }}>
        <TextInput
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleOnClick();
            }
          }}
          onChange={(e) => {
            const { value } = e.target;
            setSearchValue(value);
          }}
          placeholder="Cari nama calon"
        />
      </Box>
      <Button onClick={handleOnClick}>Cari</Button>
      {/* <Button onClick={handleResetAll} variant="outline">Reset</Button> */}
    </Group>
  );
};

export default SearchInput;
