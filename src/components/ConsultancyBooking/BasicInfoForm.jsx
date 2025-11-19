import React from 'react'

const BasicInfoForm = ({ register, errors, watch }) => {
    return (
        <div className="bg-white border border-[#BDC2B3] rounded-xl p-6 shadow-sm mb-6">
            <h2 className="font-['Playfair_Display'] font-bold text-xl text-[#403D27] mb-4">
                Basic Information
            </h2>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-['Inter'] font-medium text-[#403D27] mb-2">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        {...register('name', { required: 'Full name is required' })}
                        className={`w-full text-black px-4 py-2 border-2 rounded-lg focus:outline-none font-['Inter'] ${errors.name ? 'border-red-500' : 'border-[#BDC2B3] focus:border-[#B7B687]'
                            }`}
                        placeholder="Enter your full name"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-xs mt-1 font-['Inter']">{errors.name.message}</p>
                    )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-['Inter'] font-medium text-[#403D27] mb-2">
                            Age *
                        </label>
                        <input
                            type="number"
                            {...register('age', {
                                required: 'Age is required',
                                min: { value: 1, message: 'Age must be positive' },
                                max: { value: 120, message: 'Please enter a valid age' }
                            })}
                            className={`w-full text-black px-4 py-2 border-2 rounded-lg focus:outline-none font-['Inter'] ${errors.age ? 'border-red-500' : 'border-[#BDC2B3] focus:border-[#B7B687]'
                                }`}
                            placeholder="Age"
                        />
                        {errors.age && (
                            <p className="text-red-500 text-xs mt-1 font-['Inter']">{errors.age.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-['Inter'] font-medium text-[#403D27] mb-2">
                            Gender *
                        </label>
                        <select
                            {...register('gender', { required: 'Gender is required' })}
                            className={`w-full text-black px-4 py-2 border-2 rounded-lg focus:outline-none font-['Inter'] ${errors.gender ? 'border-red-500' : 'border-[#BDC2B3] focus:border-[#B7B687]'
                                }`}
                        >
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.gender && (
                            <p className="text-red-500 text-xs mt-1 font-['Inter']">{errors.gender.message}</p>
                        )}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-['Inter'] font-medium text-[#403D27] mb-2">
                        Phone Number *
                    </label>
                    <input
                        type="tel"
                        {...register('phone', {
                            required: 'Phone number is required',
                            pattern: {
                                value: /^[+]?[\d\s-()]+$/,
                                message: 'Please enter a valid phone number'
                            }
                        })}
                        className={`w-full text-black px-4 py-2 border-2 rounded-lg focus:outline-none font-['Inter'] ${errors.phone ? 'border-red-500' : 'border-[#BDC2B3] focus:border-[#B7B687]'
                            }`}
                        placeholder="+91 1234567890"
                    />
                    {errors.phone && (
                        <p className="text-red-500 text-xs mt-1 font-['Inter']">{errors.phone.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-['Inter'] font-medium text-[#403D27] mb-2">
                        Describe Your Issue *
                    </label>
                    <textarea
                        {...register('description', {
                            required: 'Description is required',
                            minLength: { value: 10, message: 'Please provide at least 10 characters' }
                        })}
                        className={`w-full text-black px-4 py-2 border-2 rounded-lg focus:outline-none font-['Inter'] min-h-[100px] ${errors.description ? 'border-red-500' : 'border-[#BDC2B3] focus:border-[#B7B687]'
                            }`}
                        placeholder="Please describe your symptoms or health concerns..."
                    />
                    {errors.description && (
                        <p className="text-red-500 text-xs mt-1 font-['Inter']">{errors.description.message}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BasicInfoForm