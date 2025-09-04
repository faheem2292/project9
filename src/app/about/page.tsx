import React from 'react'

const page = () => {
  return (
    <div>
      <figure className="md:flex bg-blue-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full m-0" src="/cccc.jpg" alt="" width="384" height="512"/>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-bold">
            <div className="text-[30px] bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Ali Hassan
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  )
}

export default page
