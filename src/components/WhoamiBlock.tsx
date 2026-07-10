import React from 'react';

interface WhoamiBlockProps {
  username: string;
  hostname: string;
  fullName: string;
  role: string;
  specialization: string;
  skills: {
    languages: string[];
    frameworks: string[];
    databases: string[];
    tools: string[];
    softSkills: string[];
  };
}

export const WhoamiBlock: React.FC<WhoamiBlockProps> = ({
  username,
  hostname,
  fullName,
  role,
  specialization,
  skills,
}) => {
  return (
    <div className="mb-8" id="block-whoami">
      <div>
        <span className="text-[#23d18b] font-bold">
          {username}@{hostname}:~${' '}
        </span>
        <span className="text-white font-medium">whoami</span>
      </div>
      <div className="mt-2 text-[#c9d1d9] whitespace-pre-wrap pl-1">
        {fullName}
        <br />
        {role}.
        <br />
        {specialization}

        {/* Tech Stack Section */}
        <div className="mt-6 font-mono text-sm">
          <div className="text-white font-bold mb-3 flex items-center gap-1.5">
            <span className="text-emerald-400">[</span>
            <span>Skills &amp; Tech Stack</span>
            <span className="text-emerald-400">]</span>
          </div>
          <div className="space-y-2 pl-1.5 text-xs sm:text-sm">
            <div className="flex items-start">
              <span className="text-[#8b949e] mr-2 select-none whitespace-nowrap flex-shrink-0">├── Languages  :</span>
              <span className="text-[#c9d1d9]">{skills.languages.join(', ')}</span>
            </div>
            <div className="flex items-start">
              <span className="text-[#8b949e] mr-2 select-none whitespace-nowrap flex-shrink-0">├── Libs &amp; FWs :</span>
              <span className="text-[#c9d1d9]">{skills.frameworks.join(', ')}</span>
            </div>
            <div className="flex items-start">
              <span className="text-[#8b949e] mr-2 select-none whitespace-nowrap flex-shrink-0">├── Databases  :</span>
              <span className="text-[#c9d1d9]">{skills.databases.join(', ')}</span>
            </div>
            <div className="flex items-start">
              <span className="text-[#8b949e] mr-2 select-none whitespace-nowrap flex-shrink-0">├── Tools &amp; OS :</span>
              <span className="text-[#c9d1d9]">{skills.tools.join(', ')}</span>
            </div>
            <div className="flex items-start">
              <span className="text-[#8b949e] mr-2 select-none whitespace-nowrap flex-shrink-0">└── Soft Skills:</span>
              <span className="text-[#c9d1d9]">{skills.softSkills.join(', ')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
