import React from 'react'

const ErrorPage = () => {
  return (
      <div className='flex items-center m-5 justify-center flex-col h-90vh'>
            <span className='text-xxxxl font-bold'>Error 404</span>
            <span className='p-3 font-semibold text-xxl'>Web Page Not Found!</span>
            <span className='font-bold text-xl text-red-600'>Check the URL again.</span>
      </div>
      )
}

export default ErrorPage