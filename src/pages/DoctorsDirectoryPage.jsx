import React, { useState, useMemo } from 'react';
import { Search, Filter, X, } from 'lucide-react';
import DoctorFilters from '../components/DoctorFilters';
import DoctorCard from '../components/DoctorCard';
import Navbar from '../components/NavBar';

// Mock doctor data
const doctorsData = [
    {
        id: "d1",
        name: "Dr. Meera Sharma",
        avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&q=80",
        qualification: "BAMS, MD Ayurveda",
        specialization: ["PCOD", "Thyroid", "Women's Health"],
        experience: "12 years",
        fee: 499,
        rating: 4.9,
        totalReviews: 128,
        consultationModes: ["Chat", "Video", "Voice"],
        gender: "Female"
    },
    {
        id: "d2",
        name: "Dr. Rajesh Kumar",
        avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&q=80",
        qualification: "BAMS, PhD Ayurveda",
        specialization: ["Skin Care", "Hair Loss", "Psoriasis"],
        experience: "15 years",
        fee: 599,
        rating: 4.8,
        totalReviews: 205,
        consultationModes: ["Video", "Voice"],
        gender: "Male"
    },
    {
        id: "d3",
        name: "Dr. Priya Patel",
        avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80",
        qualification: "BAMS, MD (Kayachikitsa)",
        specialization: ["Weight Management", "Diabetes", "Digestion"],
        experience: "8 years",
        fee: 399,
        rating: 4.7,
        totalReviews: 89,
        consultationModes: ["Chat", "Video"],
        gender: "Female"
    },
    {
        id: "d4",
        name: "Dr. Anil Verma",
        avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&q=80",
        qualification: "BAMS, MD Panchakarma",
        specialization: ["General Physician", "Immunity", "Stress"],
        experience: "10 years",
        fee: 450,
        rating: 4.6,
        totalReviews: 112,
        consultationModes: ["Chat", "Video", "Voice"],
        gender: "Male"
    },
    {
        id: "d5",
        name: "Dr. Kavita Reddy",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
        qualification: "BAMS, MS Ayurveda",
        specialization: ["Hair Loss", "Dandruff", "Scalp Care"],
        experience: "6 years",
        fee: 350,
        rating: 4.8,
        totalReviews: 76,
        consultationModes: ["Chat", "Video"],
        gender: "Female"
    },
    {
        id: "d6",
        name: "Dr. Sanjay Iyer",
        avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&q=80",
        qualification: "BAMS, MD Dravyaguna",
        specialization: ["PCOD", "Fertility", "Hormonal Issues"],
        experience: "14 years",
        fee: 550,
        rating: 4.9,
        totalReviews: 156,
        consultationModes: ["Video", "Voice"],
        gender: "Male"
    }
];






// Pagination Component
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex justify-center gap-2 mt-8">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="btn btn-sm border-[#BDC2B3] text-[#403D27] hover:bg-[#E2E8D7] disabled:opacity-50"
            >
                Previous
            </button>

            {pages.map(page => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`btn btn-sm ${page === currentPage
                            ? 'bg-[#403D27] text-white border-[#403D27]'
                            : 'border-[#BDC2B3] text-[#403D27] hover:bg-[#E2E8D7]'
                        }`}
                >
                    {page}
                </button>
            ))}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="btn btn-sm border-[#BDC2B3] text-[#403D27] hover:bg-[#E2E8D7] disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
};


const DoctorDirectoryPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    const itemsPerPage = 10;

    const [filters, setFilters] = useState({
        specializations: [],
        gender: 'all',
        experience: 'all'
    });

    const filteredDoctors = useMemo(() => {
        let result = [...doctorsData];

        // Search filter
        if (searchQuery) {
            result = result.filter(doc =>
                doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                doc.specialization.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        // Specialization filter
        if (filters.specializations.length > 0) {
            result = result.filter(doc =>
                doc.specialization.some(s => filters.specializations.includes(s))
            );
        }

        // Gender filter
        if (filters.gender !== 'all') {
            result = result.filter(doc => doc.gender === filters.gender);
        }

        // Experience filter
        if (filters.experience !== 'all') {
            result = result.filter(doc => {
                const years = parseInt(doc.experience);
                if (filters.experience === '1-5') return years >= 1 && years <= 5;
                if (filters.experience === '5-10') return years > 5 && years <= 10;
                if (filters.experience === '10+') return years > 10;
                return true;
            });
        }

        return result;
    }, [searchQuery, filters,]);

    // Pagination
    const totalPages = Math.ceil(filteredDoctors.length / itemsPerPage);
    const paginatedDoctors = filteredDoctors.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const resetFilters = () => {
        setFilters({
            specializations: [],
            gender: 'all',
            experience: 'all'
        });
        setSearchQuery('');
        setConsultationType('all');
        setSortBy('popular');
        setCurrentPage(1);
    };

    return (
        <div className="min-h-screen bg-[#E2E8D7] font-body"> 
          <Navbar/>
            {/* Header Hero */}
            <div className="bg-[#E2E8D7] py-12 px-4 border-b border-[#BDC2B3]">
                <div className="max-w-7xl mx-auto text-center font-heading">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#403D27] mb-4 ">
                        Find Ayurvedic Doctors
                    </h1>
                    <p className="text-lg text-[#6d7571] max-w-3xl mx-auto">
                        Consult certified Ayurveda specialists for skin, hair, PCOD, thyroid, digestion & lifestyle care.
                    </p>
                </div>
            </div>

            {/* Search Bar */}
            <div className="sticky top-0 z-0 bg-white border-b border-[#BDC2B3] shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-3">
                    <div className="flex flex-row gap-3 items-start sm:items-center justify-center">
                        {/* Search Input */}
                        <div className="flex-1 w-full sm:max-w-md">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#6d7571]" />
                                <input
                                    type="text"
                                    placeholder="Search doctor name, specialty..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2.5 border border-[#B7B687] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B7B687] focus:border-transparent bg-white text-[#403D27] placeholder-[#6d7571] text-sm"
                                />
                            </div>
                        </div>

                        {/* Mobile Filter Button */}
                        <button
                            onClick={() => setShowMobileFilters(!showMobileFilters)}
                            className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-linear-to-r from-[#403D27] to-[#6d7571] text-white rounded-lg text-sm font-semibold border-none"
                        >
                            <Filter className="w-4 h-4" />
                            Filters
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex gap-8">
                    {/* Desktop Sidebar Filters */}
                    <div className="hidden lg:block w-60 shrink-0">
                        <DoctorFilters filters={filters} setFilters={setFilters} onReset={resetFilters} />
                    </div>

                    {/* Doctors Grid */}
                    <div className="flex-1">
                        <div className="mb-6">
                            <p className="text-[#6d7571]">
                                Showing <span className="font-semibold text-[#403D27]">{filteredDoctors.length}</span> doctors
                            </p>
                        </div>

                        {paginatedDoctors.length > 0 ? (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {paginatedDoctors.map(doctor => (
                                        <DoctorCard key={doctor.id} doctor={doctor} />
                                    ))}
                                </div>

                                {/* Pagination */}
                                {totalPages > 1 && (
                                    <Pagination
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        onPageChange={setCurrentPage}
                                    />
                                )}
                            </>
                        ) : (
                            /* Empty State */
                            <div className="text-center py-16">
                                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-[#E2E8D7] flex items-center justify-center">
                                    <svg className="w-16 h-16 text-[#B7B687]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-[#403D27] mb-2">No Doctors Found</h3>
                                <p className="text-[#6d7571] mb-6">
                                    No doctors found for this filter. Try adjusting your search.
                                </p>
                                <button
                                    onClick={resetFilters}
                                    className="btn bg-linear-to-r from-[#403D27] to-[#6d7571] text-white border-none"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Filters Modal */}
            {showMobileFilters && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setShowMobileFilters(false)}></div>
                    <div className="absolute right-0 top-0 bottom-0 w-80 bg-white overflow-y-auto">
                        <div className="p-4">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-bold text-[#403D27]">Filters</h3>
                                <button onClick={() => setShowMobileFilters(false)}>
                                    <X className="w-6 h-6 text-[#403D27]" />
                                </button>
                            </div>
                            <DoctorFilters filters={filters} setFilters={setFilters} onReset={resetFilters} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DoctorDirectoryPage;