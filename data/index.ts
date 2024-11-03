export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experiences", link: "#experiences" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "As a highly adaptable Full-Stack Developer",
    description:
      "I prioritize open communication and active collaboration with clients to ensure their vision is brought to life. ",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "I'm comfortable working across different time zones and collaborating with global teams.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech stack",
    description: "Finding ways to IMPROVE",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "The Tech Way",
    description:
      "Tech-savvy Full-Stack Developer passionate about crafting innovative solutions. I thrive on exploring new technologies and pushing the boundaries of what's possible.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "The Inside Scoop",
    description:
      "Currently honing my JavaScript and TypeScript skills to build robust and scalable web applications. I'm excited to apply my knowledge to create innovative solutions.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Portfolio",
    des: "Creating my own Portfolio using Three JS",
    img: "/p1.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/three.svg", "/vitejs.svg"],
    link: "https://kgn-portfolio-a0b394.netlify.app/",
  },
  {
    id: 2,
    title: "Ecommerce - Product Demo for Local Client",
    des: "A responsive ecommerce web application is essential for reaching a wider audience and providing a seamless shopping experience across various devices",
    img: "/p2.jpg",
    iconLists: [
      "/re.svg",
      "/antd.svg",
      "/js.svg",
      "/vitejs.svg",
      "/postgresql.svg",
    ],
    link: "https://demo-ecommerce-kgn096.netlify.app/",
  },
  {
    id: 4,
    title: "Streaming Website (Under Construction)",
    des: "Developing innovative live streaming platforms that rival industry leaders",
    img: "/undercon.jpg",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/mongo.svg",
      "/redux.svg",
    ],
    link: "",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer Intern",
    desc: "Exposure to SDLC. Assisted in the development of a web-based platform using Flowable/Edoras One for automation Process.",
    className: "md:col-span-2",
    thumbnail: "/intern1.jpg",
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    desc: "Part take in a real project using React and React Redux with exposure to Backend",
    className: "md:col-span-2",
    thumbnail: "/intern2.jpg",
  },
  {
    id: 3,
    title: "Software Engineer",
    desc: "Full Stack Developer adept at leveraging the full suite of Cloud features to create robust and scalable web solutions.",
    className: "md:col-span-2",
    thumbnail: "/exp1.jpg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/kgsng096",
  },
  {
    id: 3,
    img: "/link.svg",
    href: "https://www.linkedin.com/in/keith-geoffrey-ng-698b3820a/",
  },
  {
    id: 4,
    img: "/cloud.svg",
    href: "/Keith_Ng_CV.pdf",
  },
];

export const leftList = [
  "ReactJS",
  "Reac-Redux",
  "React-Router",
  "NextJS",
  "ViteJS",
];

export const rightList = [
  "ExpressJS",
  "NodeJS",
  "NestJS",
  "Sequelize",
  "TypeORM",
  "SQL",
  "NoSQL",
];
