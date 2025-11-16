import React from 'react'

const AuthorCard = ({author}) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 border border-[#BDC2B3]">
            <div className="flex items-start gap-4">
                <div className="avatar">
                    <div className="w-16 h-16 rounded-full ring ring-[#B7B687] ring-offset-2">
                        <img src={author.avatar} alt={author.name} />
                    </div>
                </div>
                <div className="flex-1">
                    <h3 className="font-semibold text-[#403D27] text-lg">{author.name}</h3>
                    <p className="text-sm text-[#6d7571] mb-2">{author.qualification}</p>
                    <p className="text-xs text-[#6d7571] mb-3">{author.bio}</p>
                </div>
            </div>
        </div>
    )
}

export default AuthorCard