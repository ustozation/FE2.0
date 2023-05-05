export const Commerce = () => {
  return (
    <div className='p-7 grow bg-gray-600'>
      <h1 className='text-2xl text-white mb-10 font-bold '>Commerce</h1>
      <div className='flex flex-wrap items-center justify-start'>
        <div className='relative flex-shrink-0 max-w-xs mx-2 mb-6 overflow-hidden bg-yellow-500 rounded-lg shadow-lg'>
          <svg
            className='absolute bottom-0 left-0 mb-8'
            viewBox='0 0 375 283'
            fill='none'
          >
            <rect
              x='159.52'
              y='175'
              width='152'
              height='152'
              rx='8'
              transform='rotate(-45 159.52 175)'
              fill='#f3c06b'
            ></rect>
            <rect
              y='107.48'
              width='152'
              height='152'
              rx='8'
              transform='rotate(-45 0 107.48)'
              fill='#f3c06b'
            ></rect>
          </svg>
          <div className='relative flex items-center justify-center px-10 pt-10'>
            <div className='absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24'></div>
            <picture>
              <source
                srcSet='https://www.tailwind-kit.com/images/object/5.webp'
                type='image/webp'
              />
              <source srcSet='https://www.tailwind-kit.com/images/object/5.webp' />
              <img
                className='relative w-40'
                src='https://www.tailwind-kit.com/images/object/5.webp'
                alt='shopping item'
              />
            </picture>
          </div>
          <div className='relative px-6 pb-6 mt-6 text-white'>
            <span className='block -mb-1 opacity-75'>Indoor</span>
            <div className='flex justify-between'>
              <span className='block text-xl font-semibold'>Peace Lily</span>
              <span className='flex items-center px-3 py-2 text-xs font-bold leading-none text-yellow-500 bg-white rounded-full'>
                $36.00
              </span>
            </div>
          </div>
        </div>
        <div className='relative flex-shrink-0 max-w-xs mx-2 mb-6 overflow-hidden bg-blue-500 rounded-lg shadow-lg sm:mb-0'>
          <svg
            className='absolute bottom-0 left-0 mb-8'
            viewBox='0 0 375 283'
            fill='none'
          >
            <rect
              x='159.52'
              y='175'
              width='152'
              height='152'
              rx='8'
              transform='rotate(-45 159.52 175)'
              fill='#6da3fb'
            ></rect>
            <rect
              y='107.48'
              width='152'
              height='152'
              rx='8'
              transform='rotate(-45 0 107.48)'
              fill='#6da3fb'
            ></rect>
          </svg>
          <div className='relative flex items-center justify-center px-10 pt-10'>
            <div className='absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24'></div>
            <img
              className='relative w-40'
              src='https://www.tailwind-kit.com/images/object/6.png'
              alt='shopping'
            />
          </div>
          <div className='relative px-6 pb-6 mt-6 text-white'>
            <span className='block -mb-1 opacity-75'>Outdoor</span>
            <div className='flex justify-between'>
              <span className='block text-xl font-semibold'>Monstera</span>
              <span className='flex items-center px-3 py-2 text-xs font-bold leading-none text-blue-500 bg-white rounded-full'>
                $45.00
              </span>
            </div>
          </div>
        </div>
        <div className='relative flex-shrink-0 max-w-xs mx-2 -mb-6 overflow-hidden bg-purple-500 rounded-lg shadow-lg'>
          <svg
            className='absolute bottom-0 left-0 mb-8'
            viewBox='0 0 375 283'
            fill='none'
          >
            <rect
              x='159.52'
              y='175'
              width='152'
              height='152'
              rx='8'
              transform='rotate(-45 159.52 175)'
              fill='#a17cf3'
            ></rect>
            <rect
              y='107.48'
              width='152'
              height='152'
              rx='8'
              transform='rotate(-45 0 107.48)'
              fill='#a17cf3'
            ></rect>
          </svg>
          <div className='relative flex items-center justify-center px-10 pt-10'>
            <div className='absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24'></div>
            <img
              className='relative w-40'
              src='https://www.tailwind-kit.com/images/object/7.png'
              alt='shopping'
            />
          </div>
          <div className='relative px-6 pb-6 mt-6 text-white'>
            <span className='block -mb-1 opacity-75'>Outdoor</span>
            <div className='flex justify-between'>
              <span className='block text-xl font-semibold'>Oak Tree</span>
              <span className='flex items-center px-3 py-2 text-xs font-bold leading-none text-purple-500 bg-white rounded-full'>
                $68.50
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
