'use client';

import { useState } from 'react';
import teamsData from './teams.json';

export default function Home() {
  const [activeTab, setActiveTab] = useState('teams');
  const [openTeamId, setOpenTeamId] = useState(null);

  const toggleTeam = (id) => {
    setOpenTeamId(openTeamId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* 상단 비주얼 헤더 */}
      <header className="relative border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">🔥</span>
            <div>
              <h1 className="text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                제1회 양자배 옵치 대회
              </h1>
              <p className="text-xs text-slate-400 mt-0.5">Quantum Overwatch Tournament Dashboard</p>
            </div>
          </div>
          <div className="text-right sm:text-right text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              📅 2026. 07. 04 ~ 07. 05
            </span>
          </div>
        </div>
      </header>

      {/* 네비게이션 탭 */}
      <nav className="flex justify-center space-x-2 my-10 px-4">
        {[
          { id: 'teams', label: '🛡️ 참가 팀 정보' },
          { id: 'about', label: '📢 대회 가이드' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer ${
              activeTab === tab.id 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-500' 
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-850 hover:text-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* 본문 콘텐츠 */}
      <main className="max-w-4xl mx-auto px-6 pb-24">
        
        {/* TAB: 팀 정보 */}
        {activeTab === 'teams' && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-400 mb-2 px-1">참가팀 라인업 ({teamsData.length})</h2>
            
            {teamsData.map((team) => {
              const isOpen = openTeamId === team.id;
              return (
                <div 
                  key={team.id} 
                  className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl transition-all duration-200 hover:border-indigo-500/40"
                >
                  {/* 팀 카드 헤더 버튼 */}
                  <button 
                    onClick={() => toggleTeam(team.id)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 hover:bg-slate-850/50 cursor-pointer transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-xl font-black text-indigo-400">#{team.id}</span>
                        <h3 className="text-lg font-bold text-white tracking-tight">{team.teamName}</h3>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">팀장: <span className="text-purple-300 font-medium">{team.captain}</span></p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-500 font-medium hidden sm:inline">{isOpen ? "닫기" : "멤버 보기"}</span>
                      <span className={`text-sm text-indigo-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </div>
                  </button>

                  {/* 아코디언 멤버 리스트 */}
                  {isOpen && (
                    <div className="border-t border-slate-800 bg-slate-950/40 px-6 py-4 divide-y divide-slate-850">
                      {team.members.map((member, idx) => (
                        <div key={idx} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm">
                          <div className="flex items-center space-x-3">
                            <span className="font-semibold text-white min-w-[90px]">{member.name}</span>
                            <span className={`px-2 py-0.5 rounded text-xs font-medium bg-slate-800 text-slate-300`}>
                              {member.role}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4 text-xs sm:text-sm">
                            <span className="text-amber-400 font-medium">✨ {member.tier}</span>
                            <span className="text-slate-400">모스트: <span className="text-slate-300 font-medium">{member.most}</span></span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* TAB: 대회 가이드 */}
        {activeTab === 'about' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-indigo-400">■</span> 대회 기본 개요
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed pl-4">
                본 대회는 오버워치 2 경쟁전 룰을 기반으로 진행되는 커뮤니티 토너먼트입니다. 
                모든 팀은 공정한 티어 밸런스를 맞추어 구성되었으며, 예선 조별 리그 후 본선 토너먼트 방식으로 최종 우승팀을 가립니다.
              </p>
            </div>
            <div className="border-t border-slate-800 pt-6">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-purple-400">■</span> 기본 규칙
              </h2>
              <ul className="list-disc list-inside text-sm text-slate-400 space-y-1.5 pl-4">
                <li>모든 경기는 사용자 지정 방(대회 표준 설정)에서 진행됩니다.</li>
                <li>무승부 발생 시 쟁탈 전장에서 단판 승부로 결정합니다.</li>
                <li>비속어 사용 및 비매너 플레이 적발 시 경고 처리가 부여될 수 있습니다.</li>
              </ul>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
