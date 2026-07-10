export interface Project {
	name: string;
	technologies: string;
	description: string;
	repo?: string;
	role?: string;
	status?: string;
}

export interface PortfolioData {
	terminal: {
		username: string;
		hostname: string;
	};
	profile: {
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
	};
	projects: Project[];
	trajectory: {
		experience: string;
		education: string;
		certifications: string;
	};
	contact: {
		email: string;
		linkedin: string;
		github: string;
	};
	neofetch: {
		githubUrl: string;
	};
}

export const portfolioData: PortfolioData = {
	// Terminal system info
	terminal: {
		username: "fabio",
		hostname: "portfolio",
	},

	// Block 1: Whoami / Biography
	profile: {
		fullName: "Fabio Alberto Mijango Serrano",
		role: "Software Engineering Student // Junior Software Engineer",
		specialization:
			"Focus on low-level graphics, backend architecture, and Linux system administration.",
		skills: {
			languages: ["C++", "Java", "Python", "JavaScript", "HTML5/CSS3"],
			frameworks: [
				"SDL3",
				"SFML",
				"Spring",
				"Springboot",
				"Node.js",
				"React",
				"Tailwind CSS",
			],
			databases: ["PostgreSQL", "Microsoft SQL Server", "MySQL", "MongoDB"],
			tools: [
				"Git / GitHub",
				"Linux / Bash",
				"Docker",
				"Automated Pipelines",
				"SCRUM / Agile",
			],
			softSkills: [
        "Self-Taught",
        "Problem Solving",
        "Critical Thinking",
        "Teamwork",
        "Adaptability / Fast Learner",
        "Organization and Planning",
      ],
		},
	},

	// Block 2: Projects (Structured for tree rendering)
	projects: [
		{
			name: "SGEL",
			technologies: "C++20, SDL3, CMake, GitHub Actions, Doxygen",
			description:
				"Development of a custom C++ 2D Game Engine integrating SDL3.",
			repo: "github.com/fabiomijango/SGEL",
			role: "Core Developer",
			status: "In Development",
		},
	],

	// Block 3: Trajectory (Experience, Education, Certifications)
	trajectory: {
		experience:
			"Digital Trainee at Banco Cuscatlán. Participation in technology department projects and technical evaluations.",
		education: "Software Engineering Student.",
		certifications: "Business Intelligence (BI) Analyst Bootcamp (Kodigo).",
	},

	// Block 4: Contact & Social links
	contact: {
		email: "FabioMijango@gmail.com",
		linkedin: "linkedin.com/in/fabiomijango0810",
		github: "github.com/fabiomijango",
	},

	// Neofetch custom settings
	neofetch: {
		githubUrl:
			"https://raw.githubusercontent.com/FabioMijango/FabioMijango/refs/heads/main/dark_mode.svg",
	},
};
