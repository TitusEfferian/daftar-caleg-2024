'use client';

import { Card, Center, SimpleGrid, Text } from '@mantine/core';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useIntersection } from '@mantine/hooks';
import useListOfCaleg from '@/hooks/useListOfCaleg';

const ListOfCaleg = () => {
    const { isLoading, data, fetchNextPage } = useListOfCaleg();
    const containerRef = useRef<HTMLDivElement>(null);
    const { ref, entry } = useIntersection({
        root: containerRef.current,
        threshold: 0.9,
    });

    useEffect(() => {
        if (entry?.isIntersecting) {
            fetchNextPage();
        }
    }, [entry?.isIntersecting, fetchNextPage]);

    if (isLoading) {
        return <p>loading</p>;
    }

    return (
        <SimpleGrid cols={3}>
            {
                data?.pages.map(page => page.data.listCalonLegislatifs.items.map((x, y) => {
                    if (y === page.data.listCalonLegislatifs.items.length - 1) {
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
                ))
            }
            {/* <div ref={ref} /> */}
        </SimpleGrid>
    );
};

export default ListOfCaleg;
