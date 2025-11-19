import { Eye } from 'lucide-react';
import React from 'react'
import PreviewContent from './PreviewContent.jsx';

const LivePreview = ({ watch, show, isOpen, onToggle }) => {
    const formData = watch();

    if (!show) return null;

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                type="button"
                onClick={onToggle}
                className="lg:hidden fixed bottom-20 right-4 z-50 w-14 h-14 bg-linear-to-r from-[#403D27] to-[#6d7571] text-white rounded-full shadow-lg flex items-center justify-center hover:opacity-90"
            >
                <Eye size={24} />
            </button>

            {/* Mobile Preview Modal */}
            {isOpen && (
                <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 flex items-end" onClick={onToggle}>
                    <div
                        className="bg-white rounded-t-3xl w-full max-h-[80vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="sticky top-0 bg-white border-b-2 border-[#BDC2B3] p-4 flex items-center justify-between">
                            <div className="flex items-center gap-2 text-[#403D27]">
                                <Eye size={20} />
                                <h3 className="text-lg font-bold">Live Preview</h3>
                            </div>
                            <button
                                onClick={onToggle}
                                className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="p-6">
                            <PreviewContent formData={formData} />
                        </div>
                    </div>
                </div>
            )}

            {/* Desktop Preview */}
            <div className="hidden lg:block sticky top-4 h-fit">
                <div className="bg-white rounded-xl shadow-lg border-2 border-[#BDC2B3]">
                    <div className="p-6">
                        <div className="flex items-center gap-2 mb-4 text-[#403D27]">
                            <Eye size={20} />
                            <h3 className="text-xl font-bold">Live Preview</h3>
                        </div>

                        <PreviewContent formData={formData} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LivePreview