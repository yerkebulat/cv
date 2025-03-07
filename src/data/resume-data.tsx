import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Yerkebulan Tazabek",
  initials: "YT",
  location: "Astana, Kazakhstan",
  locationLink: "https://www.google.com/maps/place/Astana/@51.1038954,71.1719489,10z/data=!3m1!4b1!4m6!3m5!1s0x424580c47db54609:0x97f9148dddb19228!8m2!3d51.1655126!4d71.4272221!16zL20vMGZuMDg?entry=ttu",
  about:
    "Sophomore mining engineering student passionate about geological data analysis and mineral exploration.",
  summary: (
    <>
      Sophomore mining engineering student with a minor in geology at Nazarbayev University, experienced in core logging, geological mapping, and fieldwork. Skilled in geological data analysis using Python and machine learning, with a focus on mineral exploration and real-time detection systems.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/151542580?v=4",
  personalWebsiteUrl: null, // You didn’t provide one; set to null or add if you have one
  contact: {
    email: "yerkebulan.tazabek@nu.edu.kz",
    tel: "+77023476701",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/yerkebulat",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yerkebulan-tazabek/",
        icon: LinkedInIcon,
      },
      // Add X if you have it, otherwise omit or leave as placeholder
      // {
      //   name: "X",
      //   url: "https://x.com/yourhandle",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "Nazarbayev University",
      degree: "B.Sc. in Mining Engineering (GPA: 3.42/4), Minor in Geology",
      start: "2023",
      end: "2027",
    },
    {
      school: "Nazarbayev Intellectual School",
      degree: "High School Diploma (GPA: 4.98/5)",
      start: "2017",
      end: "2023",
    },
  ],
  work: [
    {
      company: "SmartView Innovations (Startup)",
      link: "https://digitalbusiness.kz/2024-10-10/droni-zoloto-i-iskusstvenniy-intellekt-kak-startap-smartview-innovations-zavoevivaet-dobivayushchuyu-promishlennost/",
      badges: ["Part-time", "Python", "YOLO", "AI", "Drones"],
      title: "Member of Technical Staff",
      logo: null, // No logo provided; leave as null or import one if you have it
      start: "2024",
      end: null, // Ongoing
      description: (
        <>
          Contributing to AI-driven solutions for the mining sector.
          <ul className="list-inside list-disc">
            <li>
              Fine-tuning YOLO Worldv8 models for real-time object detection, focusing on data labeling and hyperparameter optimization.
            </li>
            <li>
              Working on a drone detection project with Brandt LLC (1.4M tenge monthly contract), reducing wobbler inspection time from 4 hours to 20 minutes with 98.1% accuracy.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Nazarbayev University",
      link: "https://scholar.google.com/citations?hl=en&user=MghExQgAAAAJ&view_op=list_works",
      badges: ["Part-time", "Python", "Machine Learning", "PyTorch", "Research"],
      title: "Research Assistant",
      logo: null,
      start: "2024",
      end: "2024",
      description: (
        <>
          Conducted research under Prof. Nasser Madani on mineral resource estimation.
          <ul className="list-inside list-disc">
            <li>
              Developed machine learning regression models and neural networks using scikit-learn and PyTorch, managing a dataset of 1,000,000 labeled data points.
            </li>
            <li>
              Achieved 88.25% accuracy in predictions, surpassing conventional methods by 20-25%, with data visualization using Matplotlib.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Qazaqstan Geography Olympiad (QazGO)",
      link: "https://www.gov.kz/memleket/entities/edu/press/news/details/833353?lang=ru",
      badges: ["Volunteer", "Geology", "Education", "Coaching"],
      title: "National Team Coach",
      logo: null,
      start: "2023",
      end: null, // Ongoing
      description: (
        <>
          Volunteer coach enhancing geography education nationwide.
          <ul className="list-inside list-disc">
            <li>
              Created 75 unique tasks for municipal, regional, and national olympiads in geology, geomorphology, demographics, and urban studies.
            </li>
            <li>
              Conducted nine 3-week educational camps, training over 210 students.
            </li>
            <li>
              Grew participation from 100,000 in 2023 to 136,000 in 2024; students won 3 bronze and 1 silver medal at IGeO Dublin 2024.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "National Geographic Qazaqstan",
      link: "https://nationalgeographic.kz",
      badges: ["Internship", "Translation", "Photoshop"],
      title: "Translator",
      logo: null,
      start: "2021",
      end: "2023",
      description: (
        <>
          Translated and edited content for National Geographic’s Kazakh edition.
          <ul className="list-inside list-disc">
            <li>
              Published 25 articles in Kazakh, reaching 14,000+ online readers, focusing on technical and space innovations.
            </li>
            <li>
              Used Adobe Photoshop for photo translation and edited 11 contributed articles.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Python (NumPy, pandas, scikit-learn, Matplotlib, PyTorch, OpenCV)",
    "R",
    "HTML",
    "Next.js",
    "GitHub",
    "VS Code",
    "LaTeX",
    "SolidWorks",
    "Adobe Photoshop",
    "After Effects",
  ],
  projects: [
    {
      title: "Drone Detection for Mining",
      techStack: ["Python", "YOLO Worldv8", "AI", "Drones"],
      description:
        "Contributed to a SmartView Innovations project reducing wobbler inspection time from 4 hours to 20 minutes with 98.1% accuracy using AI-powered drone detection.",
      logo: null,
      link: {
        label: "digitalbusiness.kz",
        href: "https://digitalbusiness.kz/2024-10-10/droni-zoloto-i-iskusstvenniy-intellekt-kak-startap-smartview-innovations-zavoevivaet-dobivayushchuyu-promishlennost/",
      },
    },
    {
      title: "Mineral Resource Estimation Model",
      techStack: ["Python", "scikit-learn", "PyTorch", "Matplotlib"],
      description:
        "Developed ML regression models and neural networks for a Canada-Ontario mine case study, achieving 88.25% accuracy with a 1M-point dataset.",
      logo: null,
      link: {
        label: "scholar.google.com",
        href: "https://scholar.google.com/citations?hl=en&user=MghExQgAAAAJ&view_op=list_works",
      },
    },
    {
      title: "Geography Olympiad Tasks",
      techStack: ["Geology", "Education"],
      description:
        "Created 75 unique tasks for QazGO olympiads, enhancing geological and geographical education for over 210 students.",
      logo: null,
      link: {
        label: "gov.kz",
        href: "https://www.gov.kz/memleket/entities/edu/press/news/details/833353?lang=ru",
      },
    },
  ],
  awards: [ // Added as a custom field since your CV has this section
    {
      title: "International Geography Olympiad Istanbul 2021",
      description: "Silver medalist (top 25 worldwide)",
      link: {
        label: "scoreboard.bc-pf.org",
        href: "https://scoreboard.bc-pf.org/en/results/geography/international-geography-olympiad/2021",
      },
    },
    {
      title: "International Geography Olympiad Paris 2022",
      description: "Bronze medalist",
      link: null,
    },
    {
      title: "International Earth Science Olympiad Aosta 2022",
      description: "Bronze medalist",
      link: null,
    },
    {
      title: "European Geography Olympiad Belgrade 2021",
      description: "Bronze medalist",
      link: null,
    },
    {
      title: "Kazakhstan National Geography Olympiad",
      description: "Gold medalist (2021, 2021), Silver medalist (2020)",
      link: null,
    },
    {
      title: "Appreciation Letter from President of Kazakhstan",
      description: "Awarded for contributions to educational competitions (Sep 2022)",
      link: null,
    },
    {
      title: "'El Maktanyshy' Academic Prize",
      description: "Governmental prize, $4594 USD (Aug 2021)",
      link: null,
    },
  ],
} as const;