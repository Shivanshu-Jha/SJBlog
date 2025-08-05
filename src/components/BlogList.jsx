import React from 'react'
import { blog_data, blogCategories } from '../assets/assets'
import { useState } from 'react'
import { motion } from "motion/react"
import BlogCard from './BlogCard'

const BlogList = () => {

    const [menu, setMenu] = useState('All')

    return (
        // creating a blog list component to display blog categories
        // and allow users to filter blogs by category
        <div>
            <div className='blog-list flex justify-center gap-4 sm:gap-8 my-10 relative'>
                {blogCategories.map((item) => (
                    <div key={item} className='relative'>
                        <button
                            onClick={() => setMenu(item)}
                            className={`cursor-pointer text-gray-500 ${menu === item && 'text-white px-4 pt-0.5'}`}>
                            {item}

                            {menu === item && (<motion.div
                                layoutId="underline"
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                className='absolute left-0 right-0 top-0 h-7 bg-primary rounded-full -z-1'></motion.div>)}

                        </button>
                    </div>
                ))}
            </div>
            {/* blog data */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40'>
                {blog_data.filter((blog) => menu === 'All' ? true : blog.category === menu).map((blog) => <BlogCard key={blog.id} blog={blog} />)}
            </div>

        </div>
    )
}

export default BlogList
