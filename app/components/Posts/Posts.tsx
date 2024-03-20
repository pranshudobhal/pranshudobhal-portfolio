export const Posts = () => {
  const postData = [
    {
      title: 'What is Semantic HTML and why do you need it?',
      date: 'Jan 01, 2024',
    },
    {
      title: 'New Features in JavaScript',
      date: 'Mar 03, 2024',
    },
    {
      title: 'A complete guide to CSS Grid',
      date: 'Dec 20, 2023',
    },
  ]

  return (
    <div>
      <h2 className='mb-8 text-lg font-bold uppercase'>Recent Posts</h2>
      <div className='flex flex-col gap-6'>
        {postData.map((post, index) => (
          <Post key={index} data={post} />
        ))}
      </div>
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
