'use client';

import { Box, Button, Group, TextInput } from '@mantine/core';

import { useCallback, useState } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import useListOfCaleg from '@/hooks/useListOfCaleg';

const SearchInput = () => {
    const [searchValue, setSearchValue] = useState('');
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { push } = useRouter();

    useListOfCaleg({ searchName: searchParams.get('name') ?? '' });

    const handleOnClick = useCallback(() => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set('name', searchValue);

        if (newParams.get('name') === '') {
            push(pathname);
            return;
        }
        push(`${pathname}?${newParams}`);
    }, [pathname, push, searchParams, searchValue]);
    return (
        <Group>
            <Box style={{ flex: 2 }}>
                <TextInput
                  onChange={e => {
                        const { value } = e.target;
                        setSearchValue(value);
                    }}
                  placeholder="Cari nama calon"
                />
            </Box>
            <Button onClick={handleOnClick}>click</Button>
        </Group>
    );
};

export default SearchInput;
