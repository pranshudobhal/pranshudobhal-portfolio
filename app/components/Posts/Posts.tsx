import { PostData } from '@/app/types'
import { FC } from 'react'

type PostsProps = {
  data: PostData[]
}

export const Posts: FC<PostsProps> = ({ data }) => {
  return (
    <div className='flex flex-col gap-6'>
      {data.map((post, index) => (
        <Post key={index} data={post} />
      ))}
    </div>
  )
}

const Post = ({ data }: { data: { title: string; date: string } }) => {
  const { title, date } = data

  return (
    <div>
      <h3 className='font-lato text-2xl'>{title}</h3>
      <p className='mt-2 font-mono text-sm text-gray'>{date}</p>
    </div>
  )
}
