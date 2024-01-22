'use client';

import { Anchor, Badge, Card, Center, Image, SimpleGrid, Stack, Text } from '@mantine/core';

import { useEffect, useRef, useState } from 'react';
import { useIntersection } from '@mantine/hooks';
import { useSearchParams } from 'next/navigation';

import Link from 'next/link';
import { Hub } from 'aws-amplify/utils';
import useCalonLegislatif from '@/hooks/useCalonLegislatif';
import { CalonLegislatif } from '@/src/models';

const ListOfCaleg = () => {
  const searchParams = useSearchParams();
  const [loadingDefault, setLoading] = useState(true);
  const { data, fetchNextPage, setCurrPage, refetch } = useCalonLegislatif({
    searchName: searchParams.get('name') ?? '',
    corrupted: Boolean(searchParams.get('corrupted')) ?? false,
    dapil: searchParams.getAll('dapil') ?? [],
  });

  useEffect(() => {
    Hub.listen('datastore', (capsule) => {
      // @ts-ignore
      if (
        capsule.channel === 'datastore' &&
        capsule.payload.event === 'modelSynced' &&
        capsule.payload.data.model === CalonLegislatif
      ) {
        setLoading(false);
        refetch();
      }
    });
  }, [refetch]);

  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 0.7,
  });

  useEffect(() => {
    if ((data?.pages[data.pages.length - 1].length || 0) < 10) {
      return;
    }
    if (entry?.isIntersecting) {
      setCurrPage((prev) => prev + 1);
      fetchNextPage();
    }
  }, [data?.pages, entry?.isIntersecting, fetchNextPage, setCurrPage]);

  if (loadingDefault) {
    return <Text>Sedang melakukan penarikan data...</Text>;
  }

  return (
    <SimpleGrid
      cols={{
        xs: 1,
        sm: 2,
        lg: 3,
      }}
    >
      {data?.pages.map((page) =>
        page.map((x, y) => {
          if (y === page.length - 1) {
            return (
              <Card ref={ref} shadow="sm" padding="xl" component="a">
                <Card.Section>
                  <Center>
                    <Image src={x.img_src} width={150} height={200} alt={x.name} loading="lazy" />
                  </Center>
                </Card.Section>
                <Stack>
                  <Text size="lg" mt="md">
                    {x.name}
                  </Text>
                  {x.ex_koruptor && (
                    <Stack>
                      <Badge color="red">MANTAN NAPI KORUPSI</Badge>
                      <Link target="_blank" href={x.ex_koruptor_source ?? ''}>
                        <Anchor>Sumber Informasi</Anchor>
                      </Link>
                    </Stack>
                  )}
                  <Text size="lg" mt="md">
                    {x.dapil}
                  </Text>

                  <Text mt="xs" c="dimmed" size="sm">
                    {x.party}
                  </Text>
                </Stack>
              </Card>
            );
          }
          return (
            <Card shadow="sm" padding="xl" component="a">
              <Card.Section>
                <Center>
                  <Image src={x.img_src} width={150} height={200} alt={x.name} loading="lazy" />
                </Center>
              </Card.Section>
              <Stack>
                <Text size="lg" mt="md">
                  {x.name}
                </Text>
                {x.ex_koruptor && (
                  <Stack>
                    <Badge color="red">MANTAN NAPI KORUPSI</Badge>
                    <Link target="_blank" href={x.ex_koruptor_source ?? ''}>
                      <Anchor>Sumber Informasi</Anchor>
                    </Link>
                  </Stack>
                )}
                <Text size="lg" mt="md">
                  {x.dapil}
                </Text>

                <Text mt="xs" c="dimmed" size="sm">
                  {x.party}
                </Text>
              </Stack>
            </Card>
          );
        })
      )}
    </SimpleGrid>
  );
};

export default ListOfCaleg;
