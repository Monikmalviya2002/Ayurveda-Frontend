import { Calendar } from 'lucide-react'
import React from 'react'

const BlogCard = ({ blog }) => {
    return (
        <div className="card bg-white shadow-lg cursor-pointer overflow-hidden border-2 border-[#E2E8D7] rounded-xl">
            <figure className="h-56 overflow-hidden relative">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                    <div className="bg-[#B7B687] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                        {blog.category}
                    </div>
                </div>
                <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white bg-[#403D27]/80 px-2 py-1 rounded-full text-xs">
                    <Calendar size={12} />
                    {blog.readTime}
                </div>
            </figure>
            <div className="card-body p-6">
                <h3 className="card-title text-xl font-bold text-[#403D27] line-clamp-2">
                    {blog.title}
                </h3>
                <p className="text-sm text-[#6d7571] line-clamp-2 leading-relaxed">
                    {blog.description}
                </p>

                <div className="divider my-2 before:bg-[#BDC2B3] after:bg-[#BDC2B3]"></div>

                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="w-12 rounded-full ring-2 ring-[#B7B687]">
                                <img src={blog.author.avatar} alt={blog.author.name} />
                            </div>
                        </div>
                        <div>
                            <p className="font-bold text-sm text-[#403D27]">
                                {blog.author.name}
                            </p>
                            <p className="text-xs text-[#6d7571]">
                                {blog.author.qualification}
                            </p>
                        </div>
                    </div>
                </div>

                <button className="btn btn-sm mt-4 bg-[#403D27] border-none text-white font-semibold shadow-md">
                    Read More →
                </button>
            </div>
        </div>
    )
}

export default BlogCard