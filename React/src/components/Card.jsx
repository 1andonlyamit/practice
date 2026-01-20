function Card(props) {
    return <>
        <div className=' max-w-sm bg-white border border-gray-200 rounded-2xl'>
        <div className='flex justify-center'>
          <img className='w-80 h-70 mt-4' src='https://picsum.photos/seed/picsum/200/300' alt='nothing' />

        </div>
        <div>
          <h2 className='text-lg font-semibold text-red-300'>{props.goal}</h2>
          <p className='text-lg font-semibold text-green-300'>{props.tagline}</p>
          <button className='mt-5 m-2 text-white-400 size-3/12 bg-blue-600 rounded-xl'>{props.button}</button>
        </div>
      </div>
    </>
}

export default Card;