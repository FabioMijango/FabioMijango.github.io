import React from 'react';

interface TerminalHeaderProps {
  username: string;
  hostname: string;
}

export const TerminalHeader: React.FC<TerminalHeaderProps> = ({ username, hostname }) => {
  return (
    <div className="bg-[#161b22] border-b border-[#21262d] px-4 py-3 flex items-center justify-between select-none flex-shrink-0 w-full">
      {/* macOS Action Buttons */}
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
      </div>
      
      {/* Active Session Title */}
      <div className="text-xs text-[#8b949e] font-bold tracking-wider uppercase">
        {username}@{hostname}: ~
      </div>
      
      {/* Right side status indicator */}
      <div className="text-[10px] text-emerald-500 font-semibold flex items-center gap-1.5 justify-end">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        <span className="hidden sm:inline">ONLINE</span>
      </div>
    </div>
  );
};
