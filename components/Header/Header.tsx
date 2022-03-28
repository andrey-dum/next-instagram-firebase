import Image from 'next/image'
import {
    SearchIcon,
    MenuIcon,
    // PlusCircleIcon,
    // UserGroupIcon,
    // HeartIcon,
    // PaperAirplaneIcon,
    
    HomeIcon
} from '@heroicons/react/solid'
import {
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    // HomeIcon
} from '@heroicons/react/outline'

function Header() {
  return (
    <div className='flex justify-center sticky top-0 z-50 shadow-sm border-b bg-white'>
        <div className='flex justify-between max-w-6xl w-full mx-5 xl:mx-auto'>
            <div className='relative hidden lg:inline-grid w-24 cursor-pointer'>
                <Image
                    src="https://links.papareact.com/ocw"
                    layout='fill'
                    objectFit='contain'
                />
            </div>
            <div className='relative lg:hidden flex-shrink-0 w-10 cursor-pointer'>
                <Image
                    src="https://links.papareact.com/jjm"
                    layout='fill'
                    objectFit='contain'
                />
            </div>

            <div className=' max-w-xs'>
                <div className='relative mt-1 p-2 rounded-md'>
                    <div className='flex items-center absolute inset-y-0 pl-3 pointer-events-none'>
                        <SearchIcon className="h-5 w-5 text-gray-500"/>
                    </div>
                    <input 
                        className='pt-2 pb-2 bg-gray-50 rounded-md pl-10 block w-full sm:text-sm border-gray-300 focus:ring-black focus:border-black' 
                        placeholder='Search' 
                    />
                </div>
            </div>

            <div className='flex items-center justify-end space-x-4'>
                <HomeIcon className='navBtn ' />
                <MenuIcon className='h-6 md:hidden cursor-pointer' />

                <div className='relative navBtn'>
                    <div 
                        className='absolute -top-1 -right-2 rounded-full text-xs w-5 h-5 bg-red-500 flex items-center justify-center animate-pulse z-10 text-white'
                    >3</div>
                    <PaperAirplaneIcon className='navBtn rotate-45' />
                </div>
                
                <PlusCircleIcon className='navBtn' />
                <UserGroupIcon className='navBtn' />
                <HeartIcon className='navBtn' />

                <img 
                    className='h-10 w-10 rounded-full cursor-pointer'
                    src='https://andrey-dum.web.app/static/media/avatar.739caae9.jpg'
                />
            </div>

        </div>
    </div>
  )
}

export default Header

