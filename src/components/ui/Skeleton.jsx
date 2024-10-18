import React from 'react'
import { Skeleton } from 'antd'

const SkeletonLoader = () => {
  return (
    <div className=' '>
        <Skeleton className='h-[300px] content-center flex items-center' active />
        </div>
  )
}

export default SkeletonLoader