import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Footer from '../../components/footer';

const ReadPage = () => {
    const router = useRouter();

    const { id } = router.query;
    const [data, setData] = useState([])

    useEffect(() => {
        if (localStorage.getItem('diary') === null) {
            localStorage.setItem('diary', JSON.stringify({ data: [] }));
        } else {
            setData(JSON.parse(localStorage.getItem('diary')).data);
        }
    }, []);

    return (
        <>
            <Head>
                <title>오늘의 일기 - {id}번째 일기</title>
            </Head>
            <div className='max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8'>
                <div className='px-3 mt-10 sm:mt-28'>
                    <h2 className='text-5xl tracking-tight leading-tight font-black text-gray-900 sm:leading-none'>
                        {data[id]?.date} 일기
                    </h2>
                </div>
                <div className='mt-6 mb-6 sm:pt-6'>
                    <div className='px-3 mb-12 flex flex-col items-center'>
                        <div className='w-full bg-white p-2 pt-4 rounded shadow-lg'>
                            <div className='mt-3 p-3 w-full'>
                                <div className='border p-2 rounded w-full'>
                                    {data[id]?.diary}
                                </div>
                            </div>
                        </div>
                        <div className='mt-6'></div>
                        <div className='w-full bg-white p-2 pt-4 rounded shadow-lg'>
                            <div className='flex ml-3'>
                                <div className='mr-3'>
                                    <img src='/img/moong.png' className='h-8 w-8 rounded-full' />
                                </div>
                                <div>
                                    <h1 className='font-semibold'>뭉탱이</h1>
                                </div>
                            </div>
                            <div className='mt-3 p-3 w-full'>
                                <div className='border p-2 rounded w-full'>
                                    {data[id]?.bot}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ReadPage;