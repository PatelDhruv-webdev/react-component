import React from 'react'


export default function SmallLogin({label1,label2,source,lablel3}) {
  return (
        
      
      
      <div className=' w-96 h-96  bg-slate-300 rounded-md flex justify-center items-center'>  

     <div className=' w-72 h-26 bg-blue-500 rounded-lg shadow-md text-white flex flex-col gap-y-5 '>
        <div className=' flex justify-between gap-3 text-center  items-center' >
         <h3 className='  relative left-6 top-1 font-bold text-lg'>{label1}</h3>
         <div className=' flex justify-between pr-2 text-sm content-center'>
            <p className=' relative top-6 left-6'x>{label2}</p>
            <p className=' relative top-1'>{source}</p>
         </div>
        </div>
        <div className=' underline decoration-slate-400  text-center text-blue-100 '>
           <p className=' relative bottom-6'>{lablel3}</p>

            
          </div>
      </div>
    
     </div>
  )
}
