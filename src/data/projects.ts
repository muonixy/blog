// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
}

export const projectsData: Project[] = [
	{
		id: "campus-forum-system",
		title: "校园论坛系统",
		description:
			"一套专门面向校园群体的论坛系统，旨在解决主流社交平台大众化、缺乏校园场景定制化功能的问题。系统结合智能推荐算法与资源共享机制，提供课程资源共享、学术交流、社团活动管理等功能，并通过数据可视化技术直观展示校园热点，致力于营造一个健康、积极、高效的校园交流环境。",
		image: "",
		category: "web",
		techStack: ["Spring boot", "Vue 3", "MySQL", "Docker", "Redis", "Nginx", "Element Plus"],
		status: "in-progress",
		liveDemo: "",
		sourceCode: "",
		startDate: "2025-09-01",
		endDate: "",
		featured: true,
		tags: ["Java", "Full-Stack", "Forum"],
	},
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter((p) => p.status === "completed").length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => techSet.add(tech));
	});
	return Array.from(techSet).sort();
};
