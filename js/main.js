const { createApp } = Vue;

createApp({
	data() {
		return {
			todoList: [
				{
					text: "Quarterly Newsletter",
					state: true,
				},
				{
					text: "Recruiting blog post",
					state: false,
				},
				{
					text: "Mobile app launch",
					state: true,
				},
				{
					text: "Interview John H.",
					state: true,
				},
				{
					text: "Summit update to mobile",
					state: false,
				},
				{
					text: "Schedule meeting with Alex",
					state: true,
				},
				{
					text: "Hompage refresh",
					state: false,
				},
				{
					text: "Onboard new Sales team members",
					state: false,
				},
				{
					text: "Review editorial calendar",
					state: true,
				},
			],
		};
	},
}).mount("#app");
