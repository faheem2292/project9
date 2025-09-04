import React from 'react'

const page = () => {
  return (
    <div><figure className="md:flex bg-gradient-to-t from-purple-400 to-blue-300 rounded-none p-10 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-60 md:h-60 md:rounded-none rounded-full m-0" src="/aaaa.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-7">
    <blockquote>
      <p className="text-lg font-bold">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium flex items-start gap-x-2">
  
  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
    <span className="text-white font-bold text-sm">MF</span>
  </div>
  <div> 
    <div className="text-[20px] text-white font-bold">
      Muhammad Faheem
    </div>
    <div className="text-white text-xl mt-5 mr-5 font-semibold"> 
      Ai Developer
    </div>
  </div>

</figcaption>
  </div>
</figure></div>
  )
}

export default page