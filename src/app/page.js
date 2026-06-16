'use client';

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      {/* 헤더 영역 */}
      <header className="border-b border-slate-800 p-6 flex justify-between items-center max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold tracking-wider text-indigo-400">🏆 제1회 양자배 옵치 대회</h1>
        <p className="text-sm text-slate-400">개최일: 2026년 7월 4일 ~ 7월 5일</p>
      </header>

      {/* 탭 버튼 영역 */}
      <nav className="flex justify-center space-x-4 my-8 px-4">
        {[
          { id: 'about', label: '대회 소개' },
          { id: 'teams', label: '팀 정보' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === tab.id 
                ? 'bg-indigo-600 text-white shadow-lg' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* 본문 영역 */}
      <main className="max-w-5xl mx-auto px-6 pb-20">
        {activeTab === 'about' && (
          <section className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <h2 className="text-xl font-bold mb-2 text-indigo-300">👋 대회 개요</h2>
            <p className="text-slate-300">새롭게 시작하는 제1회 양자배 오버워치 대회 대시보드입니다! 빌드가 완벽하게 작동 중입니다.</p>
          </section>
        )}
        
        {activeTab === 'teams' && (
          <section className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <h2 className="text-xl font-bold mb-2 text-indigo-300">🛡️ 팀 정보</h2>
            <p className="text-slate-300">잠시 후 데이터를 추가하면 여기에 팀 명단이 나타납니다.</p>
          </section>
        )}
      </main>
    </div>
  );
}
