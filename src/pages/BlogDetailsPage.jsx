import React, { useState, useEffect } from 'react';
import { Share2, Clock, Calendar, Star, ChevronUp } from 'lucide-react';
import AuthorCard from '../components/AuthorCard';
import RelatedBlogs from '../components/RelatedBlogs';
import Navbar from '../components/NavBar';

// Mock blog data
const blogData = {
  id: 1,
  title: "How to Balance Vata Dosha for Better Sleep",
  subtitle: "Discover ancient Ayurvedic techniques to calm your Vata and achieve restful, rejuvenating sleep naturally.",
  category: "Lifestyle",
  image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
  readTime: "5 min read",
  publishDate: "Nov 10, 2025",
  author: {
    name: "Dr. Ananya Sharma",
    qualification: "BAMS, MD Ayurveda",
    avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&q=80",
    bio: "Specializing in stress management and sleep disorders through Ayurvedic principles"
  },
  content: {
    intro: "In Ayurveda, sleep disturbances are often linked to an imbalance in Vata dosha - the energy that governs movement and communication in the body. When Vata is aggravated, it manifests as restlessness, anxiety, and difficulty falling or staying asleep.",
    sections: [
      {
        heading: "Understanding Vata Imbalance",
        paragraphs: [
          "Vata is composed of air and ether elements, making it light, cold, dry, and mobile by nature. Modern lifestyle factors such as irregular routines, excessive screen time, and mental stress can easily disturb this delicate dosha.",
          "Common signs of Vata imbalance include racing thoughts at bedtime, waking up frequently during the night, and feeling unrested even after sleeping."
        ]
      },
      {
        heading: "Ayurvedic Evening Routine for Better Sleep",
        paragraphs: [
          "Establishing a calming evening routine is essential for pacifying Vata. Here's a step-by-step guide:"
        ],
        list: [
          "Eat your dinner before 7 PM with warm, cooked foods",
          "Practice oil massage (Abhyanga) with sesame or almond oil",
          "Take a warm bath with lavender or chamomile",
          "Avoid screens at least 1 hour before bed",
          "Practice gentle yoga poses like Child's Pose or Legs-Up-The-Wall",
          "Sip on warm milk with nutmeg and cardamom"
        ]
      },
      {
        heading: "Herbal Support for Sleep",
        paragraphs: [
          "Ayurveda offers powerful herbs that naturally calm the nervous system and promote deep sleep:"
        ],
        herbs: [
          { name: "Ashwagandha", benefit: "Reduces stress and anxiety" },
          { name: "Brahmi", benefit: "Calms the mind and improves sleep quality" },
          { name: "Jatamansi", benefit: "Natural sedative for restless minds" },
          { name: "Shankhpushpi", benefit: "Promotes mental clarity and peaceful sleep" }
        ]
      }
    ],
    tips: [
      "Keep your bedroom cool and well-ventilated - Vata thrives in warm, stable environments",
      "Use grounding essential oils like sandalwood or vetiver on your pillow",
      "Practice Nadi Shodhana (alternate nostril breathing) for 5 minutes before bed"
    ],
    conclusion: "Remember, balancing Vata is a gradual process. Be patient with yourself and maintain consistency in your routine. Quality sleep is your birthright, and Ayurveda offers time-tested wisdom to reclaim it naturally."
  }
};

const relatedBlogs = [
  {
    id: 2,
    title: "5 Ayurvedic Herbs for Stress Relief",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Morning Rituals for Balanced Doshas",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Pitta Diet: Foods to Cool Your Fire",
    category: "Nutrition",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80",
    readTime: "5 min read"
  }
];



const BlogDetailsPage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  return (
    <div className="min-h-screen bg-[#E2E8D7] font-body"> 
     <Navbar/>
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img 
          src={blogData.image} 
          alt={blogData.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="badge bg-[#B7B687] text-white border-none mb-4">{blogData.category}</div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3 leading-tight font-heading">{blogData.title}</h1>
            {blogData.subtitle && (
              <p className="text-lg md:text-xl text-gray-200 mb-4">{blogData.subtitle}</p>
            )}
            <div className="flex flex-wrap items-center gap-4 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{blogData.publishDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{blogData.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Author Card */}
            <AuthorCard author={blogData.author} />

            {/* Blog Content */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-10 border border-[#BDC2B3]">
              <article className="prose prose-lg max-w-none">
                <p className="text-[#403D27] leading-relaxed text-lg">
                  {blogData.content.intro}
                </p>

                {blogData.content.sections.map((section, idx) => (
                  <div key={idx} className="mt-8">
                    <h2 className="text-2xl font-bold text-[#403D27] mb-4">{section.heading}</h2>
                    {section.paragraphs.map((para, pIdx) => (
                      <p key={pIdx} className="text-[#403D27] leading-relaxed mb-4">
                        {para}
                      </p>
                    ))}
                    
                    {section.list && (
                      <ol className="list-decimal list-inside space-y-2 ml-4 text-[#403D27]">
                        {section.list.map((item, lIdx) => (
                          <li key={lIdx} className="leading-relaxed">{item}</li>
                        ))}
                      </ol>
                    )}

                    {section.herbs && (
                      <div className="space-y-3 mt-4">
                        {section.herbs.map((herb, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-3 p-3 bg-[#E2E8D7] rounded-lg">
                            <span className="text-[#B7B687] font-bold">•</span>
                            <div>
                              <span className="font-semibold text-[#403D27]">{herb.name}:</span>
                              <span className="text-[#6d7571]"> {herb.benefit}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Ayurveda Tips Alert */}
                <div className="alert bg-[#E2E8D7] border-l-4 border-[#B7B687] shadow-md mt-8">
                  <div>
                    <h3 className="font-bold text-[#403D27] mb-2">🌿 Ayurveda Tips</h3>
                    <ul className="space-y-2">
                      {blogData.content.tips.map((tip, idx) => (
                        <li key={idx} className="text-sm text-[#403D27] leading-relaxed">• {tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="text-[#403D27] leading-relaxed text-lg mt-8">
                  {blogData.content.conclusion}
                </p>
              </article>
            </div>

            {/* Feedback Section */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-[#BDC2B3]">
              <h3 className="text-xl font-bold text-[#403D27] mb-4">Was this article helpful?</h3>
              <div className="flex gap-2 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className="btn btn-circle btn-sm border-[#BDC2B3] hover:bg-[#E2E8D7]"
                  >
                    <Star 
                      className={`w-5 h-5 ${star <= rating ? 'fill-[#B7B687] text-[#B7B687]' : 'text-[#BDC2B3]'}`}
                    />
                  </button>
                ))}
              </div>
              {rating > 0 && (
                <p className="text-sm text-[#6d7571]">Thank you for your feedback!</p>
              )}
            </div>

            {/* CTA Section */}
            <div className="bg-linear-to-r from-[#403D27] to-[#6d7571] rounded-xl shadow-lg p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-3">Need Personalized Ayurvedic Guidance?</h3>
              <p className="mb-6 text-gray-200">Chat with a certified doctor now for customized wellness advice</p>
              <button className="btn btn-lg bg-white text-[#403D27] border-none hover:bg-[#E2E8D7]">
                Consult Now
              </button>
            </div>

            {/* Related Blogs */}
            <RelatedBlogs blogs={relatedBlogs} />
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 btn btn-circle bg-linear-to-r from-[#403D27] to-[#6d7571] text-white border-none shadow-lg hover:opacity-90"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default BlogDetailsPage;