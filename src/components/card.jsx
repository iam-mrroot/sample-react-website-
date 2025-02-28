import photo1 from '../assets/double.png'
import photo2 from '../assets/single.png'
import photo3 from '../assets/triple.png'

export default function card() {
  return (
<div className='bg-white py-11'>
        <div className= 'grid md:grid-cols-3 md:max-w-[1200px] mx-auto gap-10 p-4 max-w-[400px]' >
            <div className='flex flex-col items-center gap-4 py-12 bg-gray-200 shadow-2xl rounded-lg' >
                <img src={photo2} className='w-20' alt="" />
                <h2 className='text-3xl font-bold'>Single User</h2>
                <p className='font-bold text-4xl w-2/3 text-center py-2 '>$149</p>
                <p className=' w-2/3 text-center border-b border-b-gray-400 py-1'>500GB storage</p>
                <p className=' w-2/3 text-center border-b border-b-gray-400 py-1'>1 User Allowed</p>
                <p className=' w-2/3 text-center border-b border-b-gray-400 py-1'>Send up to 2GB</p>
                <button className="py-3 px-5 bg-[#00df9a] rounded-md text-black font-semibold w-fit">Start Trial</button>
            </div>
            
            <div className='flex flex-col items-center gap-4 py-12 bg-gray-200 shadow-2xl rounded-lg' >
                <img src={photo1} className='w-20' alt="" />
                <h2 className='text-3xl font-bold'>Single User</h2>
                <p className='font-bold text-4xl w-2/3 text-center py-2 '>$199</p>
                <p className=' w-2/3 text-center border-b border-b-gray-400 py-1'>1TB storage</p>
                <p className=' w-2/3 text-center border-b border-b-gray-400 py-1'>3 User Allowed</p>
                <p className=' w-2/3 text-center border-b border-b-gray-400 py-1'>Send up to 10GB</p>
                <button className="py-3 px-5 bg-[#00df9a] rounded-md text-black font-semibold w-fit">Start Trial</button>
            </div>
            
            <div className='flex flex-col items-center gap-4 py-12 bg-gray-200 shadow-2xl rounded-lg' >
                <img src={photo3} className='w-20' alt="" />
                <h2 className='text-3xl font-bold'>Single User</h2>
                <p className='font-bold text-4xl w-2/3 text-center py-2 '>$299</p>
                <p className=' w-2/3 text-center border-b border-b-gray-400 py-1'>5TB storage</p>
                <p className=' w-2/3 text-center border-b border-b-gray-400 py-1'>10 User Allowed</p>
                <p className=' w-2/3 text-center border-b border-b-gray-400 py-1'>Send up to 20GB</p>
                <button className="py-3 px-5 bg-[#00df9a] rounded-md text-black font-semibold w-fit">Start Trial</button>
            </div>
            
           
    
        </div>
</div>
  )
}
