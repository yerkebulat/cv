import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Yerkebulan Tazabek",
  initials: "YT",
  location: "Astana, Kazakhstan",
  locationLink: "https://www.google.com/maps/place/Astana,+Kazakhstan",
  about:
    "Junior mining engineering student with a minor in geology at Nazarbayev University. Experienced in core logging, geological mapping, geotechnical analysis, and fieldwork. Skilled in geological data analysis and passionate about mineral exploration. Two-time winner of the International Geography Olympiad (equivalent to the IMO in geography) and coach of the national geography team.",
  avatarUrl: "https://avatars.githubusercontent.com/u/151542580?v=4",
  personalWebsiteUrl: "https://yerkebulan.dev",
  contact: {
    email: "yerkebulan.tazabek@nu.edu.kz",
    tel: "+7 702 347 6701",
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
    ],
  },
  education: [
    {
      school: "Nazarbayev University",
      degree: "B.Sc. in Mining Engineering (Minor in Geology, GPA: 3.55/4)",
      start: "2023",
      end: "2027",
    },
  ],
  work: [
    {
      company: "Nazarbayev University",
      link: "https://nu.edu.kz",
      badges: ["Part-time", "Research"],
      title: "Research Assistant",
      logo: null,
      start: "2025-08",
      end: null,
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Working with Professor Milovan Fustic on Carboniferous–Devonian copper mineralization in the Chu-Sarysu Basin.
            </li>
            <li>
              Responsible for paleogeographic reconstruction, fieldwork, sampling, thin-section analysis, and outcrop modeling.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "First Quantum Minerals",
      link: "https://www.first-quantum.com",
      badges: ["Internship", "Field Geology"],
      title: "Field Geologist",
      logo: null,
      start: "2025-05",
      end: "2025-12",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Conducted geological core logging, orientation, pXRF analysis, photographing, magnetic susceptibility, core recovery calculations, alteration intervaling, and geological modeling in a world-class copper exploration project.
            </li>
            <li>
              Completed a 3-month summer and 1-month winter internship 60 km from the nearest village in remote field; responsible for facies modeling, paleontological core description, and Chu-Sarysu basin analysis.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "SmartView Innovations",
      link: "https://digitalbusiness.kz/2024-10-10/droni-zoloto-i-iskusstvenniy-intellekt-kak-startap-smartview-innovations-zavoevivaet-dobivayushchuyu-promishlennost/",
      badges: ["Part-time", "Startup", "Mining", "AI"],
      title: "Member of Technical Staff",
      logo: null,
      start: "2024-10",
      end: "2025-03",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Worked on fine-tuning YOLO Worldv8 models for mining sector applications, focusing on data labeling and hyperparameter optimization for real-time object detection.
            </li>
            <li>
              Contributed to a drone detection project with Brandt LLC (1.4M tenge monthly contract) that reduces wobbler inspection time from 4 hours to 20 minutes through AI-powered detection with 98.1% accuracy.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Daryn RSPC",
      link: "",
      badges: ["Volunteering", "National Team Coach", "Jury"],
      title: "National Team Coach & Jury",
      logo: null,
      start: "2023-02",
      end: null,
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Created 120 unique tasks for municipal, regional, and national geography olympiads, specializing in geology, geomorphology, demographics, and urban studies; juried at the Republican Olympiad in 2024 and 2025 with 50,000+ participants across all cycles.
            </li>
            <li>
              Coached the national geography team; students achieved 2nd place in the team ranking at IGeo Bangkok 2025.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "National Geographic Qazaqstan",
      link: "https://nationalgeographic.kz",
      badges: ["Internship", "Translation"],
      title: "Translator",
      logo: null,
      start: "2021-12",
      end: "2023-01",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Published 25 National Geographic articles into the Kazakh language, reaching more than 14,000 online readers.
            </li>
            <li>
              Managed content on technical and space innovations and edited 11 articles contributed by others.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "R",
    "HTML",
    "Python (NumPy, pandas, scikit-learn, Matplotlib, PyTorch, OpenCV)",
    "Next.js",
    "TypeScript",
    "VS Code",
    "LaTeX",
    "SolidWorks",
    "After Effects",
    "Adobe Photoshop",
    "ArcGIS",
    "Leapfrog Geo",
    "QGIS",
    "Pix4DMapper",
    "Imago Seequent",
    "LogChief",
    "Reflex IQ-Logger",
  ],
  awards: [
    {
      title: "International Geography Olympiad",
      award: "Silver medal, Istanbul 2021",
    },
    {
      title: "International Geography Olympiad",
      award: "Bronze medal, Paris 2022",
    },
    {
      title: "International Earth Science Olympiad",
      award: "Bronze medal, Aosta 2022",
    },
    {
      title: "European Geography Olympiad",
      award: "Bronze medal, Belgrade 2021",
    },
    {
      title: "Republican Geography Olympiad",
      award: "Gold 2022, 2021 | Silver 2020",
    },
    {
      title: "KazMinerals Reacthon Hackathon",
      award: "1st Place, 2025",
    },
    {
      title: "Presidential Appreciation Letter",
      award: "Sep 2022",
    },
    {
      title: "El Maktanyshy Prize",
      award: "$4594, Aug 2022",
    },
  ],
  projects: [] as {
    title: string;
    description: string;
    techStack: readonly string[];
    link?: { href: string };
  }[],
} as const;
