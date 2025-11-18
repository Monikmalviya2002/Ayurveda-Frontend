import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { FileText, Plus, Trash2, Eye, Save, Send } from 'lucide-react';
import { useState } from 'react';
import SectionBuilder from '../../components/Doctor/BlogForm/SectionBuilder.jsx';
import TipsEditor from '../../components/Doctor/BlogForm/TipsEditor.jsx';
import LivePreview from '../../components/Doctor/BlogForm/LivePreview.jsx';


const BlogCreateForm = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const { 
    register, 
    control, 
    handleSubmit, 
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      title: '',
      subtitle: '',
      category: '',
      image: '',
      readTime: '',
      authorId: 'DOCTOR_001',
      content: {
        intro: '',
        sections: [],
        tips: [],
        conclusion: ''
      }
    }
  });

  const { fields: sectionFields, append: appendSection, remove: removeSection } = useFieldArray({
    control,
    name: 'content.sections'
  });

  const categories = [
    'Digestive Health',
    'Mental Wellness',
    'Immunity',
    'Skin Care',
    'Weight Management',
    'Seasonal Care',
    'Herbal Remedies',
    'Yoga & Meditation'
  ];

  const addSection = () => {
    appendSection({ 
      heading: '', 
      paragraphs: [], 
      list: [], 
      herbs: [] 
    });
  };

  const onSubmit = (data, isDraft = false) => {
    const action = isDraft ? 'saved as draft' : 'submitted for review';
    console.log('Blog data:', data);
    alert(`Blog ${action} successfully!`);
  };

  const introValue = watch('content.intro') || '';
  const conclusionValue = watch('content.conclusion') || '';

  return (
    <div className="min-h-screen bg-[#E2E8D7] p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center justify-center gap-3 text-[#403D27]">
            <FileText size={36} className="text-[#B7B687]" />
            Create Ayurvedic Blog
          </h1>
          <p className="text-[#6d7571]">Share your knowledge with the community</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Details */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-[#BDC2B3]">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-4 text-[#403D27]">📝 Basic Blog Details</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2">
                      <span className="text-sm font-semibold text-[#403D27]">Title *</span>
                    </label>
                    <input
                      {...register('title', { 
                        required: 'Title is required',
                        minLength: { value: 10, message: 'Title must be at least 10 characters' }
                      })}
                      type="text"
                      className={`w-full text-black px-4 py-2 border-2 ${errors.title ? 'border-red-400' : 'border-[#BDC2B3]'} rounded-lg focus:border-[#B7B687] focus:outline-none`}
                      placeholder="Enter blog title..."
                    />
                    {errors.title && (
                      <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block mb-2">
                      <span className="text-sm font-semibold text-[#403D27]">Subtitle *</span>
                    </label>
                    <input
                      {...register('subtitle', { 
                        required: 'Subtitle is required',
                        minLength: { value: 10, message: 'Subtitle must be at least 10 characters' }
                      })}
                      type="text"
                      className={`w-full px-4 text-black py-2 border-2 ${errors.subtitle ? 'border-red-400' : 'border-[#BDC2B3]'} rounded-lg focus:border-[#B7B687] focus:outline-none`}
                      placeholder="Enter blog subtitle..."
                    />
                    {errors.subtitle && (
                      <p className="mt-1 text-sm text-red-600">{errors.subtitle.message}</p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2">
                        <span className="text-sm font-semibold text-[#403D27]">Category *</span>
                      </label>
                      <select
                        {...register('category', { required: 'Please select a category' })}
                        className={`w-full text-black px-4 py-2 border-2 ${errors.category ? 'border-red-400' : 'border-[#BDC2B3]'} rounded-lg focus:border-[#B7B687] focus:outline-none`}
                      >
                        <option value="">Select category...</option>
                        {categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                      {errors.category && (
                        <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block mb-2">
                        <span className="text-sm font-semibold text-[#403D27]">Read Time (mins)</span>
                      </label>
                      <input
                        {...register('readTime', { 
                          min: { value: 1, message: 'Must be at least 1 minute' }
                        })}
                        type="number"
                        className="w-full text-black px-4 py-2 border-2 border-[#BDC2B3] rounded-lg focus:border-[#B7B687] focus:outline-none"
                        placeholder="e.g., 5"
                        min="1"
                      />
                      {errors.readTime && (
                        <p className="mt-1 text-sm text-red-600">{errors.readTime.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2">
                      <span className="text-sm font-semibold text-[#403D27]">Main Image URL *</span>
                    </label>
                    <input
                      {...register('image', { 
                        required: 'Image URL is required',
                        pattern: { 
                          value: /^https?:\/\/.+/i, 
                          message: 'Please enter a valid URL' 
                        }
                      })}
                      type="url"
                      className={`w-full text-black px-4 py-2 border-2 ${errors.image ? 'border-red-400' : 'border-[#BDC2B3]'} rounded-lg focus:border-[#B7B687] focus:outline-none`}
                      placeholder="https://example.com/image.jpg"
                    />
                    {errors.image && (
                      <p className="mt-1 text-sm text-red-600">{errors.image.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block mb-2">
                      <span className="text-sm font-semibold text-[#403D27]">Author ID</span>
                    </label>
                    <input
                      {...register('authorId')}
                      type="text"
                      disabled
                      className="w-full  px-4 py-2 border-2 border-[#BDC2B3] rounded-lg bg-gray-100 text-gray-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Intro Section */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-[#BDC2B3]">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-4 text-[#403D27]">📖 Introduction</h2>
                <div>
                  <label className="block mb-2">
                    <span className="text-sm font-semibold text-[#403D27]">Intro Paragraph * (min 100 chars)</span>
                    <span className="text-sm text-[#6d7571] float-right">{introValue.length} chars</span>
                  </label>
                  <textarea
                    {...register('content.intro', {
                      required: 'Introduction is required',
                      minLength: { value: 100, message: 'Intro must be at least 100 characters' }
                    })}
                    className={`w-full text-black min-h-[120px] px-4 py-3 border-2 ${errors.content?.intro ? 'border-red-400' : 'border-[#BDC2B3]'} rounded-lg focus:border-[#B7B687] focus:outline-none`}
                    placeholder="Write an engaging introduction to your blog..."
                  />
                  {errors.content?.intro && (
                    <p className="mt-1 text-sm text-red-600">{errors.content.intro.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Dynamic Sections */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#403D27]">📚 Blog Sections</h2>
                <button
                  type="button"
                  onClick={addSection}
                  className="px-6 py-3 bg-linear-to-r from-[#403D27] to-[#6d7571] text-white rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 font-semibold"
                >
                  <Plus size={20} /> Add Section
                </button>
              </div>

              {sectionFields.map((field, idx) => (
                <SectionBuilder
                  key={field.id}
                  control={control}
                  register={register}
                  index={idx}
                  onRemove={() => removeSection(idx)}
                />
              ))}

              {sectionFields.length === 0 && (
                <div className="bg-white rounded-xl shadow-lg border-2 border-[#BDC2B3]">
                  <div className="p-12 text-center">
                    <p className="text-[#6d7571]">No sections yet. Click "Add Section" to start building your blog content.</p>
                  </div>
                </div>
              )}
            </div>

            {/* Tips Section */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-[#BDC2B3]">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-4 text-[#403D27]">💡 Wellness Tips</h2>
                <TipsEditor control={control} register={register} />
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-[#BDC2B3]">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-4 text-[#403D27]">🏁 Conclusion</h2>
                <div>
                  <label className="block mb-2">
                    <span className="text-sm font-semibold text-[#403D27]">Conclusion Paragraph * (min 50 chars)</span>
                    <span className="text-sm text-[#6d7571] float-right">{conclusionValue.length} chars</span>
                  </label>
                  <textarea
                    {...register('content.conclusion', {
                      required: 'Conclusion is required',
                      minLength: { value: 50, message: 'Conclusion must be at least 50 characters' }
                    })}
                    className={`w-full text-black min-h-[120px] px-4 py-3 border-2 ${errors.content?.conclusion ? 'border-red-400' : 'border-[#BDC2B3]'} rounded-lg focus:border-[#B7B687] focus:outline-none`}
                    placeholder="Wrap up your blog with a conclusion..."
                  />
                  {errors.content?.conclusion && (
                    <p className="mt-1 text-sm text-red-600">{errors.content.conclusion.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-[#BDC2B3] sticky bottom-4 z-10">
              <div className="p-6">
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleSubmit((data) => onSubmit(data, false))}
                    className="px-6 py-3 bg-linear-to-r from-[#403D27] to-[#6d7571] text-white rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 font-semibold"
                  >
                    <Send size={20} /> Submit for Review
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Live Preview */}
          <div className="lg:col-span-1">
            <LivePreview
              watch={watch} 
              show={true} 
              isOpen={isPreviewOpen}
              onToggle={() => setIsPreviewOpen(!isPreviewOpen)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCreateForm;