'use client';

import { Title } from '@mantine/core';
import { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    import('aws-amplify/analytics').then((x) => {
      x.record({
        name: 'homeVisit',
      });
    });
  }, []);
  return (
    <>
      <Title>Daftar Calon Legislatif Tetap</Title>
      <Title order={3}>
        cek kredibilitas calon legislatif pilihanmu, dan pastikan mereka bersih dari korupsi
      </Title>
      <Title order={5}>Terakhir Di Perbaharui: 20 Januari 2024</Title>
    </>
  );
};

export default Header;
