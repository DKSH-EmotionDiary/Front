import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Footer from '../components/footer';


const Home = () => {
  const router = useRouter();
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

  const diaryListRender = data && data.map((item, idx) => (
    <>
      <div className='cursor-pointer' onClick={() => {
        router.push(`/views/${idx}`)
      }}>
        <li className='grid grid-cols-10 gap-4 justify-center items-center px-4 py-2 rounded-lg hover:bg-gray-50'>
          <div className='flex justify-center items-center'>
            {(idx + 1)}
          </div>
          <div className='col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray'>
            <h3 className='text-gray-900 font-medium text-md'>{item?.date} 날짜의 일기</h3>
          </div>
        </li>
      </div>
    </>
  ))

  return (
    <>
      <Head>
        <title>오늘의 일기</title>
      </Head>
      <div className='max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='px-3 mt-10 sm:mt-28'>
          <h2 className='text-5xl tracking-tight leading-tight font-black text-gray-900 sm:leading-none'>
            오늘의 일기
          </h2>
          <p className='mt-3 text-sm text-gray-500 sm:mt-3 sm:text-lg sm:mx-auto lg:mx-0'>
            오늘은 무슨 일이 있으셨나요? 오늘 있었던 속상한 일을 일기장에 솔직하게 적고, 인공지능에게 위로를 받아보세요.
          </p>
        </div>
        <div className='relative'>
          <ul className='rounded-md shadow-md bg-white left-0 right-0 -bottom-18 mt-3 p-3'>
            <li className='text-gray-500 border-b border-gray border-solid py-3 px-3 mb-2'>
              약 {data?.length}개의 일기가 있습니다.
            </li>
            {diaryListRender}
          </ul>
          <div className='py-16 text-center'>
            <button
              type='button'
              className='button-action cursor-pointer mx-auto hover:bg-blue-600 w-64 px-5 py-5 text-sm leading-5 font-semibold text-white bg-blue-500 inline-flex justify-center active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
              onClick={() => { router.push('/write') }}>
              <span>새로운 일기 적기</span>
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
