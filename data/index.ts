export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Endorsements", link: "#endorsements" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I focus on client collaboration, ensuring their priorities drive the process.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/lappi.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Man is made by his belief. As he believes, so he is,",
    description: "Shri Krishna says,",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "/Krishna.png",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I consistently strive to enhance",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Creative techie with a knack for problem-solving.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently delving deeper into new technologies.",
    description: "The Inside Track",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to reach out and discuss further?",
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
    title: "MWS - Ride Booking App",
    des: "A seamless ride-booking application designed to connect passengers with drivers efficiently.",
    img: "/pimg1.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg", "/figma.webp"],
    links: {
      github: "https://github.com/your-repo-1",
      live: "https://comingsoon-eta-one.vercel.app/",
      figma: "https://your-figma-link-1"
    },
    status: "Ongoing",
  },
  {
    id: 2,
    title: "Surf My Resume Game",
    des: "An interactive resume game inspired from Microsoft Surf game making the resume both engaging & unique.",
    img: "/smr.png",
    iconLists: ["/re.svg", "/tail.svg", "/nodejs.webp", "/git.webp", "/js.png"],
    links: {
      live: "https://surfmyresume.vercel.app/",
      github: "https://github.com/your-repo-2"
    },
    status: "Completed",
  },
  {
    id: 3,
    title: "Dockerized Web Server with CI/CD",
    des: "A scalable web server integrated with Docker and CI/CD pipelines for automated deployments.",
    img: "/pimg2.png",
    iconLists: ["/docker.webp", "/git.webp", "/postman.webp", "/re.svg", "/js.png"],
    links: {
      github: "https://github.com/JaiRajGunnu/docker_cicd",
    },
    status: "Completed",
  },

  // {
  //   id: 4,
  //   title: "Video Streaming Platform",
  //   des: "A video streaming platform with a smooth UI, real-time video playback, adaptive streaming, and for personalized recommendations.",
  //   img: "/pimg3.jpg",
  //   iconLists: ["/next.svg", "/tail.svg", "/nodejs.webp", "/ts.svg", "/expjs.png"],
  // links: {
  //  live: "https://comingsoon-eta-one.vercel.app/", },
  //   //   status: "Completed",
  // },

  {
    id: 5,
    title: "Social Vehicle Management App",
    des: "A smart vehicle management system designed to track and manage shared or rented vehicles efficiently.",
    img: "/pimg4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/figma.webp", "/re.svg"],
    links: {
      github: "https://github.com/your-repo-3",
      live: "https://comingsoon-eta-one.vercel.app/",
      figma: "https://your-figma-link-2",
      files: "hsdjs.com"

    },
    status: "Paused",
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
    title: "Full-Stack Web Developer",
    desc: "Developed and optimized a web-based platforms using React.js, ensuring seamless interactivity and performance.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "DevOps Trainee",
    desc: "Managed the end-to-end development and deployment of a application, implementing CI/CD pipelines.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 3,
    title: "Java Trainee",
    desc: "Contributed to building scalable backend systems and APIs using Java, ensuring efficient data handling and integration.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },


  {
    id: 4,
    title: "UI/UX Designer",
    desc: "Designed visually appealing user interfaces using modern frontend frameworks and tools.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },

];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/JaiRajGunnu", // Added link property
  },
  // {
  //   id: 2,
  //   img: "/behance.svg",
  //   link: "#",
  // },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/jairajgunnu/", // Added link property
  },
];