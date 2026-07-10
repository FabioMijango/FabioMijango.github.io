import { useState, useEffect } from 'react';
import { portfolioData } from './portfolioData';
import NeofetchRenderer from './components/NeofetchRenderer';
import { TerminalHeader } from './components/TerminalHeader';
import { WhoamiBlock } from './components/WhoamiBlock';
import { ProjectsBlock } from './components/ProjectsBlock';
import { TrajectoryBlock } from './components/TrajectoryBlock';
import { ContactBlock } from './components/ContactBlock';
import { StatusBar } from './components/StatusBar';

export default function App() {
  const { terminal, profile, projects, trajectory, contact, neofetch } = portfolioData;

  // Daily Cache Buster string to bypass GitHub Raw caching and guarantee daily updates
  const todayDate = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
  const neofetchSrc = `${neofetch.githubUrl}?t=${todayDate}`;

  // State for live-updated simulated system information
  const [systemTime, setSystemTime] = useState('');
  const [cpuLoad, setCpuLoad] = useState(3.4);
  const [ramUsage, setRamUsage] = useState(4.18);
  const [temperature, setTemperature] = useState(39.5);
  const [uptimeSeconds, setUptimeSeconds] = useState(0);

  useEffect(() => {
    const updateMetrics = () => {
      const now = new Date();
      
      // Live current local date/time
      setSystemTime(
        now.toLocaleString('en-US', {
          weekday: 'short',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );

      // Subtle fluctuation for CPU Load
      setCpuLoad((prev) => {
        const change = (Math.random() - 0.5) * 1.2;
        return Math.max(1.2, Math.min(18.5, +(prev + change).toFixed(1)));
      });

      // Subtle fluctuation for RAM Usage (GB out of 16GB)
      setRamUsage((prev) => {
        const change = (Math.random() - 0.5) * 0.04;
        return Math.max(4.05, Math.min(4.35, +(prev + change).toFixed(2)));
      });

      // Subtle fluctuation for temperature (°C)
      setTemperature((prev) => {
        const change = (Math.random() - 0.5) * 0.6;
        return Math.max(37.0, Math.min(44.5, +(prev + change).toFixed(1)));
      });

      // Ticking Uptime
      setUptimeSeconds((prev) => prev + 1);
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen bg-[#0d1117] text-[#c9d1d9] font-mono flex flex-col overflow-hidden select-text selection:bg-[#23d18b]/30">
      
      {/* Terminal Header Bar spanning the full width of the viewport */}
      <TerminalHeader username={terminal.username} hostname={terminal.hostname} />

      {/* Terminal Body occupying the rest of the entire screen with customized scrolling */}
      <div className="flex-1 overflow-y-auto p-6 sm:p-10 md:p-12 text-sm sm:text-base leading-relaxed scrollbar-thin scrollbar-track-[#0d1117] scrollbar-thumb-[#21262d]">
        <div className="max-w-4xl mx-auto">
          
          {/* Block 1: whoami */}
          <WhoamiBlock
            username={terminal.username}
            hostname={terminal.hostname}
            fullName={profile.fullName}
            role={profile.role}
            specialization={profile.specialization}
            skills={profile.skills}
          />

          {/* Block 2: projects (with ASCII tree structure styling) */}
          <ProjectsBlock
            username={terminal.username}
            hostname={terminal.hostname}
            projects={projects}
          />

          {/* Block 3: trajectory */}
          <TrajectoryBlock
            username={terminal.username}
            hostname={terminal.hostname}
            trajectory={trajectory}
          />

          {/* Block 4: contact */}
          <ContactBlock
            username={terminal.username}
            hostname={terminal.hostname}
            contact={contact}
          />

          {/* Block 5: neofetch */}
          <div className="mb-8" id="block-neofetch">
            <div>
              <span className="text-[#23d18b] font-bold">{terminal.username}@{terminal.hostname}:~$ </span>
              <span className="text-white font-medium">neofetch</span>
            </div>
            <div className="mt-4 pl-1 max-w-2xl w-full">
              <NeofetchRenderer src={neofetchSrc} />
            </div>
          </div>

          {/* Block 6: Active cursor */}
          <div id="block-final" className="pb-12">
            <span className="text-[#23d18b] font-bold">{terminal.username}@{terminal.hostname}:~$ </span>
            <span className="inline-block w-[10px] h-[18px] bg-[#c9d1d9] align-middle ml-1 animate-cursor-blink" id="cursor-terminal"></span>
          </div>

        </div>
      </div>

      {/* Sticky bottom Tmux/Powerline-style status bar */}
      <StatusBar
        uptimeSeconds={uptimeSeconds}
        cpuLoad={cpuLoad}
        ramUsage={ramUsage}
        temperature={temperature}
        systemTime={systemTime}
      />

    </div>
  );
}
