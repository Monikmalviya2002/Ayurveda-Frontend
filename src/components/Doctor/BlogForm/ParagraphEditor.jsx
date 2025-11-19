import { Plus, Trash2 } from 'lucide-react';
import React from 'react'
import { Controller, useFieldArray } from 'react-hook-form';

const ParagraphEditor = ({ control, sectionIndex, name }) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: `${name}.paragraphs`
    });

    return (
        <div className="space-y-3">
            <div className="flex items-center justify-between">
                <label className="label">
                    <span className="label-text font-semibold text-[#403D27]">Paragraphs</span>
                </label>
                <button
                    type="button"
                    onClick={() => append('')}
                    className="btn btn-sm border-2 border-[#B7B687] bg-white text-[#403D27] hover:bg-[#E2E8D7] gap-2"
                >
                    <Plus size={16} /> Add Paragraph
                </button>
            </div>

            {fields.map((field, idx) => (
                <Controller
                    key={field.id}
                    name={`${name}.paragraphs.${idx}`}
                    control={control}
                    defaultValue=""
                    render={({ field: inputField }) => (
                        <div className="relative">
                            <textarea
                                {...inputField}
                                className="w-full text-black min-h-[100px] px-4 py-3 border-2 border-[#BDC2B3] rounded-lg focus:border-[#B7B687] focus:outline-none"
                                placeholder={`Paragraph ${idx + 1}...`}
                            />
                            <button
                                type="button"
                                onClick={() => remove(idx)}
                                className="absolute top-2 right-2 w-8 h-8 rounded-full bg-red-500 text-white hover:bg-red-600 flex items-center justify-center"
                            >
                                <Trash2 size={14} />
                            </button>
                        </div>
                    )}
                />
            ))}

            {fields.length === 0 && (
                <p className="text-sm text-[#6d7571] italic">No paragraphs yet. Click "Add Paragraph" to start.</p>
            )}
        </div>
    );
};

export default ParagraphEditor