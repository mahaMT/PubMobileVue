import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import("../views/Home.vue"),
		meta: {
			title: "日常巡查",
		},
	},
	{
		path: "/add",
		name: "Add",
		component: () => import("../views/Add.vue"),
		meta: {
			title: "新建场景",
		},
	},
	{
		path: "/detail",
		name: "Detail",
		component: () => import("../views/Detail.vue"),
		meta: {
			title: "项目详情",
		},
	},
	{
		path: "/evaluate",
		name: "Evaluate",
		component: () => import("../views/Evaluate.vue"),
		meta: {
			title: "巡查评分",
		},
	},
	{
		path: "/history",
		name: "History",
		component: () => import("../views/History.vue"),
		meta: {
			title: "巡查历史",
		},
	},
	{
		path: "/statistics",
		name: "Statistics",
		component: () => import("../views/Statistics.vue"),
		meta: {
			title: "巡查统计",
		},
	},
	{
		path: "/selectPeople",
		name: "SelectPeople",
		component: () => import("../views/SelectPeople.vue"),
		meta: {
			title: "选择人员",
		},
	},
	{
		path: "/selectPeopleOne",
		name: "SelectPeopleOne",
		component: () => import("../views/SelectPeopleOne.vue"),
		meta: {
			title: "选择人员",
		},
	},
	{
		path: "/project",
		name: "Project",
		component: () => import("../views/Project.vue"),
		meta: {
			title: "巡查项目",
		},
	},
	{
		path: "/selectInspection",
		name: "SelectInspection",
		component: () => import("../views/SelectInspection.vue"),
		meta: {
			title: "选择巡查对象",
		},
	}
	// {
	// 	path: "/",
	// 	name: "Home",
	// 	component: () => import("../views/Home.vue"),
	// 	meta: {
	// 		title: "日程管理", // 标题设置
	// 	},
	// },
];

const router = new VueRouter({
	mode: "hash",
	base: process.env.BASE_URL,
	routes,
});

export default router;
