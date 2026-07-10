import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ContactBlockProps {
  username: string;
  hostname: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
}

export const ContactBlock: React.FC<ContactBlockProps> = ({
  username,
  hostname,
  contact,
}) => {
  return (
    <div className="mb-8" id="block-contact">
      <div>
        <span className="text-[#23d18b] font-bold">
          {username}@{hostname}:~${' '}
        </span>
        <span className="text-white font-medium">./contact --info</span>
      </div>
      <div className="mt-2 text-[#c9d1d9] space-y-1 pl-1">
        <div>
          Email:{' '}
          <a
            href={`mailto:${contact.email}`}
            className="text-[#23d18b] underline hover:opacity-85 transition-opacity inline-flex items-center gap-1 break-all break-words"
          >
            {contact.email}
          </a>
        </div>
        <div>
          LinkedIn:{' '}
          <a
            href={`https://${contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#23d18b] underline hover:opacity-85 transition-opacity inline-flex items-center gap-1 break-all break-words"
          >
            {contact.linkedin}{' '}
            <ExternalLink size={12} className="inline opacity-70 flex-shrink-0" />
          </a>
        </div>
        <div>
          GitHub:{' '}
          <a
            href={`https://${contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#23d18b] underline hover:opacity-85 transition-opacity inline-flex items-center gap-1 break-all break-words"
          >
            {contact.github}{' '}
            <ExternalLink size={12} className="inline opacity-70 flex-shrink-0" />
          </a>
        </div>
      </div>
    </div>
  );
};
