export default function DesignSystem() {
  return (
    <main className='bg-[#f5f5f4] h-screen p-3 md:py-6 md:px-10 text-center flex flex-col gap-5'>
      <div
        className='bg-green text-white text-2xl font-bold
      p-4 rounded cursor-pointer hover:bg-green-secondary'
      >
        hello, hover here!
      </div>
      <div className='bg-[#ffff] p-4 rounded drop-shadow-md'>
        <p className='mb-5 text-lg font-semibold  text-black'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          qui totam amet temporibus error, ratione quisquam? Sed architecto enim
          quaerat.
        </p>
        <p
          className='text-[#1c1e1e]
        '
        >
          grey text Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Nostrum quae in fuga nesciunt magni pariatur aliquam rerum omnis
          aperiam saepe totam ullam, expedita impedit fugiat neque. Sint odit
          fuga quidem.
        </p>
      </div>
      <div className='text-grey uppercase flex justify-around '>
        <p>#</p>
        <p>Title</p>
        <p>Author</p>
        <p>Title</p>
        <p>Author</p>
        <p>Title</p>
        <p>Author</p>
      </div>
      <div className='flex gap-5'>
        <div className='h-15 w-15 bg-green'></div>
        <div className='h-15 w-15 bg-green-secondary'></div>
        <div className='h-15 w-15 bg-bg-main border'></div>
        <div className='h-15 w-15 bg-white'></div>
        <div className='h-15 w-15 bg-black'></div>
        <div className='h-15 w-15 bg-grey'></div>
        <div className='h-15 w-15 bg-grey-secondary'></div>
        <div className='h-15 w-15 bg-error'></div>
      </div>
    </main>
  );
}
