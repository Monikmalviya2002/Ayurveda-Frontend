import React from 'react'

const PreviewContent = ({ formData }) => {
    return (
        <div className="prose prose-sm max-w-none">
            {formData.title && (
                <h1 className="text-2xl font-bold mb-2 text-[#403D27]">{formData.title}</h1>
            )}
            {formData.subtitle && (
                <p className="text-lg text-[#6d7571] mb-4">{formData.subtitle}</p>
            )}

            {formData.category && (
                <div className="inline-block px-3 py-1 bg-[#B7B687] text-white text-sm rounded-full mb-4">{formData.category}</div>
            )}

            {formData.content?.intro && (
                <div className="bg-[#E2E8D7] p-4 rounded-lg mb-4 border-2 border-[#BDC2B3]">
                    <p className="text-sm text-[#403D27]">{formData.content.intro}</p>
                </div>
            )}

            {formData.content?.sections?.map((section, idx) => (
                <div key={idx} className="mb-6">
                    {section.heading && (
                        <h2 className="text-xl font-semibold mb-2 text-[#403D27]">{section.heading}</h2>
                    )}

                    {section.paragraphs?.filter(p => p).length > 0 && (
                        <div className="space-y-2 mb-3">
                            {section.paragraphs.map((para, pIdx) =>
                                para && <p key={pIdx} className="text-sm text-[#403D27]">{para}</p>
                            )}
                        </div>
                    )}

                    {section.list?.filter(i => i).length > 0 && (
                        <ul className="list-disc list-inside mb-3 space-y-1">
                            {section.list.map((item, iIdx) =>
                                item && <li key={iIdx} className="text-sm text-[#403D27]"><span className="text-[#B7B687]">•</span> {item}</li>
                            )}
                        </ul>
                    )}

                    {section.herbs?.filter(h => h?.name && h?.benefit).length > 0 && (
                        <div className="bg-green-50 p-3 rounded-lg border-2 border-green-200">
                            <p className="font-semibold text-sm mb-2 text-green-800">🌿 Herbs:</p>
                            {section.herbs.map((herb, hIdx) =>
                                herb?.name && herb?.benefit && (
                                    <p key={hIdx} className="text-sm text-green-700">
                                        <strong>{herb.name}</strong> — {herb.benefit}
                                    </p>
                                )
                            )}
                        </div>
                    )}
                </div>
            ))}

            {formData.content?.tips?.filter(t => t).length > 0 && (
                <div className="bg-yellow-50 p-4 rounded-lg mb-4 border-2 border-yellow-200">
                    <h3 className="font-semibold mb-2 text-yellow-800">💡 Wellness Tips:</h3>
                    <ul className="space-y-1">
                        {formData.content.tips.map((tip, idx) =>
                            tip && <li key={idx} className="text-sm text-yellow-900">{tip}</li>
                        )}
                    </ul>
                </div>
            )}

            {formData.content?.conclusion && (
                <div className="bg-[#E2E8D7] p-4 rounded-lg border-2 border-[#BDC2B3]">
                    <h3 className="font-semibold mb-2 text-[#403D27]">Conclusion</h3>
                    <p className="text-sm text-[#403D27]">{formData.content.conclusion}</p>
                </div>
            )}
        </div>
    );
};

export default PreviewContent