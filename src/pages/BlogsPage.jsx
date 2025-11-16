import React, { useState, useMemo } from 'react';
import { Search, User, Sparkles, Leaf, Calendar } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import BlogCardSkeleton from '../components/BlogCardSkeleton';

const blogData = [
    {
        id: 1,
        title: "How to Balance Vata Dosha for Better Sleep",
        description: "Discover ancient Ayurvedic techniques to calm your Vata and achieve restful, rejuvenating sleep naturally.",
        category: "Lifestyle",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
        readTime: "5 min read",
        author: {
            name: "Dr. Ananya Sharma",
            qualification: "BAMS, MD Ayurveda",
            avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&q=80"
        }
    },
    {
        id: 2,
        title: "Natural Remedies for Glowing Skin",
        description: "Learn about powerful Ayurvedic herbs and treatments that reveal your skin's natural radiance and beauty.",
        category: "Skin",
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
        readTime: "7 min read",
        author: {
            name: "Dr. Priya Desai",
            qualification: "BAMS, Skin Specialist",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80"
        }
    },
    {
        id: 3,
        title: "Ayurvedic Diet Plan for Weight Management",
        description: "Personalized dosha-based nutrition strategies to achieve and maintain your ideal weight harmoniously.",
        category: "Weight Management",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
        readTime: "10 min read",
        author: {
            name: "Dr. Rajesh Kumar",
            qualification: "BAMS, Nutrition Expert",
            avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&q=80"
        }
    },
    {
        id: 4,
        title: "Understanding PCOD Through Ayurveda",
        description: "Holistic approach to managing PCOD symptoms using time-tested Ayurvedic principles and herbal remedies.",
        category: "PCOD",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80",
        readTime: "8 min read",
        author: {
            name: "Dr. Meera Patel",
            qualification: "BAMS, Women's Health",
            avatar: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=200&q=80"
        }
    },
    {
        id: 5,
        title: "Hair Care Rituals from Ancient Ayurveda",
        description: "Traditional oil massage techniques and herbal treatments for strong, lustrous hair growth.",
        category: "Hair",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
        readTime: "6 min read",
        author: {
            name: "Dr. Kavita Reddy",
            qualification: "BAMS, Trichology",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80"
        }
    },
    {
        id: 6,
        title: "Balancing Thyroid with Ayurvedic Medicine",
        description: "Natural approaches to support thyroid health and hormonal balance using Ayurvedic wisdom.",
        category: "Thyroid",
        image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&q=80",
        readTime: "9 min read",
        author: {
            name: "Dr. Amit Joshi",
            qualification: "BAMS, MD Endocrinology",
            avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&q=80"
        }
    },
    {
        id: 7,
        title: "Improving Digestion with Agni Balance",
        description: "Strengthen your digestive fire and enhance nutrient absorption with these Ayurvedic practices.",
        category: "Digestion",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
        readTime: "5 min read",
        author: {
            name: "Dr. Sunita Iyer",
            qualification: "BAMS, Gastroenterology",
            avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80"
        }
    },
    {
        id: 8,
        title: "Daily Ayurvedic Routine for Wellness",
        description: "Create a personalized Dinacharya that aligns with your dosha for optimal health and vitality.",
        category: "Lifestyle",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
        readTime: "7 min read",
        author: {
            name: "Dr. Ananya Sharma",
            qualification: "BAMS, MD Ayurveda",
            avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&q=80"
        }
    }
];

export const BlogsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [isLoading, setIsLoading] = useState(false);

    const categories = [
        'All',
        'Skin',
        'Hair',
        'Weight Management',
        'Thyroid',
        'PCOD',
        'Digestion',
        'Lifestyle'
    ];

    const filteredBlogs = useMemo(() => {
        return blogData.filter(blog => {
            const matchesCategory = activeCategory === 'All' || blog.category === activeCategory;
            const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                blog.description.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [searchTerm, activeCategory]);

    return (
        <div className="min-h-screen bg-[#E2E8D7]">
            {/* Navbar */}
            <div className="navbar bg-white shadow-lg px-4 lg:px-8 sticky top-0 z-50 border-b-2" style={{ borderColor: '#BDC2B3' }}>
                <div className="flex-1">
                    <a className="flex items-center gap-2 text-xl lg:text-2xl font-bold" style={{ color: '#403D27' }}>
                        <Leaf style={{ color: '#B7B687' }} size={28} />
                        AyurVeda
                    </a>
                </div>
                <div className="flex-none gap-2">
                    <div className="badge badge-lg border-none text-white px-3 py-2"
                        style={{ background: 'linear-gradient(to right, #B7B687, #6d7571)' }}>
                        <Sparkles size={14} className="mr-1" />
                        Premium
                    </div>
                    <button className="btn btn-circle btn-ghost" style={{ color: '#403D27' }}>
                        <User size={20} />
                    </button>
                </div>
            </div>

            {/* Hero Section */}
            <div className="w-full py-12 lg:py-20 px-4" style={{ background: 'linear-gradient(135deg, #E2E8D7 0%, #BDC2B3 50%, #E2E8D7 100%)' }}>
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col items-center text-center space-y-6 lg:space-y-8">
                        {/* Tagline */}
                        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 lg:px-6 lg:py-3 rounded-full shadow-lg border-2 mx-4"
                            style={{ borderColor: '#B7B687' }}>
                            <Sparkles size={16} style={{ color: '#6d7571' }} />
                            <span className="text-xs lg:text-sm font-semibold" style={{ color: '#403D27' }}>
                                Ancient Wisdom, Modern Wellness
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight px-4" style={{ color: '#403D27' }}>
                            Ayurveda Blogs &{' '}
                            <span className="bg-gradient-to-r from-[#6d7571] to-[#B7B687] bg-clip-text text-transparent block lg:inline">
                                Wellness Insights
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-base lg:text-lg xl:text-xl max-w-2xl leading-relaxed font-normal px-4"
                            style={{ color: '#6d7571' }}>
                            Guidance from certified Ayurvedic doctors on lifestyle, diet, skin, hair, hormones & more.
                        </p>

                        {/* Search Bar */}
                        <div className="w-full max-w-2xl px-4">
                            <div className="form-control">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search wellness insights..."
                                        className="input input-bordered w-full pr-12 lg:pr-14 h-12 lg:h-14 text-base lg:text-lg shadow-lg border-2 focus:outline-none rounded-full bg-white pl-4 lg:pl-6"
                                        style={{ borderColor: '#BDC2B3', color: '#403D27' }}
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <button
                                        className="btn btn-circle border-none text-white absolute right-1 lg:right-2 top-1 lg:top-2 w-10 h-10 min-h-0"
                                        style={{ background: 'linear-gradient(135deg, #403D27 0%, #6d7571 100%)' }}
                                    >
                                        <Search size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Category Filters */}
            <div className="w-full px-4 -mt-6 lg:-mt-8 mb-12 lg:mb-16">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white rounded-2xl lg:rounded-3xl shadow-lg p-4 lg:p-8 border-2" style={{ borderColor: '#BDC2B3' }}>
                        <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`btn btn-sm lg:btn-md transition-all duration-300 px-3 lg:px-6 py-2 rounded-full font-semibold border-2 ${activeCategory === category
                                            ? 'text-white border-none shadow-lg'
                                            : 'shadow-md hover:shadow-lg'
                                        }`}
                                    style={
                                        activeCategory === category
                                            ? { background: 'linear-gradient(135deg, #403D27 0%, #6d7571 100%)' }
                                            : { borderColor: '#B7B687', color: '#403D27', backgroundColor: 'white' }
                                    }
                                    onClick={() => setActiveCategory(category)}
                                >
                                    {activeCategory === category && <Sparkles size={14} className="mr-1 lg:mr-2" />}
                                    <span className="text-xs lg:text-sm">{category}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="w-full px-4 pb-12 lg:pb-24">
                <div className="max-w-6xl mx-auto">
                    {isLoading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {[...Array(6)].map((_, idx) => (
                                <BlogCardSkeleton key={idx} />
                            ))}
                        </div>
                    ) : filteredBlogs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {filteredBlogs.map(blog => (
                                <BlogCard key={blog.id} blog={blog} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 lg:py-24">
                            <div className="text-6xl lg:text-8xl mb-4 lg:mb-6 opacity-80">🔍</div>
                            <p className="text-xl lg:text-3xl font-bold mb-3 lg:mb-4" style={{ color: '#403D27' }}>
                                No blogs found
                            </p>
                            <p className="text-sm lg:text-lg opacity-80" style={{ color: '#6d7571' }}>
                                Try adjusting your search or filters
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
