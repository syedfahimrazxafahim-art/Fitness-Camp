/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Programs } from './components/Programs';
import { Motivation } from './components/Motivation';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { ProgramModal } from './components/ProgramModal';
import { BlogModal } from './components/BlogModal';
import { PassModal } from './components/PassModal';
import { FitnessCalculatorModal } from './components/FitnessCalculatorModal';
import { Program, BlogPost } from './types';
import { PROGRAMS, BLOG_POSTS } from './data/mockData';
import { CheckCircle2, Sparkles } from 'lucide-react';

export default function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [isProgramModalOpen, setIsProgramModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [isPassModalOpen, setIsPassModalOpen] = useState(false);
  const [isCalcModalOpen, setIsCalcModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleOpenProgram = (program: Program) => {
    setSelectedProgram(program);
    setIsProgramModalOpen(true);
  };

  const handleSelectProgramById = (programId: string) => {
    const found = PROGRAMS.find((p) => p.id === programId) || PROGRAMS[0];
    setSelectedProgram(found);
    setIsProgramModalOpen(true);
  };

  const handleSelectProgramByName = (name: string) => {
    const found = PROGRAMS.find((p) => p.title.toLowerCase().includes(name.toLowerCase())) || PROGRAMS[0];
    setSelectedProgram(found);
    setIsProgramModalOpen(true);
  };

  const handleOpenBlog = (post: BlogPost) => {
    setSelectedBlog(post);
    setIsBlogModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#ffffff] text-neutral-900 selection:bg-[#CEF72E] selection:text-black relative">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0f1015] text-white border border-[#CEF72E]/40 px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-300">
          <div className="w-6 h-6 rounded-full bg-[#CEF72E] text-black flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div className="text-xs sm:text-sm font-medium">{toastMessage}</div>
        </div>
      )}

      {/* 1. Sticky Navigation Bar */}
      <Navbar
        onOpenPassModal={() => setIsPassModalOpen(true)}
        onOpenCalcModal={() => setIsCalcModalOpen(true)}
        onSelectProgram={handleSelectProgramById}
      />

      {/* 2. Hero Section */}
      <main>
        <Hero
          onOpenVideoModal={() => setIsVideoModalOpen(true)}
          onExplorePrograms={() => {
            const el = document.getElementById('programs');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3. Features / Value Proposition Strip */}
        <Features />

        {/* 4. Our Programs Section */}
        <Programs
          onSelectProgram={handleOpenProgram}
          onViewAllPrograms={() => {
            setSelectedProgram(PROGRAMS[0]);
            setIsProgramModalOpen(true);
          }}
        />

        {/* 5. Motivation & Impact Banner */}
        <Motivation
          onStartJourney={() => setIsPassModalOpen(true)}
        />

        {/* 6. Testimonials Section */}
        <Testimonials
          onViewAllReviews={() => {
            showToast('Showing all verified member reviews (4.9 / 5.0 Rating)');
          }}
        />

        {/* 7. Blog & Insights Section */}
        <Blog
          onSelectArticle={handleOpenBlog}
          onViewAllArticles={() => {
            setSelectedBlog(BLOG_POSTS[0]);
            setIsBlogModalOpen(true);
          }}
        />

        {/* 8. Newsletter & Subscription Strip */}
        <Newsletter
          onSubscribeSuccess={(email) => {
            showToast(`Welcome to Strive! VIP starter workout routine sent to ${email}`);
          }}
        />
      </main>

      {/* 9. Comprehensive Footer */}
      <Footer
        onSelectProgramByName={handleSelectProgramByName}
        onOpenPassModal={() => setIsPassModalOpen(true)}
        onOpenCalcModal={() => setIsCalcModalOpen(true)}
      />

      {/* Interactive Modals */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onClaimPass={() => setIsPassModalOpen(true)}
      />

      <ProgramModal
        program={selectedProgram}
        isOpen={isProgramModalOpen}
        onClose={() => setIsProgramModalOpen(false)}
        onBookTrial={(title) => {
          setIsProgramModalOpen(false);
          setIsPassModalOpen(true);
          showToast(`Trial scheduled for ${title}! VIP Pass generated below.`);
        }}
      />

      <BlogModal
        post={selectedBlog}
        isOpen={isBlogModalOpen}
        onClose={() => setIsBlogModalOpen(false)}
      />

      <PassModal
        isOpen={isPassModalOpen}
        onClose={() => setIsPassModalOpen(false)}
        defaultProgram={selectedProgram?.title}
      />

      <FitnessCalculatorModal
        isOpen={isCalcModalOpen}
        onClose={() => setIsCalcModalOpen(false)}
        onSelectProgram={(programId) => {
          handleSelectProgramById(programId);
        }}
      />

    </div>
  );
}
