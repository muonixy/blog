// Timeline data configuration file
// Used to manage data for the timeline page

export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	type: "education" | "work" | "project" | "achievement";
	startDate: string;
	endDate?: string; // If empty, it means current
	location?: string;
	organization?: string;
	position?: string;
	skills?: string[];
	achievements?: string[];
	links?: {
		name: string;
		url: string;
		type: "website" | "certificate" | "project" | "other";
	}[];
	icon?: string; // Iconify icon name
	color?: string;
	featured?: boolean;
}

// 时间线数据 - 已根据您的真实经历进行重写
export const timelineData: TimelineItem[] = [
	{
		id: "current-undergraduate-study",
		title: "就读于重庆移通学院 (软件工程专业)",
		description:
			"专升本阶段，主攻软件工程专业方向，系统性学习Web全栈开发、数据库系统、软件开发流程与项目管理等核心课程。",
		type: "education",
		startDate: "2024-09-01",
		// endDate 为空，表示“至今”
		location: "重庆",
		organization: "重庆移通学院",
		skills: ["Java", "Spring Boot", "Vue 3", "MySQL", "Git", "软件工程"],
		achievements: [
			"当前状态：在读",
			"正在进行“校园论坛系统”项目作为课程实践",
		],
		icon: "material-symbols:school",
		color: "#059669",
		featured: true,
	},
	{
		id: "college-assistant-work",
		title: "校学生处助理",
		description:
			"在校学生处担任学生助理，主要负责日常文件整理、活动组织协调以及师生间的信息传达工作。",
		type: "work", // 这段经历可以归类为“工作”经验
		startDate: "2022-09-01", // 假设一个合理的任职时间
		endDate: "2023-09-01",
		location: "重庆",
		organization: "重庆工程职业技术学院 - 学生处",
		position: "学生助理",
		skills: ["沟通协调能力", "文件管理", "办公软件 (Office)"],
		achievements: [
			"因工作认真负责，荣获“优秀助理”荣誉称号",
			"有效提升了个人组织能力和执行力",
		],
		icon: "material-symbols:work",
		color: "#DC2626",
		featured: true,
	},
	{
		id: "college-graduation",
		title: "就读于重庆工程职业技术学院 (电子信息工程技术专业)",
		description:
			"完成了电子信息工程技术专业的专科学习，掌握了电路分析、单片机原理及基础编程知识，为后续深入学习软件工程打下了坚实的硬件和底层基础。",
		type: "education",
		startDate: "2021-09-01",
		endDate: "2024-06-30",
		location: "重庆",
		organization: "重庆工程职业技术学院",
		achievements: [
			"顺利完成所有专业课程并毕业",
			"在校期间担任学生处助理并获得荣誉",
		],
		icon: "material-symbols:school",
		color: "#2563EB",
	},
];

// --- 下面的功能函数都不需要修改 ---
// --- 它们会自动根据上面的 timelineData 数组工作 ---

// Get timeline statistics
export const getTimelineStats = () => {
	const total = timelineData.length;
	const byType = {
		education: timelineData.filter((item) => item.type === "education").length,
		work: timelineData.filter((item) => item.type === "work").length,
		project: timelineData.filter((item) => item.type === "project").length,
		achievement: timelineData.filter((item) => item.type === "achievement")
			.length,
	};

	return { total, byType };
};

// Get timeline items by type
export const getTimelineByType = (type?: string) => {
	if (!type || type === "all") {
		return timelineData.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
	}
	return timelineData
		.filter((item) => item.type === type)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// Get featured timeline items
export const getFeaturedTimeline = () => {
	return timelineData
		.filter((item) => item.featured)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// Get current ongoing items
export const getCurrentItems = () => {
	return timelineData.filter((item) => !item.endDate);
};

// Calculate total work experience
export const getTotalWorkExperience = () => {
	const workItems = timelineData.filter((item) => item.type === "work");
	let totalMonths = 0;

	workItems.forEach((item) => {
		const startDate = new Date(item.startDate);
		const endDate = item.endDate ? new Date(item.endDate) : new Date();
		const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
		const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
		totalMonths += diffMonths;
	});

	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};