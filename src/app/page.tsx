import {Home as HomeIcon, Search, Library, Plus, Heart, ChevronLeft, ChevronRight, Play, SkipBack, Shuffle, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from 'lucide-react'

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
      <aside className='w-72 bg-zinc-950 p-6'>
        <div className='flex items-center gap-2'>
          <div className='w-3 h-3 bg-red-500 rounded-full'></div>
          <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
          <div className='w-3 h-3 bg-green-500 rounded-full'></div>
        </div>

        <nav className='space-y-5 mt-10'>
          <a href="" className='flex items-center gap-2 text-ms font-semibold text-zinc-300  hover:text-zinc-100'>
            <HomeIcon/>
            Inicio
            </a>
          <a href="" className='flex items-center gap-2 text-ms font-semibold text-zinc-300 hover:text-zinc-100'>
            <Search/>
            Buscar
            </a>
          <a href="" className='flex items-center gap-2 text-ms font-semibold text-zinc-300 hover:text-zinc-100'>
            <Library/>
            Sua Biblioteca
            </a>
            <br />
          <a href="" className='flex items-center gap-2 text-ms font-semibold text-zinc-300 hover:text-zinc-100'>
            <Plus/>
            Criar playlist
            </a>
          <a href="" className='flex items-center gap-2 text-ms font-semibold text-zinc-300 hover:text-zinc-100'>
            <Heart/>
            Musicas Curtidas
            </a>
        </nav>
        <nav className='mt-10 pt-10 border-t border-zinc-600 flex flex-col gap-2'>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>This is Metro Boomin</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>This is Big Sean</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Vc me faz sorrir</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>This is Arctic Monkeys</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Arctic Monkeys</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>This is Splipknot</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Rádio de Gaab</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>This is Tame Impala</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Marlin manson</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>This is Eminem</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>This is Nirvana</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Rádio Nirvana</a>
        </nav>
      </aside>
      <main className='flex-1 p-6'>
      <div className='flex items-center gap-3'>
        <button className=' rounded-full bg-black/30 p-1'>
          <ChevronLeft/>
        </button>
        <button className=' rounded-full bg-black/30 p-1'>
          <ChevronRight/>
        </button>
      </div>

      <h1 className='font-semibold text-3xl mt-10 '>Bom dia</h1>

      <div className='grid grid-cols-3 gap-6 mt-4'>
        <a href='#' className='bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors'>
          <img src='./img/arcticmonkeys.jpg' width={80} height={80} alt='Arctic' />
          <strong>Arctic Monkeys</strong>
          <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
          <Play />  
          </button>        
           </a>
        <a href='#' className='bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors'>
        <img src='./img/banda-dejavu-album.jpg' width={80} height={80} alt='Arctic' />
        <strong>Banda Dejavu</strong>
        <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
          <Play />  
          </button> 
           </a>
        <a href='#' className='bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors'>
        <img src='./img/strokes.jpg' width={80} height={80} alt='Arctic' />
        <strong>The Strokes</strong>
        <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
          <Play />  
          </button> 
           </a>
        <a href='#' className='bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors'>
        <img src='./img/LP-album.webp' width={80} height={80} alt='Arctic' />
        <strong>Linkin Park</strong>
        <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
          <Play />  
          </button> 
           </a>
        <a href='#' className='bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors'> 
        <img src='./img/tame.jpg' width={80} height={80} alt='Arctic' />
        <strong>Tame Impala</strong>
        <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
          <Play />  
          </button> 
           </a>
        <a href='#' className='bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors'>
        <img src='./img/slip.jpg' width={80} height={80} alt='Arctic' />
        <strong>Slipknot</strong>
        <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
          <Play />  
          </button> 
           </a>
        
      </div>
      <div>
      <h2 className='font-semibold text-3xl mt-10 '>Feito para Luis Felipe</h2>
      <a href="" className='float-right text-zinc-500 hover:text-zinc-200 flex-col'>Mostrar mais</a>
      </div>
    
      <div className='grid grid-cols-5 gap-4 pt-10 nt-4'>
        <a href='' className='bg-white/5 p-3 gap-1 flex flex-col rounded-md hover:bg-white/10'>
        <img src='./img/slip.jpg' className='w-full' width={80} height={80} alt='Arctic' />
        <strong className='font-semibold'>Mix Diario 1</strong>
        <span className='text-xs text-zinc-500'>Slipknot, Arctic Monkeys e muito mais!</span>
        </a>
        <a href='' className='bg-white/5 p-3 gap-1 flex flex-col rounded-md hover:bg-white/10'>
        <img src='./img/arcticmonkeys.jpg' className='w-full' width={80} height={80} alt='Arctic' />
        <strong className='font-semibold'>Mix Diario 2</strong>
        <span className='text-xs text-zinc-500'>Slipknot, Arctic Monkeys e muito mais!</span>
        </a>
        <a href='' className='bg-white/5 p-3  flex flex-col gap-1 rounded-md hover:bg-white/10'>
        <img src='./img/eminem.webp' className='w-full' width={80} height={80} alt='Arctic' />
        <strong className='font-semibold'>Mix Diario 3</strong>
        <span className='text-xs text-zinc-500'>Slipknot, Arctic Monkeys e muito mais!</span>
        </a>
        <a href='' className='bg-white/5 gap-1 p-3 flex flex-col rounded-md hover:bg-white/10'>
        <img src='./img/LP-album.webp' className='w-full' width={80} height={80} alt='Arctic' />
        <strong className='font-semibold'>Mix Diario 4</strong>
        <span className='text-xs text-zinc-500'>Slipknot, Arctic Monkeys e muito mais!</span>
        </a>
        <a href='' className='bg-white/5 p-3 gap-1 flex flex-col rounded-md hover:bg-white/10'>
        <img src='./img/tame.jpg' className='w-full' width={80} height={80} alt='Arctic' />
        <strong className='font-semibold'>Mix Diario 5</strong>
        <span className='text-xs text-zinc-500'>Slipknot, Arctic Monkeys e muito mais!</span>
        </a>
      </div>
      </main>
      </div>


      <footer className="bg-zinc-900 border-t border-zinc-700 px-5 py-3 flex items-center justify-between">
        <div className='flex items-center gap-2'><img src='./img/tame.jpg'  width={50} height={40} alt='Arctic' />
        <div className='flex flex-col gap-1'><a href=""><strong className='font-normal'>Tame Impala - Borderline</strong></a>
        <span className='text-zinc-400 text-xs'>Tame Impala</span></div></div>
        <div className='flex flex-col items-center'>
      <div className='flex items-center gap-3 '><a href=""><Shuffle size={20} className='text-zinc-200' /></a>
      <a href=""><SkipBack size={20} className='text-zinc-200'/></a>
        <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
          <Play size={20} />  
          </button> 
          <a href=""><SkipForward size={20} className='text-zinc-200'/></a>
         <a href=""><Repeat size={20} className='text-zinc-200'/></a>
         
      </div>
      <div className='flex items-center  gap-3'>
        <span className='text-xs'>1:30</span>
        <div className='h-1 rounded-full w-96 bg-zinc-600'>
          <div className='bg-zinc-200 w-40 rounded-full h-1'></div>
        </div>
        <span className='text-xs'>3:57</span>
      </div>
        </div>

        <div className='flex items-center gap-4'>
          <a href=""><Mic2 size={20} /></a>
          <a href=""><LayoutList size={20} /></a>
          <a href=""><Laptop2 size={20} /></a>
      <div className='flex items-center gap-2'>
        <Volume size={20} />
      </div>
      <div className='h-1 rounded-full w-16 bg-zinc-600'>
          <div className='bg-zinc-200 w-10 rounded-full h-1'></div> </div>
          <a href=""><Maximize2 size={20} /></a>
      
        </div>
      </footer>
    </div>
  )
}
