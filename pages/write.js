import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Footer from '../components/footer';

const WritePage = () => {

    const router = useRouter();

    const [diary, setDiary] = useState('');
    const [result, setResult] = useState('');
    const [load, setLoad] = useState(false);
    const [data, setData] = useState([])

    useEffect(() => {
        if (localStorage.getItem('diary') === null) {
            localStorage.setItem('diary', JSON.stringify({ data: [] }));
        } else {
            setData(JSON.parse(localStorage.getItem('diary')).data);
        }
    }, []);

    useEffect(() => {
        let appData = JSON.parse(localStorage.getItem('diary'));
        if (appData !== null) {
            let updatedData = (appData = { ...appData, data });
            localStorage.setItem('diary', JSON.stringify(updatedData));
        }
    }, [data]);

    const getToday = () => {
        let date = new Date();
        let year = date.getFullYear();
        let month = ('0' + (1 + date.getMonth())).slice(-2);
        let day = ('0' + date.getDate()).slice(-2);

        return year + '년 ' + month + '월 ' + day + '일';
    }

    const fetchAI = async () => {
        setLoad(true);
        try {
            const response = await axios.post('http://localhost:22552/api/answer', { query: diary });
            setResult(response.data)
        } catch (err) {
            setResult('서버와의 연결이 끊겼습니다.')
            console.log(err)
        }
        setLoad(false);
    }

    const saveDiary = () => {
        let appData = JSON.parse(localStorage.getItem('diary'));
        let diaryArray = appData.data;
        diaryArray = [
            ...diaryArray,
            { diary, bot: result, id: data.length, date: getToday() },
        ];
        setData(diaryArray)
        router.push('/')
    }

    return (
        <>
            <Head>
                <title>오늘의 일기 - 일기 작성</title>
            </Head>
            <div className='max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8'>
                <div className='px-3 mt-10 sm:mt-28'>
                    <h2 className='text-5xl tracking-tight leading-tight font-black text-gray-900 sm:leading-none'>
                        새로운 일기 적기
                    </h2>
                    <p className='mt-3 text-sm text-gray-500 sm:mt-3 sm:text-lg sm:mx-auto lg:mx-0'>
                        오늘 있었던 일기를 적고 뭉탱이한테 위로받기 버튼을 눌러서 위로받은 후, 저장하기를 누르세요.
                        <br />
                        외부 DB를 사용하지 않고, 웹 브라우저에 저장됩니다.
                    </p>
                </div>
                <div className='mt-6 mb-6 sm:pt-6'>
                    <div className='px-3 mb-12 flex flex-col items-center'>
                        <div className='w-full mx-auto flex items-center'>
                            <textarea
                                className='w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none'
                                rows='4'
                                value={diary}
                                onChange={(e) => {
                                    setDiary(e.target.value)
                                }}>
                            </textarea>
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
                                    {load ? '뭉탱이가 일기를 읽고 있어요... ' : result}
                                </div>
                            </div>
                        </div>
                        <div className='sm:flex gap-5 py-16 text-center'>
                            <button
                                type='button'
                                className='button-action cursor-pointer mx-auto hover:bg-blue-600 w-64 px-5 py-5 text-sm leading-5 font-semibold text-white bg-blue-500 inline-flex justify-center active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
                                onClick={() => { fetchAI() }}>
                                <span>뭉탱이한테 위로 받기</span>
                            </button>
                            <button
                                type='button'
                                className='button-action cursor-pointer mx-auto hover:bg-red-600 w-64 px-5 py-5 text-sm leading-5 font-semibold text-white bg-red-500 inline-flex justify-center active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out'
                                onClick={() => { saveDiary() }}>
                                <span>저장하기</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default WritePage;