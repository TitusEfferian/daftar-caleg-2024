'use client';

import { Badge, Card, Center, SimpleGrid, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useIntersection } from '@mantine/hooks';
import { useSearchParams } from 'next/navigation';

import { useQueryClient } from '@tanstack/react-query';
import useCalonLegislatif from '@/hooks/useCalonLegislatif';

const ListOfCaleg = () => {
    const searchParams = useSearchParams();
    const { isLoading, data, fetchNextPage, setCurrPage } = useCalonLegislatif({ searchName: searchParams.get('name') ?? '' });
    const containerRef = useRef<HTMLDivElement>(null);
    const { ref, entry } = useIntersection({
        root: containerRef.current,
        threshold: 0.9,
    });
    // const client = useQueryClient();
    // console.log(client.getQueryData(?['listOfCaleg', 'rozali']));
    useEffect(() => {
        if ((data?.pages[data.pages.length - 1].length || 0) < 10) {
            return;
        }
        if (entry?.isIntersecting) {
            setCurrPage(prev => prev + 1);
            fetchNextPage();
        }
    }, [data?.pages, entry?.isIntersecting, fetchNextPage, setCurrPage]);

    if (isLoading) {
        return <p>loading</p>;
    }

    return (
        <SimpleGrid cols={3}>
            {
                data?.pages.map(page => page.map((x, y) => {
                    if (y === page.length - 1) {
                        return (
                            <Card
                              ref={ref}
                              shadow="sm"
                              padding="xl"
                              component="a"
                              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                              target="_blank"
                            >

                                <Card.Section>
                                    <Center>
                                        <Image
                                          src={x.img_src}
                                          width={150}
                                          height={200}
                                          alt="No way!"
                                        />
                                    </Center>
                                </Card.Section>

                                <Text size="lg" mt="md">
                                    {x.name}
                                </Text>
                                <Text size="lg" mt="md">
                                    {x.dapil}
                                </Text>

                                <Text mt="xs" c="dimmed" size="sm">
                                    {x.party}
                                </Text>
                            </Card>
                        );
                    }
                    return (
                        <Card
                          shadow="sm"
                          padding="xl"
                          component="a"
                          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                          target="_blank"
                        >
                            <Card.Section>
                                <Center>
                                    <Image
                                      src={x.img_src}
                                      width={150}
                                      height={200}
                                      alt="No way!"
                                    />
                                </Center>
                            </Card.Section>
                            <Stack>
                                <Text size="lg" mt="md">
                                    {x.name}
                                </Text>
                                <Badge color="red">MANTAN NAPI KORUPSI</Badge>
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
                ))
            }
            {/* <div ref={ref} /> */}
        </SimpleGrid>
    );
};

export default ListOfCaleg;
