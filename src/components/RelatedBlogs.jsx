import { Clock } from 'lucide-react'
import React from 'react'

const RelatedBlogs = ({blogs}) => {
    return (
        <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#403D27] mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                    <div key={blog.id} className="card bg-white shadow-lg border border-[#BDC2B3] hover:shadow-xl transition-shadow cursor-pointer">
                        <figure className="h-48 overflow-hidden">
                            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </figure>
                        <div className="card-body p-5">
                            <div className="badge bg-[#B7B687] text-white border-none mb-2">{blog.category}</div>
                            <h3 className="card-title text-[#403D27] text-base leading-snug">{blog.title}</h3>
                            <div className="flex items-center gap-2 text-[#6d7571] text-sm mt-2">
                                <Clock className="w-4 h-4" />
                                <span>{blog.readTime}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RelatedBlogs