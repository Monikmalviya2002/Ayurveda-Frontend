import { Plus, Trash2 } from 'lucide-react';
import React from 'react'
import { Controller, useFieldArray } from 'react-hook-form';

const HerbEditor = ({ control, name }) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: `${name}.herbs`
    });

    return (
        <div className="space-y-3">
            <div className="flex items-center justify-between">
                <label className="label">
                    <span className="label-text font-semibold text-[#403D27]">🌿 Ayurvedic Herbs</span>
                </label>
                <button
                    type="button"
                    onClick={() => append({ name: '', benefit: '' })}
                    className="btn btn-sm border-2 border-[#B7B687] bg-white text-[#403D27] hover:bg-[#E2E8D7] gap-2"
                >
                    <Plus size={16} /> Add Herb
                </button>
            </div>

            {fields.map((field, idx) => (
                <div key={field.id} className="bg-[#E2E8D7] p-4 rounded-lg border-2 border-[#BDC2B3]">
                    <div className="flex gap-3 items-start">
                        <div className="flex-1 space-y-2">
                            <Controller
                                name={`${name}.herbs.${idx}.name`}
                                control={control}
                                defaultValue=""
                                render={({ field: inputField }) => (
                                    <input
                                        {...inputField}
                                        type="text"
                                        className="w-full text-black px-3 py-2 text-sm border-2 border-[#BDC2B3] rounded-lg focus:border-[#B7B687] focus:outline-none bg-white"
                                        placeholder="Herb name (e.g., Ashwagandha)"
                                    />
                                )}
                            />
                            <Controller
                                name={`${name}.herbs.${idx}.benefit`}
                                control={control}
                                defaultValue=""
                                render={({ field: inputField }) => (
                                    <input
                                        {...inputField}
                                        type="text"
                                        className="w-full text-black px-3 py-2 text-sm border-2 border-[#BDC2B3] rounded-lg focus:border-[#B7B687] focus:outline-none bg-white"
                                        placeholder="Benefit (e.g., reduces stress)"
                                    />
                                )}
                            />
                            <Controller
                                name={`${name}.herbs.${idx}`}
                                control={control}
                                render={({ field: { value } }) => (
                                    value?.name && value?.benefit && (
                                        <p className="text-sm text-green-700 font-medium">
                                            ✓ {value.name} — {value.benefit}
                                        </p>
                                    )
                                )}
                            />
                        </div>
                        <button
                            type="button"
                            onClick={() => remove(idx)}
                            className="w-8 h-8 rounded-full bg-red-500 text-white hover:bg-red-600 flex items-center justify-center flex-shrink-0"
                        >
                            <Trash2 size={14} />
                        </button>
                    </div>
                </div>
            ))}

            {fields.length === 0 && (
                <p className="text-sm text-[#6d7571] italic">No herbs added yet.</p>
            )}
        </div>
    );
};

export default HerbEditor