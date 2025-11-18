import { Plus, Trash2 } from 'lucide-react';
import React from 'react'
import { useFieldArray } from 'react-hook-form';

const TipsEditor = ({ control, register }) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'content.tips'
    });

    return (
        <div className="space-y-3">
            <div className="flex items-center justify-between">
                <label className="label">
                    <span className="label-text font-semibold text-[#403D27]">💡 Wellness Tips</span>
                </label>
                <button
                    type="button"
                    onClick={() => append('')}
                    className="btn btn-sm border-2 border-[#B7B687] bg-white text-[#403D27] hover:bg-[#E2E8D7] gap-2"
                >
                    <Plus size={16} /> Add Tip
                </button>
            </div>

            {fields.map((field, idx) => (
                <div key={field.id} className="flex gap-2 items-center">
                    <span className="text-lg">💡</span>
                    <input
                        {...register(`content.tips.${idx}`)}
                        type="text"
                        className="flex-1 text-black px-4 py-2 border-2 border-[#BDC2B3] rounded-lg focus:border-[#B7B687] focus:outline-none"
                        placeholder={`Wellness tip ${idx + 1}...`}
                    />
                    <button
                        type="button"
                        onClick={() => remove(idx)}
                        className="w-8 h-8 rounded-full bg-red-500 text-white hover:bg-red-600 flex items-center justify-center"
                    >
                        <Trash2 size={14} />
                    </button>
                </div>
            ))}

            {fields.length === 0 && (
                <p className="text-sm text-[#6d7571] italic">No tips added yet.</p>
            )}
        </div>
    );
};


export default TipsEditor