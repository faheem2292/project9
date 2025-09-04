import React from 'react'

const page = () => {
  return (
    <div><figure className="md:flex bg-blue-800 rounded-none p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-60 md:h-60 md:rounded-none rounded-full m-0" src="/cccc.avif" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-white text-lg font-medium">
        “AI agent development is the process of designing intelligent systems that can understand situations, make smart decisions, 
        and take actions on their own to accomplish tasks.”
      </p>
    </blockquote>
    <figcaption className="font-bold">
      <div className="text-white text-[25px]">
        M.FaHeeM
      </div>
      <div className="text-white dark:text-slate-500">
        Ai Developer
      </div>
    </figcaption>
  </div>
</figure></div>
  )
}

export default page