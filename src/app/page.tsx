'use client';

import Link from 'next/link';
import '@/assets/scss/app/home.scss';
import { Avatar, Box, Container, Stack } from '@mui/material';
import Logo from '@/components/icons/Logo';

export default function Home() {
    return (
        <Container>
            <Stack direction="row"
                spacing={2} sx={{
                    marginTop: '24px',
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '16px', padding: '8px 0' }}>
                    <Logo />

                    <div>
                        <p className='text-4xl'>
                            Chooibook
                        </p>
                        <p className='text-sm text-center'>Books here, stories there</p>
                    </div>
                </Box>

                <div>
                    <Avatar sx={{ width: 24, height: 24 }}>C</Avatar>
                </div>
            </Stack>

            <div className='h-14 bg-[#3A3A3C] flex mt-4'>
                <Link className='text-white px-6 py-4 text-center' href="/view/epub">Epub</Link>

                <Link className='text-white px-6 py-4 text-center' href="/view/pdf">Pdf</Link>
            </div>
        </Container>
    );
}
