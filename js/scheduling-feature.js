// Declaration

let dataContainer = document.getElementById("dynamic-feature__data");

const features = [
  {
    headline: "Comprehensive Time Management",
    body: "This tool redefines how you manage your time and tasks efficiently.",
  },
  {
    headline: "Beyond Scheduling",
    body: "Transform your workflow with an all-in-one solution for task organization.",
  },
  {
    headline: "Ultimate Task Manager",
    body: "Say goodbye to scattered schedules and hello to a streamlined system.",
  },
  {
    headline: "More Than Calendars",
    body: "This platform offers seamless integration with your daily planning needs.",
  },
  {
    headline: "Complete Task Manager",
    body: "It helps you stay on top of your goals, deadlines, and daily priorities.",
  },
  {
    headline: "Powerful Productivity Tool",
    body: "Enhance your productivity with advanced task management features.",
  },
  {
    headline: "Beyond Scheduling Apps",
    body: "This tool goes the extra mile by integrating project tracking and reminders.",
  },
  {
    headline: "Time and Tasks",
    body: "It’s not just about scheduling; it's about simplifying your entire workflow.",
  },
  {
    headline: "Scheduling to Projects",
    body: "Take control of your projects and deadlines all in one place.",
  },
  {
    headline: "Manage Your Day",
    body: "This tool turns chaos into order with its intuitive task management.",
  },
  {
    headline: "Future of Scheduling",
    body: "With this tool, scheduling is only the beginning of what you can achieve.",
  },
  {
    headline: "Effortless Task Management",
    body: "Stay on top of everything with integrated task lists and reminders.",
  },
  {
    headline: "Redefine Scheduling",
    body: "This tool is designed to keep you organized and efficient throughout your day.",
  },
  {
    headline: "New Era Organization",
    body: "This solution brings you task tracking and time management features in one.",
  },
  {
    headline: "Task and Scheduling",
    body: "From meetings to deadlines, everything is handled with precision.",
  },
  {
    headline: "Beyond Meetings",
    body: "Manage your tasks, projects, and priorities with ease.",
  },
  {
    headline: "Organize Everything",
    body: "This tool offers a comprehensive approach to time and project management.",
  },
  {
    headline: "All-in-One Productivity",
    body: "It's more than just a calendar; it's a powerful productivity enhancer.",
  },
  {
    headline: "Full-Service Scheduling",
    body: "Go beyond traditional scheduling with features that optimize your workflow.",
  },
  {
    headline: "Do More",
    body: "From time management to task prioritization, this tool does it all.",
  },
];

// FUNCTION

features.forEach((labels) => {
  // CREATES HTML EL
  const featureHeader = document.createElement("span");
  const featureDesc = document.createElement("p");

  //   ASSIGNS CLASS TO CREATED HTML EL
  featureHeader.className = "dynamic-feature__header";
  featureDesc.className = "dynamic-feature__desc";

  //   APPEND ARRAY DATA TO HTML RL
  featureHeader.innerText = `${labels.headline}`;
  featureDesc.innerText = `${labels.body}`;

  //   APPEND ALL TO CONTAINER
  dataContainer.appendChild(featureHeader);
  dataContainer.appendChild(featureDesc);
});
