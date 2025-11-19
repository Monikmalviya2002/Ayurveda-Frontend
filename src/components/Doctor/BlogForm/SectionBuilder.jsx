import { Trash2 } from 'lucide-react';
import React from 'react'
import ParagraphEditor from './ParagraphEditor.jsx';
import ListEditor from './ListEditor.jsx';
import HerbEditor from './HerbEditor.jsx';

const SectionBuilder = ({ control, register, index, onRemove }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg border-2 border-[#BDC2B3]">
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-[#403D27]">Section #{index + 1}</h3>
                    <button
                        type="button"
                        onClick={onRemove}
                        className="btn btn-sm border-2 border-red-400 bg-white text-red-600 hover:bg-red-50 gap-2"
                    >
                        <Trash2 size={16} /> Remove Section
                    </button>
                </div>

                <div className="mb-4">
                    <label className="block mb-2">
                        <span className="text-sm font-semibold text-[#403D27]">Section Heading</span>
                    </label>
                    <input
                        {...register(`content.sections.${index}.heading`)}
                        type="text"
                        className="w-full text-black px-4 py-2 border-2 border-[#BDC2B3] rounded-lg focus:border-[#B7B687] focus:outline-none"
                        placeholder="e.g., Understanding Ayurvedic Principles"
                    />
                </div>

                <div className="border-t-2 border-[#BDC2B3] my-6"></div>

                <ParagraphEditor
                    control={control}
                    sectionIndex={index}
                    name={`content.sections.${index}`}
                />

                <div className="border-t-2 border-[#BDC2B3] my-6"></div>

                <ListEditor
                    control={control}
                    name={`content.sections.${index}`}
                />

                <div className="border-t-2 border-[#BDC2B3] my-6"></div>

                <HerbEditor
                    control={control}
                    name={`content.sections.${index}`}
                />
            </div>
        </div>
    );
};

export default SectionBuilder