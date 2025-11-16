import React from 'react'

const BlogCardSkeleton = () => {
    return (
        <div className="card bg-white shadow-lg border-2 border-[#E2E8D7]">
            <div className="h-56 bg-[#E2E8D7] animate-pulse"></div>
            <div className="card-body p-6">
                <div className="h-5 w-24 bg-[#BDC2B3] rounded-full animate-pulse"></div>
                <div className="h-7 w-full bg-[#BDC2B3] rounded mt-3 animate-pulse"></div>
                <div className="h-4 w-full bg-[#BDC2B3] rounded mt-2 animate-pulse"></div>
                <div className="h-4 w-3/4 bg-[#BDC2B3] rounded mt-1 animate-pulse"></div>
                <div className="divider my-2"></div>
                <div className="flex items-center gap-3 mt-2">
                    <div className="w-12 h-12 rounded-full bg-[#BDC2B3] animate-pulse"></div>
                    <div className="flex-1">
                        <div className="h-4 w-28 bg-[#BDC2B3] rounded animate-pulse"></div>
                        <div className="h-3 w-36 bg-[#BDC2B3] rounded mt-2 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCardSkeleton