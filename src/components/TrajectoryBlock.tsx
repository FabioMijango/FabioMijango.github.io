import React from 'react';

interface TrajectoryBlockProps {
  username: string;
  hostname: string;
  trajectory: {
    experience: string;
    education: string;
    certifications: string;
  };
}

export const TrajectoryBlock: React.FC<TrajectoryBlockProps> = ({
  username,
  hostname,
  trajectory,
}) => {
  return (
    <div className="mb-8" id="block-trajectory">
      <div>
        <span className="text-[#23d18b] font-bold">
          {username}@{hostname}:~${' '}
        </span>
        <span className="text-white font-medium">cat trajectory.txt</span>
      </div>
      <div className="mt-2 text-[#c9d1d9] whitespace-pre-wrap pl-1 space-y-1">
        <div>
          <span className="text-[#23d18b] font-bold mr-1.5">&gt;&gt; EXPERIENCE:</span>
          <span>{trajectory.experience}</span>
        </div>
        <div>
          <span className="text-[#23d18b] font-bold mr-1.5">&gt;&gt; EDUCATION:</span>
          <span>{trajectory.education}</span>
        </div>
        <div>
          <span className="text-[#23d18b] font-bold mr-1.5">&gt;&gt; TRAINING:</span>
          <span>{trajectory.certifications}</span>
        </div>
      </div>
    </div>
  );
};
