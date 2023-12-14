'use client';

import { Chip, Group, Stack } from '@mantine/core';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const FilterSort = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();
  const handleOnClickKoruptor = useCallback(() => {
    const newParams = new URLSearchParams(searchParams);
    if (newParams.get('corrupted') === 'true') {
      newParams.delete('corrupted');
      push(`${pathname}?${newParams}`);
      return;
    }
    newParams.set('corrupted', 'true');
    push(`${pathname}?${newParams}`);
  }, [pathname, push, searchParams]);

  const handleClickSemua = useCallback(() => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('corrupted');
    push(`${pathname}?${newParams}`);
  }, [pathname, push, searchParams]);

  const isCorruptedChecked = Boolean(searchParams.get('corrupted')) ?? false;

  return (
    <Stack>
      <Group>
      <Chip checked={!isCorruptedChecked} onChange={handleClickSemua}>
          Semua
      </Chip>
        <Chip checked={isCorruptedChecked} onChange={handleOnClickKoruptor}>
          Mantan Koruptor
        </Chip>
      </Group>
    </Stack>
  );
};

export default FilterSort;
