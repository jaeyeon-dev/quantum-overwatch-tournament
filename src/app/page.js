'use client';

import { useState } from 'react';
import fullData from './teams.json';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');
  const [openTeamId, setOpenTeamId] = useState(null);

  // 데이터 안정성 확보 (파일이 비어있거나 깨졌을 때를 대비한 방어 코드)
  const teams = fullData?.teams || [];
  const matches = fullData?.matches || [];

  // 전체 참가자 명단 추출 (참가자 정보 탭용)
  const allPlayers = teams.flatMap(team => 
    (team.members || []).map(member => ({ ...member, teamName: team.teamName }))
  );

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

      {/* 5개 네비게이션 탭 라인업 */}
      <nav className="max-w-5xl mx-auto my-8 px-4">
        <div className="flex flex-wrap justify-center gap-2 bg-slate-900/60 p-2 rounded-2xl border border-slate-800">
          {[
            { id: 'about', label: '📢 대회 소개' },
            { id: 'teams', label: '🛡️ 팀 정보' },
            { id: 'players', label: '👤 참가자 정보' },
            { id: 'schedule', label: '📊 경기 일정/결과' },
            { id: 'guide', label: '📝 대회 가이드' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === tab.id 
                  ? 'bg-indigo-600 text-white shadow-md border border-indigo-500' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* 본문 콘텐츠 허브 */}
      <main className="max-w-4xl mx-auto px-6 pb-24">
        
        <main className="max-w-5xl mx-auto px-6 pb-20">
        
        {/* [대회 소개 탭] */}
        {activeTab === 'about' && (
          <section className="bg-slate-800 p-8 rounded-2xl border border-slate-700 space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-2 text-indigo-300">👋 대회 개요</h2>
              <p className="text-slate-300 leading-relaxed">본 대회는 내부 역량 강화 및 친목 도모를 위한 e스포츠 대회입니다. 공정한 경기 진행을 위해 아래 규칙을 준수해 주세요.</p>
            </div>
            <hr className="border-slate-700" />
            {/* 2. 대회 일정 (새로 추가된 영역) */}
            <div>
              <h2 className="text-xl font-bold mb-4 text-indigo-300 flex items-center gap-2">📅 대회 일정</h2>
              <div className="relative border-l-2 border-indigo-500/30 ml-3 pl-6 space-y-5">
                
                {/* 일정 항목 1 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div>
                  <div className="text-xs text-indigo-400 font-semibold">6월 21일 (일)</div>
                  <div className="font-semibold text-slate-200 mt-0.5">참가 신청 마감</div>
                </div>

                {/* 일정 항목 2 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div>
                  <div className="text-xs text-indigo-400 font-semibold">6월 27, 28일 (토,일)</div>
                  <div className="font-semibold text-slate-200 mt-0.5">모의내전 진행</div>
                </div>

                {/* 일정 항목 3 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                  <div className="text-xs text-emerald-400 font-semibold">6월 29일 (월)</div>
                  <div className="font-semibold text-slate-100 mt-0.5">팀장 선별 및 팀원 경매 진행</div>
                </div>

                {/* 일정 항목 4 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                  <div className="text-xs text-emerald-400 font-semibold">7월 4일 (토) 20:00</div>
                  <div className="font-semibold text-slate-100 mt-0.5">조별예선 및 준결승 경기 진행</div>
                </div>

                {/* 일정 항목 5 */}
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

        {/* 2. 팀 정보 */}
        {activeTab === 'teams' && (
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider px-1">출전 팀 스쿼드 ({teams.length})</h2>
            {teams.map((team) => {
              const isOpen = openTeamId === team.id;
              return (
                <div key={team.id} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-md hover:border-slate-700 transition-all">
                  <button onClick={() => setOpenTeamId(isOpen ? null : team.id)} className="w-full text-left px-6 py-4.5 flex justify-between items-center cursor-pointer hover:bg-slate-850/30">
                    <div>
                      <h3 className="text-base font-bold text-white flex items-center gap-2">
                        <span className="text-indigo-400 font-black">#{team.id}</span> {team.teamName}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">팀 리더: <span className="text-purple-300 font-medium">{team.captain}</span></p>
                    </div>
                    <span className={`text-xs text-indigo-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-slate-800 bg-slate-950/30 px-6 py-2 divide-y divide-slate-850">
                      {(team.members || []).map((member, idx) => (
                        <div key={idx} className="py-3 flex justify-between items-center text-xs sm:text-sm">
                          <div className="flex items-center space-x-3">
                            <span className="font-bold text-slate-200">{member.name}</span>
                            <span className="px-1.5 py-0.5 rounded text-[11px] font-medium bg-slate-800 text-slate-400">{member.role}</span>
                          </div>
                          <div className="flex items-center space-x-4 text-xs">
                            <span className="text-amber-400 font-bold">✨ {member.tier}</span>
                            <span className="text-slate-500">모스트: <span className="text-slate-300">{member.most}</span></span>
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

        {/* 3. 참가자 정보 */}
        {activeTab === 'players' && (
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider px-1">전체 플레이어 가이드 ({allPlayers.length})</h2>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-950 text-slate-400 border-b border-slate-800 font-bold">
                    <tr>
                      <th className="px-6 py-3.5">이름</th>
                      <th className="px-6 py-3.5">포지션</th>
                      <th className="px-6 py-3.5">티어</th>
                      <th className="px-6 py-3.5">소속 팀</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-850">
                    {allPlayers.map((player, idx) => (
                      <tr key={idx} className="hover:bg-slate-850/20 transition-colors">
                        <td className="px-6 py-4 font-bold text-white">{player.name}</td>
                        <td className="px-6 py-4 text-slate-300">{player.role}</td>
                        <td className="px-6 py-4 text-amber-400 font-medium">{player.tier}</td>
                        <td className="px-6 py-4 text-indigo-300 font-medium max-w-[150px] truncate">{player.teamName}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 4. 경기 일정/결과 */}
        {activeTab === 'schedule' && (
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider px-1">타임라인 및 스코어 보드</h2>
            <div className="space-y-3">
              {matches.map((match) => (
                <div key={match.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex flex-col items-center md:items-start">
                    <span className="text-[11px] font-bold tracking-wider px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 border border-slate-750">
                      {match.round}
                    </span>
                    <span className="text-xs text-slate-500 mt-1.5">{match.time}</span>
                  </div>
                  
                  {/* 스코어보드 UI */}
                  <div className="flex items-center space-x-6 my-2 md:my-0">
                    <div className="text-right min-w-[120px]">
                      <p className={`text-sm font-bold ${match.winner === match.teamA ? 'text-indigo-400 font-black' : 'text-slate-300'}`}>{match.teamA}</p>
                    </div>
                    <div className="bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 flex items-center gap-3 font-mono font-black text-base">
                      <span className={match.winner === match.teamA ? 'text-indigo-400' : 'text-slate-500'}>{match.scoreA}</span>
                      <span className="text-slate-700">:</span>
                      <span className={match.winner === match.teamB ? 'text-indigo-400' : 'text-slate-500'}>{match.scoreB}</span>
                    </div>
                    <div className="text-left min-w-[120px]">
                      <p className={`text-sm font-bold ${match.winner === match.teamB ? 'text-indigo-400 font-black' : 'text-slate-300'}`}>{match.teamB}</p>
                    </div>
                  </div>

                  <div>
                    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${
                      match.status === '종료'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                        : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                    }`}>
                      ● {match.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. 대회 가이드 */}
        {activeTab === 'guide' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl space-y-6">
            <div>
              <h2 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-indigo-400">■</span> 매치 운영 프로세스
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-4">
                본 대회는 오버워치 2 사용자 지정 대전 기능을 사용하여 전 경기 5대 5 역할 고정 매치업으로 운영됩니다. 전장 픽 및 밴 구조는 경기 당일 디스코드를 통해 공지됩니다.
              </p>
            </div>
            <div className="border-t border-slate-800 pt-6">
              <h2 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-purple-400">■</span> 패널티 규칙
              </h2>
              <ul className="list-disc list-inside text-xs sm:text-sm text-slate-400 space-y-1.5 pl-4">
                <li>경기 시작 시각 기준 10분 지각 시 해당 세트 기권패(0:2) 누적.</li>
                <li>타 팀원에 대한 인게임 악의적 도발 혹은 모욕 행위 시 몰수패 처리 가능.</li>
              </ul>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
