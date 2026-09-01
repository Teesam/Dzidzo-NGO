import coffee from "@/assets/coffee.jpg";
import teacherStudents from "@/assets/teacher-students.jpg";
import childReading from "@/assets/child-reading.jpg";

export const upcomingEvents = [
  {
    slug: "education-fundraising-evening",
    title: "Coffee Day Fundraiser",
    date: "Coming soon",
    time: "To be confirmed",
    location: "Suffolk, United Kingdom",
    image: coffee,
    excerpt:
      "Join us for an afternoon dedicated to raising support for children's education and future opportunities.",
    description: [
      `Join us for a cosy Autumn Coffee Day in support of our fundraising efforts. Enjoy good company, warm drinks
       and sweet treats while helping us make a difference through our community and charitable projects.`
    ]
  },
  // {
  //   slug: "volunteer-information-session",
  //   title: "Volunteer Information Session",
  //   date: "Saturday, 14 November 2026",
  //   time: "11:00 AM",
  //   location: "Online",
  //   image: teacherStudents,
  //   excerpt:
  //     "A session for anyone interested in sharing time, skills, or professional experience with the foundation.",
  //   description: [
  //     "This online session is for prospective volunteers who want to understand how they can support the Dzidzo Foundation's mission.",
  //     "We will introduce the foundation's current areas of work, the kinds of volunteer support that are most helpful, and the next steps for getting involved.",
  //     "Whether you can help with outreach, fundraising, administration, education, or partnerships, this session will help you find a practical way to contribute.",
  //   ],
  // },
  // {
  //   slug: "community-learning-support-day",
  //   title: "Community Learning Support Day",
  //   date: "Saturday, 5 December 2026",
  //   time: "10:00 AM",
  //   location: "Community venue to be confirmed",
  //   image: childReading,
  //   excerpt:
  //     "A day centred on learning resources, awareness, and practical support for children and families.",
  //   description: [
  //     "Community Learning Support Day is designed to bring attention to the importance of basic reading, writing, and learning support for every child.",
  //     "The event will focus on practical ways communities can encourage education, support families, and help children feel confident in their learning journey.",
  //     "It will also provide an opportunity for supporters to connect with the foundation and learn how our programmes help remove barriers to education.",
  //   ],
  // },
];

export type UpcomingEvent = (typeof upcomingEvents)[number];
