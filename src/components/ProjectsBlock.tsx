import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Project } from '../portfolioData';

interface ProjectsBlockProps {
  username: string;
  hostname: string;
  projects: Project[];
}

export const ProjectsBlock: React.FC<ProjectsBlockProps> = ({
  username,
  hostname,
  projects,
}) => {
  return (
    <div className="mb-8" id="block-projects">
      <div>
        <span className="text-[#23d18b] font-bold">
          {username}@{hostname}:~${' '}
        </span>
        <span className="text-white font-medium">tree ./projects</span>
      </div>
      <div className="mt-2 text-[#c9d1d9] font-mono pl-1 select-text">
        <div className="text-white font-bold">projects</div>

        {projects.map((project, idx) => {
          const isLast = idx === projects.length - 1;
          const branchChar = isLast ? '└── ' : '├── ';
          const pipeChar = isLast ? '    ' : '│   ';

          interface DetailItem {
            label: string;
            value: string;
            isLink?: boolean;
          }

          // Build dynamic tree leaves based on available fields
          const rawDetails: Array<DetailItem | null> = [
            { label: 'Technologies', value: project.technologies },
            project.role ? { label: 'Role', value: project.role } : null,
            project.status ? { label: 'Status', value: project.status } : null,
            project.repo ? { label: 'Repository', value: project.repo, isLink: true } : null,
            { label: 'Description', value: project.description },
          ];

          const details = rawDetails.filter(
            (d): d is DetailItem => d !== null
          );

          return (
            <div key={project.name} className="mt-2">
              <div className="flex items-start">
                <span className="flex-shrink-0 select-none whitespace-pre text-[#8b949e]">{branchChar}</span>
                <span className="text-emerald-400 font-bold flex-1 min-w-0">{project.name}</span>
              </div>
              {details.map((detail, dIdx) => {
                const isLastDetail = dIdx === details.length - 1;
                const detailBranch = isLastDetail ? '└── ' : '├── ';

                return (
                  <div key={detail.label} className="text-[#8b949e] flex items-start">
                    <span className="flex-shrink-0 select-none whitespace-pre">{pipeChar}{detailBranch}</span>
                    <div className="flex-1 min-w-0">
                      <span className="text-[#58a6ff]">{detail.label}:</span>
                      {detail.isLink ? (
                        <span className="text-[#c9d1d9] ml-1 break-all break-words">
                          <a
                            href={`https://${detail.value}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#23d18b] underline hover:opacity-85 transition-opacity inline-flex items-center gap-1 break-all break-words"
                          >
                            {detail.value}{' '}
                            <ExternalLink size={12} className="inline opacity-70 flex-shrink-0" />
                          </a>
                        </span>
                      ) : (
                        <span className="text-[#c9d1d9]"> {detail.value}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
