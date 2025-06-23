'use client';

import Link from 'next/link';
import '@/assets/scss/app/home.scss';

export default function Home() {
    return (
        <div className='h-screen flex justify-center items-center bg-[#f6f8fa]'>
            <div className='max-w-4xl flex gap-x-8 w-full'>
                <div className='bg-white px-8 py-4 rounded-md w-1/2 shadow-md'>
                    <Link className='bg-[#00c0b8] text-white py-1 rounded-sm w-full inline-block text-center' href="/view/epub">Epub</Link>
                </div>

                <div className='bg-white px-8 py-4 rounded-md w-1/2 shadow-md'>
                    <Link className='bg-[#009cec] text-white py-1 rounded-sm w-full inline-block text-center' href="/view/pdf">Pdf</Link>
                </div>
            </div>
        </div>
    );
}
