import React from 'react';

interface StatusBarProps {
  uptimeSeconds: number;
  cpuLoad: number;
  ramUsage: number;
  temperature: number;
  systemTime: string;
}

export const StatusBar: React.FC<StatusBarProps> = ({
  uptimeSeconds,
  cpuLoad,
  ramUsage,
  temperature,
  systemTime,
}) => {
  const formatUptime = (totalSecs: number): string => {
    const days = Math.floor(totalSecs / (3600 * 24));
    const hours = Math.floor((totalSecs % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSecs % 3600) / 60);
    const seconds = totalSecs % 60;
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div
      className="bg-[#161b22] border-t border-[#21262d] text-xs text-[#8b949e] px-4 py-2 flex-shrink-0 flex items-center justify-between gap-y-1 font-mono select-none"
      id="terminal-status-bar"
    >
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="bg-[#23d18b] text-[#0d1117] px-1.5 py-0.5 rounded font-bold text-[10px]">
          SYSTEM
        </span>
        <span className="text-white hidden sm:inline">
          Uptime: <span className="text-[#c9d1d9]">{formatUptime(uptimeSeconds)}</span>
        </span>
        <span className="sm:hidden text-white">
          Up:{' '}
          <span className="text-[#c9d1d9]">
            {formatUptime(uptimeSeconds).split(' ').slice(-2).join(' ')}
          </span>
        </span>
      </div>

      <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs">
        <div className="flex items-center gap-1">
          <span className="text-[#8b949e]">CPU:</span>
          <span className="text-emerald-400 font-bold">{cpuLoad}%</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-[#8b949e]">RAM:</span>
          <span className="text-emerald-400 font-bold">{ramUsage}G</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-[#8b949e]">TEMP:</span>
          <span className="text-[#ffbd2e] font-bold">{temperature}°C</span>
        </div>
        <div className="hidden md:flex items-center gap-1">
          <span className="text-[#8b949e]">IP:</span>
          <span className="text-[#58a6ff]">192.168.1.104</span>
        </div>
        <div className="text-white bg-[#21262d] px-2 py-0.5 rounded text-[10px] hidden lg:block">
          {systemTime || '...'}
        </div>
      </div>
    </div>
  );
};
