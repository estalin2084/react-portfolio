// src/content_option.js

const logotext = "Estalin";
const meta = {
    title: "Estalin Pena",
    description: "I’m Estalin, a technology student at Conestoga College, Waterloo, Canada. I enjoy creating things that live on the internet.",
};

const introdata = {
    title: "I’m Estalin Pena",
    animated: {
        first: "I'm learning to code",
        second: "I wish I could code cool websites",
        third: "I want to develop mobile apps",
    },
    description: "Interesting thing to the day",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "Finishing my studies at Conestoga College.",
};

const worktimeline = [
    {
        jobtitle: "Developer Intern",
        where: "Tech Company",
        date: "2021",
    },
    {
        jobtitle: "Junior Developer",
        where: "Another Tech Company",
        date: "2022",
    },
    // Add more timeline events here
];

const skills = [{
    name: "Python",
    value: 40,
},
{
    name: "Django",
    value: 0,
},
{
    name: "JavaScript",
    value: 5,
},
{
    name: "React",
    value: 0,
},
{
    name: "Jquery",
    value: 0,
},
];

const services = [{
    title: "UI & UX Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
{
    title: "Mobile Apps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
{
    title: "Wordpress Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
];

const dataportfolio = [{
    img: "https://picsum.photos/400/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/800/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/600/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/300/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/700/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/600/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/300/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/550/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/700/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
];

const contactConfig = {
    YOUR_EMAIL: "name@domain.com",
    YOUR_FONE: "(555)123-4567",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra.",
    // Create an emailjs.com account
    // Check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,  // Added export for worktimeline
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
