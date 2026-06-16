'use client';

import { useState } from 'react';
import teamsData from '../../data/teams.json';
import scheduleData from '../../data/schedule.json';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about'); // about, players, teams, schedule
  
  // 현재 어떤 플레이어 카드가 클릭되어 열려있는지 ID를 기억하는 상태 변수
  const [expandedPlayerId, setExpandedPlayerId] = useState(null);

  // 카드 클릭 시 열고 닫는 함수
  const togglePlayerExpand = (id) => {
    if (expandedPlayerId === id) {
      setExpandedPlayerId(null); // 이미 열려있는 걸 누르면 닫기
    } else {
      setExpandedPlayerId(id); // 새로운 걸 누르면 열기
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* 상단 비주얼 헤더 */}
      <header className="relative border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">🏆</span>
            <div>
              <h1 className="text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                제1회 양자배 옵치 대회
              </h1>
              <p className="text-xs text-slate-400 mt-0.5">Quantum Overwatch Tournament Hub</p>
            </div>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            📅 2026. 07. 04 ~ 07. 05
          </span>
        </div>
      </header>

      {/* 2. 탭 메뉴 버튼 */}
      <nav className="flex justify-center space-x-2 md:space-x-4 my-8 px-4 flex-wrap gap-y-2">
        {[
          { id: 'about', label: '📢 대회 소개' },
          { id: 'players', label: '👤 참가자 정보' },
          { id: 'teams', label: '🛡️ 팀 정보' },
          { id: 'schedule', label: '📊 경기 일정/결과' },
          { id: 'guide', label: '📝 대회 가이드' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2 rounded-full text-sm md:text-base font-medium transition-all cursor-pointer ${
              activeTab === tab.id 
                ? 'bg-indigo-600 text-white shadow-lg' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* 3. 탭별 콘텐츠 본문 영역 */}
      <main className="max-w-5xl mx-auto px-6 pb-20">
        
        {/* [대회 소개 탭] */}
        {activeTab === 'about' && (
          <section className="bg-slate-800 p-8 rounded-2xl border border-slate-700 space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-2 text-indigo-300">👋 대회 개요</h2>
              <p className="text-slate-300 leading-relaxed">본 대회는 내부 역량 강화 및 친목 도모를 위한 e스포츠 대회입니다. 공정한 경기 진행을 위해 아래 규칙을 준수해 주세요.</p>
            </div>
            <hr className="border-slate-700" />
            {/* 2. 대회 일정 */}
            <div>
              <h2 className="text-xl font-bold mb-4 text-indigo-300 flex items-center gap-2">📅 대회 일정</h2>
              <div className="relative border-l-2 border-indigo-500/30 ml-3 pl-6 space-y-5">
                
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div>
                  <div className="text-xs text-indigo-400 font-semibold">6월 21일 (일)</div>
                  <div className="font-semibold text-slate-200 mt-0.5">참가 신청 마감</div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div>
                  <div className="text-xs text-indigo-400 font-semibold">6월 27, 28일 (토,일)</div>
                  <div className="font-semibold text-slate-200 mt-0.5">모의내전 진행</div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                  <div className="text-xs text-emerald-400 font-semibold">6월 29일 (월)</div>
                  <div className="font-semibold text-slate-100 mt-0.5">팀장 선별 및 팀원 경매 진행</div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                  <div className="text-xs text-emerald-400 font-semibold">7월 4일 (토) 20:00</div>
                  <div className="font-semibold text-slate-100 mt-0.5">조별예선 및 준결승 경기 진행</div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                  <div className="text-xs text-emerald-400 font-semibold">7월 5일 (일) 20:00</div>
                  <div className="font-semibold text-slate-100 mt-0.5">결승 경기 진행</div>
                </div>

              </div>
            </div>
            
            <hr className="border-slate-700" />
            
            {/* 3. 상금 구조 */}
            <div>
              <h2 className="text-xl font-bold mb-2 text-indigo-300">💰 상금 구조</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li><span className="font-medium text-slate-200">1등 팀:</span> 인당 100,000원</li>
                <li><span className="font-medium text-slate-200">2등 팀:</span> 황금올리브 기프티콘</li>
                <li><span className="font-medium text-slate-200">3등 팀:</span> 배민 1만원 상품권</li>
              </ul>
            </div>
          </section>
        )}

        {/* [참가자 정보 탭] */}
        {activeTab === 'players' && (
          <section className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
            <div className="flex justify-between items-center mb-4 border-b border-slate-700 pb-2">
              <h2 className="text-xl font-bold text-indigo-300">👥 전체 참가자 명단</h2>
              <span className="text-xs text-slate-400">* 카드를 클릭하면 상세 정보가 열립니다.</span>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {/* 안전장치 팁 적용: teamsData가 빈 배열이거나 없을 때 에러 방지 */}
              {(teamsData || []).flatMap(team => (team?.members || []).map(member => ({...member, teamName: team.teamName})))
                .map((player, idx) => {
                  const isExpanded = expandedPlayerId === player.id;
                  return (
                    <div key={player.id || idx} className="border border-slate-700/60 rounded-xl overflow-hidden bg-slate-900/40 transition-all">
                      
                      {/* 기본 카드 영역 (클릭하는 곳) */}
                      <div 
                        onClick={() => togglePlayerExpand(player.id)}
                        className={`p-4 flex justify-between items-center cursor-pointer hover:bg-slate-800/60 transition-all ${isExpanded ? 'bg-slate-800/40 border-b border-slate-700' : ''}`}
                      >
                        <div>
                          <div className="font-bold text-lg flex items-center gap-2">
                            {player.name}
                            <span className="text-xs font-normal text-slate-400">({player.teamName})</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-xs bg-indigo-500/10 text-indigo-400 px-2.5 py-1 rounded-md font-medium">
                            {player.role}
                          </span>
                          <span className="text-slate-500 text-sm">
                            {isExpanded ? '▲' : '▼'}
                          </span>
                        </div>
                      </div>

                      {/* 확장 영역 */}
                      <div className={`transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-60 p-5 bg-slate-900/20' : 'max-h-0 overflow-hidden'}`}>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                          <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/40">
                            <div className="text-xs text-slate-400 mb-1">🥇 최고 티어</div>
                            <div className="font-semibold text-amber-400">{player.highestTier || '정보 없음'}</div>
                          </div>
                          <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/40">
                            <div className="text-xs text-slate-400 mb-1">🔥 현재 티어</div>
                            <div className="font-semibold text-indigo-400">{player.currentTier || '정보 없음'}</div>
                          </div>
                          <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/40 sm:col-span-1">
                            <div className="text-xs text-slate-400 mb-1">🎯 주 사용 챔피언</div>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {player.mostChampions?.map((champ, cIdx) => (
                                <span key={cIdx} className="text-xs bg-slate-700 px-2 py-0.5 rounded text-slate-200">
                                  {champ}
                                </span>
                              )) || '정보 없음'}
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  );
              })}
            </div>
          </section>
        )}

        {/* [팀 정보 탭] */}
        {activeTab === 'teams' && (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 안전장치 팁 적용 */}
            {(teamsData || []).map((team, idx) => (
              <div key={idx} className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                <div className="flex justify-between items-center mb-4 border-b border-slate-700 pb-2">
                  <h3 className="text-lg font-bold text-indigo-300">🛡️ {team.teamName}</h3>
                  <span className="text-xs text-slate-400">{(team.members || []).length}인조</span>
                </div>
                <div className="space-y-2">
                  {(team.members || []).map((member, mIdx) => (
                    <div key={mIdx} className="flex justify-between items-center bg-slate-900/40 p-3 rounded-lg">
                      <span className="font-semibold">{member.name}</span>
                      <span className="text-sm text-slate-400">{member.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* [경기 일정/결과 탭] */}
        {activeTab === 'schedule' && (
          <section className="space-y-4">
            {/* 안전장치 팁 적용 */}
            {(scheduleData || []).map((match, idx) => (
              <div key={idx} className="bg-slate-800 p-5 rounded-xl border border-slate-700 flex flex-col md:flex-row md:items-center justify-between gap-4">
                
                {/* 왼쪽: 라운드 및 날짜 (모바일에서는 상단, PC에서는 왼쪽 고정) */}
                <div className="text-sm text-slate-400 md:min-w-[180px] text-center md:text-left">
                  <span className="font-bold text-indigo-400 mr-2">[{match.round}]</span>
                  {match.date}
                </div>
                
                {/* 가운데: 완벽한 정중앙 스코어보드 UI */}
                <div className="flex-1 flex items-center justify-center w-full my-2 md:my-0">
                  {/* A팀 명 (오른쪽 정렬로 스코어와 밀착) */}
                  <div className="flex-1 text-right pr-4 md:pr-6">
                    <span className="font-bold text-base md:text-lg block truncate">{match.teamA}</span>
                  </div>
                  
                  {/* 스코어 박스 (항상 정중앙 유지) */}
                  <div className="bg-slate-900 px-5 py-1.5 rounded-lg font-mono text-xl tracking-wider text-indigo-300 font-bold min-w-[90px] text-center shrink-0 shadow-inner border border-slate-700/50">
                    {match.status === '종료' ? `${match.scoreA} : ${match.scoreB}` : 'VS'}
                  </div>
                  
                  {/* B팀 명 (왼쪽 정렬로 스코어와 밀착) */}
                  <div className="flex-1 text-left pl-4 md:pl-6">
                    <span className="font-bold text-base md:text-lg block truncate">{match.teamB}</span>
                  </div>
                </div>
                
                {/* 오른쪽: 상태 표시 배지 (모바일에서는 하단, PC에서는 오른쪽 고정) */}
                <div className="md:min-w-[100px] text-center md:text-right">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                    match.status === '종료' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  }`}>
                    {match.status}
                  </span>
                </div>

              </div>
            ))}
          </section>
        )}

      </main>
    </div>
  );
}
