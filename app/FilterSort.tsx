'use client';

import { Button, Chip, Group, Modal, ScrollArea, Stack, Text } from '@mantine/core';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { Hub } from 'aws-amplify/utils';
import useListDapil from '@/hooks/useListdapil';
import { Dapil } from '@/src/models';

const FilterSort = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();
  const [tempStoreState, setTempStoreState] = useState<string[]>([]);
  const { data, refetch } = useListDapil();
  const [opened, setOpened] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Hub.listen('datastore', (capsule) => {
      // @ts-ignore
      if (
        capsule.channel === 'datastore' &&
        capsule.payload.event === 'modelSynced' &&
        capsule.payload.data.model === Dapil
      ) {
        setLoading(false);
        refetch();
      }
    });
  }, [refetch]);

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

  const handleClickApplyModal = useCallback(() => {
    const newParams = new URLSearchParams(searchParams);
    tempStoreState.forEach((item) => {
      newParams.append('dapil', item);
    });
    setOpened(false);
    push(`${pathname}?${newParams}`);
  }, [pathname, push, searchParams, tempStoreState]);

  const handleResetDapil = useCallback(() => {
    const newParams = new URLSearchParams(searchParams);
    if (newParams.getAll('dapil').length === 0) {
      setTempStoreState([]);
      setOpened(false);
    }
    newParams.delete('dapil');
    setOpened(false);
    push(`${pathname}?${newParams}`);
  }, [pathname, push, searchParams]);

  const handleResetAll = useCallback(() => {
    push('/');
  }, [push]);

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
      <Chip
        checked={searchParams.getAll('dapil').length > 0}
        onChange={() => {
          setOpened((prev) => !prev);
        }}
      >
        Pilih Dapil
      </Chip>
      <Modal
        title="Pilih Dapil"
        opened={opened}
        onClose={() => {
          setOpened(false);
        }}
      >
        {loading ? (
          <Text>Loading</Text>
        ) : (
          <Stack>
            <ScrollArea h={320}>
              <Group>
                {data?.map((x) => (
                  <Chip
                    checked={
                      searchParams.getAll('dapil').includes(x.nama_dapil) ||
                      tempStoreState.includes(x.nama_dapil)
                    }
                    onChange={() => {
                      setTempStoreState((prev) => [...prev, x.nama_dapil]);
                    }}
                  >
                    {x.nama_dapil}
                  </Chip>
                ))}
              </Group>
            </ScrollArea>
            <Group justify="flex-end">
              <Button variant="outline" onClick={handleResetDapil}>
                Reset
              </Button>
              <Button onClick={handleClickApplyModal}>Terapkan</Button>
            </Group>
          </Stack>
        )}
      </Modal>
      {searchParams.toString().length > 0 && (
        <Button color="red" onClick={handleResetAll} variant="outline">
          Reset Semuanya
        </Button>
      )}
    </Stack>
  );
};

export default FilterSort;
