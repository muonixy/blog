// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: number;
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	// --- 正在学习的技术 (初学) ---
	{
		id: "java",
		name: "Java",
		description: "正在学习 Java 基础语法和面向对象编程，主要用于 Spring Boot 后端开发。",
		icon: "logos:java",
		category: "backend",
		level: 10,
		experience: { years: 0, months: 1 },
		projects: ["campus-forum-system"],
		color: "#ED8B00",
	},
	{
		id: "spring Boot",
		name: "Spring Boot",
		description: "初步学习使用 Spring Boot 搭建 Web 项目，了解如何创建控制器和服务来处理 HTTP 请求。",
		icon: "logos:spring-icon",
		category: "backend",
		level: 2,
		experience: { years: 0, months: 1 },
		projects: ["campus-forum-system"],
		color: "#6DB33F",
	},
	{
		id: "vue",
		name: "Vue 3",
		description: "正在学习 Vue 3 的基础知识，包括声明式渲染、组件基础和响应式 API。",
		icon: "logos:vue",
		category: "frontend",
		level: 8,
		experience: { years: 0, months: 1 },
		projects: ["campus-forum-system"],
		color: "#4FC08D",
	},
    {
		id: "element-plus",
		name: "Element Plus",
		description: "学习并使用 Element Plus UI 组件库，来快速构建项目的前端用户界面。",
		icon: "logos:element",
		category: "frontend",
		level: 1,
		experience: { years: 0, months: 1 },
		projects: ["campus-forum-system"],
		color: "#409EFF",
	},
	{
		id: "python",
		name: "Python",
		description: "了解 Python 的基本语法，可用于编写简单的脚本和进行数据处理。",
		icon: "logos:python",
		category: "backend",
		level: 10,
		experience: { years: 0, months: 1 },
		color: "#3776AB",
	},
	{
		id: "nodejs",
		name: "Node.js",
		description: "对 Node.js 有初步了解，知道它可以作为 JavaScript 的后端运行环境。",
		icon: "logos:nodejs-icon",
		category: "backend",
		level: 10,
		experience: { years: 0, months: 1 },
		color: "#339933",
	},
	{
		id: "tailwindcss",
		name: "Tailwind CSS",
		description: "初步接触 Tailwind CSS，学习使用其原子化类名来为网页添加样式。",
		icon: "logos:tailwindcss-icon",
		category: "frontend",
		level: 6,
		experience: { years: 0, months: 1 },
		projects: ["campus-forum-system"],
		color: "#06B6D4",
	},
	{
		id: "mysql",
		name: "MySQL",
		description: "学习基本的 SQL 语句，包括增删改查 (CRUD)，并了解如何在项目中使用 MySQL 数据库。",
		icon: "logos:mysql-icon",
		category: "database",
		level: 10,
		experience: { years: 0, months: 1 },
		projects: ["campus-forum-system"],
		color: "#4479A1",
	},
	{
		id: "git",
		name: "Git",
		description: "正在学习使用 Git 进行版本控制，掌握 clone, add, commit, push 等基本命令。",
		icon: "logos:git-icon",
		category: "tools",
		level: 10,
		experience: { years: 0, months: 1 },
		color: "#F05032",
	},
	{
		id: "docker",
		name: "Docker",
		description: "对 Docker 容器化技术有初步了解，知道其在应用部署中的作用和优势。",
		icon: "logos:docker-icon",
		category: "tools",
		level: 1,
		experience: { years: 0, months: 0 },
		projects: ["campus-forum-system"],
		color: "#2496ED",
	},

	// --- 熟练使用的开发工具 ---
	{
		id: "vscode",
		name: "VS Code",
		description: "熟练使用 VS Code 作为主要的前端和脚本代码编辑器，熟悉其插件生态和常用配置。",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: 52,
		experience: { years: 1, months: 6 },
		color: "#007ACC",
	},
	{
		id: "intellij",
		name: "IntelliJ IDEA",
		description: "熟练使用 IntelliJ IDEA 进行 Java 和 Spring Boot 项目开发，精通其调试和代码辅助功能。",
		icon: "logos:intellij-idea",
		category: "tools",
		level: 50,
		experience: { years: 0, months: 3 },
		color: "#000000",
	},
	{
		id: "pycharm",
		name: "PyCharm",
		description: "熟练使用 PyCharm 进行 Python 开发，了解其虚拟环境管理和调试功能。",
		icon: "logos:pycharm",
		category: "tools",
		level: 40,
		experience: { years: 0, months: 2 },
		color: "#21D789",
	},
	
];

// Get skill statistics
export const getSkillStats = () => {
	const total = skillsData.length;
	const byLevel = {
		beginner: skillsData.filter((s) => s.level >= 1 && s.level <= 25).length,
		intermediate: skillsData.filter((s) => s.level >= 25 && s.level <= 50).length,
		advanced: skillsData.filter((s) => s.level >= 50 && s.level <= 80).length,
		expert: skillsData.filter((s) => s.level > 80).length,
	};
	const byCategory = {
		frontend: skillsData.filter((s) => s.category === "frontend").length,
		backend: skillsData.filter((s) => s.category === "backend").length,
		database: skillsData.filter((s) => s.category === "database").length,
		tools: skillsData.filter((s) => s.category === "tools").length,
		other: skillsData.filter((s) => s.category === "other").length,
	};

	return { total, byLevel, byCategory };
};

// Get skills by category
export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return skillsData;
	}
	return skillsData.filter((s) => s.category === category);
};

// Get advanced skills
export const getAdvancedSkills = () => {
	return skillsData.filter(
		(s) => s.level >= 50, // Advanced and expert levels are 50 and above
	);
};

// Calculate total years of experience
export const getTotalExperience = () => {
	const totalMonths = skillsData.reduce((total, skill) => {
		return total + skill.experience.years * 12 + skill.experience.months;
	}, 0);
	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
