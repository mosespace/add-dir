import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className='py-12 sm:py-24'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mb-8 flex justify-center'>
          <p className='relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 dark:text-white ring-1 ring-inset dark:ring-primary/10 ring-gray-900/10 hover:ring-gray-900/20'>
            <span className='hidden md:inline'>Cachet is back.</span>
            <Link
              href='#'
              target='_blank'
              className='font-semibold text-primary'
            >
              <span className='absolute inset-0'></span> Read the update{" "}
              <span>→</span>
            </Link>
          </p>
        </div>
        <div className='mx-auto max-w-2xl text-center'>
          <h1 className='text-5xl font-bold tracking-tight dark:text-primary text-gray-900 sm:text-6xl'>
            Ship your startup in days,&nbsp;
            <span className='before:block before:absolute -z-10 before:-inset-1 before:-skew-y-3 before:bg-primary dark:before:bg-[#FAD8C7] relative inline-block'>
              <span className='relative text-white dark:text-background'>
                not weeks
              </span>
            </span>
          </h1>
          <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-white'>
            Introducing our cutting-edge Nextjs boilerplate with all you need to
            build your SaaS, AI tool, or any other web app and make your first $
            online fast.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <Link
              href='#'
              className='rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-primary'
            >
              Check out the demo
            </Link>
            <Link
              href='#'
              className='text-sm font-semibold leading-6 dark:text-white text-gray-900'
            >
              Learn more
              <span>→</span>
            </Link>
          </div>
        </div>
        <div className='mt-10 flow-root sm:mt-20'>
          <div className='-m-2 rounded-xl bg-primary/5 p-2 ring-1 ring-inset ring-primary/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
            {/* <!-- Photo by '@tvick' on Unsplash --> */}
            <Image
              src='https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxiYWNrdXB8ZW58MHwwfHx8MTY5MjAwMjg2M3ww&ixlib=rb-4.0.3&q=80&w=1080'
              width={2432}
              height={1442}
              alt='Site Name |'
              loading='lazy'
              className='rounded-md shadow-2xl ring-1 ring-primary/10'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
