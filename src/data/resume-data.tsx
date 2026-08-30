import type { ElementType, ReactNode } from "react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const LANGUAGE_ORDER = ["en", "kk", "ru"] as const;

export type ResumeLanguage = (typeof LANGUAGE_ORDER)[number];

export type ResumeLabels = {
  htmlLang: string;
  languageName: string;
  switchToLanguage: string;
  resumeTitle: string;
  location: string;
  personalWebsite: string;
  email: string;
  phone: string;
  contactLinks: string;
  profilePicture: string;
  sections: {
    work: string;
    education: string;
    skills: string;
    awards: string;
    projects: string;
  };
  present: string;
  to: string;
  tags: string;
  skillsList: string;
  skill: string;
  companyWebsite: string;
  employmentPeriod: string;
  period: string;
  activeProject: string;
  projectDescription: string;
  commandMenu: {
    press: string;
    openMenuShortcut: string;
    buttonLabel: string;
    searchPlaceholder: string;
    noResults: string;
    actions: string;
    links: string;
    print: string;
  };
};

type SocialLink = {
  name: string;
  url: string;
  icon: ElementType;
};

export type ResumeData = {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: {
    email: string;
    tel: string;
    social: readonly SocialLink[];
  };
  education: readonly {
    school: string;
    degree: string;
    start: string;
    end: string;
  }[];
  work: readonly {
    company: string;
    link: string;
    badges: readonly string[];
    title: string;
    logo: null;
    start: string;
    end: string | null;
    description: ReactNode;
  }[];
  skills: readonly string[];
  awards: readonly {
    title: string;
    award: string;
  }[];
  projects: readonly {
    title: string;
    description: string;
    techStack: readonly string[];
    link?: { href: string };
    github?: { href: string };
  }[];
};

export const RESUME_DATA: ResumeData = {
  name: "Yerkebulan Tazabek",
  initials: "YT",
  location: "Astana, Kazakhstan",
  locationLink: "https://www.google.com/maps/place/Astana,+Kazakhstan",
  about:
    "Senior mining engineering student with a minor in geology at Nazarbayev University. Experienced in core logging, geological mapping, geotechnical analysis, and fieldwork. Skilled in geological data analysis and passionate about mineral exploration. Two-time winner of IGeo and coach of the national geography team.",
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
      company: "Glencore — Kazzinc",
      link: "https://www.kazzinc.com/eng/o-proizvodstve/predpriyatiya/ao-altyntau-kokshetau",
      badges: ["Upcoming", "Internship", "Mine Planning"],
      title: "Mine Planning Engineer",
      logo: null,
      start: "2026-12",
      end: "2026-12",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Incoming one-month mine planning placement at Altyntau Kokshetau:
              open-pit to underground transition.
            </li>
          </ul>
        </>
      ),
    },
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
              Working with Professor Milovan Fustic on Carboniferous–Devonian
              copper mineralization in the Chu-Sarysu Basin.
            </li>
            <li>
              Responsible for paleogeographic reconstruction, fieldwork,
              sampling, thin-section analysis, and outcrop modeling.
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
      end: "2026-08",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Conducted geological core logging, orientation, pXRF analysis,
              photographing, magnetic susceptibility, core recovery
              calculations, alteration intervaling, and geological modeling in a
              world-class copper exploration project.
            </li>
            <li>
              Two 3-month summer internships (2025 and 2026) and a 1-month winter
              internship, 300 km from the nearest city; facies modeling,
              paleontological core description, and Chu-Sarysu basin analysis.
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
              Worked on fine-tuning YOLO Worldv8 models for mining sector
              applications, focusing on data labeling and hyperparameter
              optimization for real-time object detection.
            </li>
            <li>
              Contributed to a drone detection project with Brandt LLC (1.4M
              tenge monthly contract) that reduces wobbler inspection time from
              4 hours to 20 minutes through AI-powered detection with 98.1%
              accuracy.
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
              Created 120 unique tasks for municipal, regional, and national
              geography olympiads, specializing in geology, geomorphology,
              demographics, and urban studies; juried at the Republican Olympiad
              in 2024 and 2025 with 50,000+ participants across all cycles.
            </li>
            <li>
              Coached the national geography team; students achieved 2nd place
              in the team ranking at IGeo Bangkok 2025.
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
              Published 25 National Geographic articles into the Kazakh
              language, reaching more than 14,000 online readers.
            </li>
            <li>
              Managed content on technical and space innovations and edited 11
              articles contributed by others.
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
    "Leapfrog Geo",
    "RS2",
    "RS3",
    "Micromine Beyond",
    "Micromine Origin",
    "Isatis.neo",
    "Petrel",
    "VentSim",
    "ArcGIS",
    "QGIS",
    "Pix4DMapper",
    "Imago Seequent",
    "LogChief",
    "Reflex IQ-Logger",
    "After Effects",
    "Adobe Photoshop",
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
  projects: [
    {
      title: "UBC Mining Method Selector",
      description:
        "Web app of the Nicholas (1981) / UBC method-selection spreadsheet. Built for MINE 306 Underground Mining Systems and Design with Prof. Fidelis Suorineni. Ranks ten underground methods from deposit geometry and rock-mass inputs.",
      techStack: ["Next.js", "TypeScript", "Nicholas 1981"],
      link: { href: "https://yerkebulat.github.io/ubc-mining-method-selector/" },
      github: { href: "https://github.com/yerkebulat/ubc-mining-method-selector" },
    },
  ],
};

export const LOCALIZED_RESUME_DATA = {
  en: RESUME_DATA,
  kk: {
    ...RESUME_DATA,
    location: "Астана, Қазақстан",
    about:
      "Назарбаев Университетінде тау-кен инженериясын оқитын, геология бойынша миноры бар 4-курс студентімін. Керн сипаттау, геологиялық картаға түсіру, геотехникалық талдау және далалық жұмыстар бойынша тәжірибем бар. Геологиялық деректерді талдауға дағдыланғанмын және пайдалы қазбаларды барлауға қызығамын. IGeo-ның екі мәрте жүлдегерімін және ұлттық география құрамасының жаттықтырушысымын.",
    education: [
      {
        school: "Назарбаев Университеті",
        degree:
          "B.Sc. (мамандық: тау-кен инженериясы; қосымша мамандық: геология, GPA: 3.55/4)",
        start: "2023",
        end: "2027",
      },
    ],
    work: [
      {
        ...RESUME_DATA.work[0],
        badges: ["Алдағы", "Тағылымдама", "Кенішті жоспарлау"],
        title: "Кенішті жоспарлау инженері",
        description: (
          <ul className="list-inside list-disc">
            <li>
              2026 жылдың желтоқсанында Altyntau Kokshetau-да бір айлық тағылымдама:
              ашық карьерден жерастыға көшуді жоспарлау.
            </li>
          </ul>
        ),
      },
      {
        ...RESUME_DATA.work[1],
        company: "Назарбаев Университеті",
        badges: ["Толық емес жұмыс", "Зерттеу"],
        title: "Зерттеу ассистенті",
        description: (
          <ul className="list-inside list-disc">
            <li>
              Профессор Милован Фустичпен бірге Шу-Сарысу бассейніндегі
              карбон-девон дәуіріндегі мыс минералдануы бойынша зерттеу жүргізіп
              жатырмын.
            </li>
            <li>
              Палеогеографиялық реконструкция, далалық жұмыс, сынама алу,
              шлифтерді талдау және ашылымдарды модельдеу үшін жауаптымын.
            </li>
          </ul>
        ),
      },
      {
        ...RESUME_DATA.work[2],
        badges: ["Тағылымдама", "Далалық геология"],
        title: "Далалық геолог",
        description: (
          <ul className="list-inside list-disc">
            <li>
              Әлемдік деңгейдегі мыс барлау жобасында кернді геологиялық
              сипаттау, бағдарлау, pXRF талдауы, фототүсірілім, магниттік
              қабылдағыштықты өлшеу, керн шығымын есептеу, өзгеру интервалдарын
              белгілеу және геологиялық модельдеу жұмыстарын жүргіздім.
            </li>
            <li>
              Шалғай далада (ең жақын қаладан 300 км) екі 3 айлық жазғы тағылымдама
              (2025 және 2026) және 1 айлық қысқы тағылымдама; фациялық
              модельдеу, палеонтологиялық керн сипаттамасы және Шу-Сарысу
              бассейнін талдау.
            </li>
          </ul>
        ),
      },
      {
        ...RESUME_DATA.work[3],
        badges: ["Толық емес жұмыс", "Стартап", "Тау-кен", "AI"],
        title: "Техникалық команда мүшесі",
        description: (
          <ul className="list-inside list-disc">
            <li>
              Тау-кен саласына арналған YOLO Worldv8 модельдерін fine-tuning
              бойынша жұмыс істедім, нақты уақыттағы объектілерді анықтау үшін
              деректерді таңбалау мен гиперпараметрлерді оңтайландыруға көңіл
              бөлдім.
            </li>
            <li>
              Brandt LLC компаниясымен дрондарды анықтау жобасына үлес қостым
              (ай сайынғы 1,4 млн теңгелік келісімшарт); AI негізіндегі 98,1%
              дәлдікпен анықтау арқылы wobbler тексеру уақытын 4 сағаттан 20
              минутқа дейін қысқартты.
            </li>
          </ul>
        ),
      },
      {
        ...RESUME_DATA.work[4],
        company: "Дарын РҒПО",
        badges: ["Еріктілік", "Ұлттық құрама жаттықтырушысы", "Қазылар алқасы"],
        title: "Ұлттық құрама жаттықтырушысы және қазылар алқасының мүшесі",
        description: (
          <ul className="list-inside list-disc">
            <li>
              Муниципалдық, өңірлік және республикалық география олимпиадаларына
              геология, геоморфология, демография және урбанистика бағыттарында
              120 бірегей тапсырма жасадым; 2024 және 2025 жылдары барлық
              кезеңдер бойынша 50 000+ қатысушысы бар Республикалық олимпиадада
              қазылық еттім.
            </li>
            <li>
              Ұлттық география құрамасын жаттықтырдым; оқушылар IGeo Bangkok
              2025-те командалық рейтингте 2-орын алды.
            </li>
          </ul>
        ),
      },
      {
        ...RESUME_DATA.work[5],
        badges: ["Тағылымдама", "Аударма"],
        title: "Аудармашы",
        description: (
          <ul className="list-inside list-disc">
            <li>
              National Geographic-тің 25 мақаласын қазақ тіліне аударып
              жарияладым, онлайнда 14 000-нан астам оқырманға жетті.
            </li>
            <li>
              Техника және ғарыш инновациялары бойынша контент жүргіздім және
              басқа авторлардың 11 мақаласын редакцияладым.
            </li>
          </ul>
        ),
      },
    ],
    awards: [
      {
        title: "Халықаралық география олимпиадасы",
        award: "Күміс медаль, Стамбұл 2021",
      },
      {
        title: "Халықаралық география олимпиадасы",
        award: "Қола медаль, Париж 2022",
      },
      {
        title: "Халықаралық жер туралы ғылымдар олимпиадасы",
        award: "Қола медаль, Аоста 2022",
      },
      {
        title: "Еуропалық география олимпиадасы",
        award: "Қола медаль, Белград 2021",
      },
      {
        title: "Республикалық география олимпиадасы",
        award: "Алтын 2022, 2021 | Күміс 2020",
      },
      {
        title: "KazMinerals Reacthon хакатоны",
        award: "1-орын, 2025",
      },
      {
        title: "Президенттің алғыс хаты",
        award: "Қыркүйек 2022",
      },
      {
        title: "Ел мақтанышы сыйлығы",
        award: "$4594, тамыз 2022",
      },
    ],
    projects: [
      {
        title: "UBC Mining Method Selector",
        description:
          "Nicholas (1981) / UBC кен қазу әдісін таңдау кестесінің веб-қосымшасы. Prof. Fidelis Suorineni-мен MINE 306 Жерасты кен қазу жүйелері және жобалау курсында жасалды. Кен денесінің геометриясы мен тау жынысы бойынша 10 жерасты әдісін ранжирлейді.",
        techStack: ["Next.js", "TypeScript", "Nicholas 1981"],
        link: { href: "https://yerkebulat.github.io/ubc-mining-method-selector/" },
      github: { href: "https://github.com/yerkebulat/ubc-mining-method-selector" },
      },
    ],
  },
  ru: {
    ...RESUME_DATA,
    location: "Астана, Казахстан",
    about:
      "Студент четвертого курса программы B.Sc. по горному делу с minor по геологии в Назарбаев Университете. Имею опыт описания керна, геологического картирования, геотехнического анализа и полевых работ. Уверенно работаю с геологическими данными и интересуюсь разведкой полезных ископаемых. Двукратный победитель IGeo и тренер национальной сборной по географии.",
    education: [
      {
        school: "Назарбаев Университет",
        degree:
          "B.Sc. (специальность: горное дело; дополнительная подспециальность: геология, GPA: 3.55/4)",
        start: "2023",
        end: "2027",
      },
    ],
    work: [
      {
        ...RESUME_DATA.work[0],
        badges: ["Предстоит", "Стажировка", "Планирование горных работ"],
        title: "Инженер по планированию горных работ",
        description: (
          <ul className="list-inside list-disc">
            <li>
              Предстоящая месячная стажировка на Altyntau Kokshetau:
              планирование перехода с открытых работ на подземные.
            </li>
          </ul>
        ),
      },
      {
        ...RESUME_DATA.work[1],
        company: "Назарбаев Университет",
        badges: ["Неполная занятость", "Исследования"],
        title: "Ассистент исследователя",
        description: (
          <ul className="list-inside list-disc">
            <li>
              Работаю с профессором Милованом Фустичем над карбон-девонской
              медной минерализацией в Шу-Сарысуйском бассейне.
            </li>
            <li>
              Отвечаю за палеогеографическую реконструкцию, полевые работы,
              отбор проб, анализ шлифов и моделирование обнажений.
            </li>
          </ul>
        ),
      },
      {
        ...RESUME_DATA.work[2],
        badges: ["Стажировка", "Полевая геология"],
        title: "Полевой геолог",
        description: (
          <ul className="list-inside list-disc">
            <li>
              Выполнял геологическое описание керна, ориентирование,
              pXRF-анализ, фотосъемку, измерение магнитной восприимчивости,
              расчеты выхода керна, выделение интервалов альтерации и
              геологическое моделирование на медном геологоразведочном проекте
              мирового класса.
            </li>
            <li>
              Две 3-месячные летние стажировки (2025 и 2026) и одна месячная зимняя
              в удаленном полевом лагере в 300 км от ближайшего города;
              фациальное моделирование, палеонтологическое описание керна и
              анализ Шу-Сарысуйского бассейна.
            </li>
          </ul>
        ),
      },
      {
        ...RESUME_DATA.work[3],
        badges: ["Неполная занятость", "Стартап", "Горное дело", "AI"],
        title: "Member of Technical Staff",
        description: (
          <ul className="list-inside list-disc">
            <li>
              Работал над fine-tuning моделей YOLO Worldv8 для задач
              горнодобывающей отрасли, уделяя внимание разметке данных и
              оптимизации гиперпараметров для обнаружения объектов в реальном
              времени.
            </li>
            <li>
              Участвовал в проекте обнаружения дронов с Brandt LLC (контракт 1,4
              млн тенге в месяц), который сокращает время инспекции wobbler с 4
              часов до 20 минут благодаря AI-детекции с точностью 98,1%.
            </li>
          </ul>
        ),
      },
      {
        ...RESUME_DATA.work[4],
        company: "Дарын РНПЦ",
        badges: ["Волонтерство", "Тренер национальной сборной", "Жюри"],
        title: "Тренер национальной сборной и член жюри",
        description: (
          <ul className="list-inside list-disc">
            <li>
              Создал 120 уникальных заданий для муниципальных, региональных и
              национальных олимпиад по географии, специализируясь на геологии,
              геоморфологии, демографии и урбанистике; входил в жюри
              Республиканской олимпиады в 2024 и 2025 годах при 50 000+
              участниках на всех этапах.
            </li>
            <li>
              Тренировал национальную сборную по географии; ученики заняли 2-е
              место в командном зачете на IGeo Bangkok 2025.
            </li>
          </ul>
        ),
      },
      {
        ...RESUME_DATA.work[5],
        badges: ["Стажировка", "Перевод"],
        title: "Переводчик",
        description: (
          <ul className="list-inside list-disc">
            <li>
              Опубликовал 25 статей National Geographic на казахском языке,
              охватив более 14 000 онлайн-читателей.
            </li>
            <li>
              Вел контент о технологических и космических инновациях и
              отредактировал 11 статей других авторов.
            </li>
          </ul>
        ),
      },
    ],
    awards: [
      {
        title: "Международная географическая олимпиада",
        award: "Серебряная медаль, Стамбул 2021",
      },
      {
        title: "Международная географическая олимпиада",
        award: "Бронзовая медаль, Париж 2022",
      },
      {
        title: "Международная олимпиада по наукам о Земле",
        award: "Бронзовая медаль, Аоста 2022",
      },
      {
        title: "Европейская географическая олимпиада",
        award: "Бронзовая медаль, Белград 2021",
      },
      {
        title: "Республиканская олимпиада по географии",
        award: "Золото 2022, 2021 | Серебро 2020",
      },
      {
        title: "Хакатон KazMinerals Reacthon",
        award: "1-е место, 2025",
      },
      {
        title: "Благодарственное письмо Президента",
        award: "Сентябрь 2022",
      },
      {
        title: "Премия Ел мақтанышы",
        award: "$4594, август 2022",
      },
    ],
    projects: [
      {
        title: "UBC Mining Method Selector",
        description:
          "Веб-приложение таблицы выбора метода Nicholas (1981) / UBC. Сделано в курсе MINE 306 Underground Mining Systems and Design у проф. Fidelis Suorineni. Ранжирует десять подземных методов по геометрии залежи и качеству массива.",
        techStack: ["Next.js", "TypeScript", "Nicholas 1981"],
        link: { href: "https://yerkebulat.github.io/ubc-mining-method-selector/" },
      github: { href: "https://github.com/yerkebulat/ubc-mining-method-selector" },
      },
    ],
  },
} satisfies Record<ResumeLanguage, ResumeData>;

export const RESUME_LABELS = {
  en: {
    htmlLang: "en",
    languageName: "English",
    switchToLanguage: "Switch to",
    resumeTitle: "Resume",
    location: "Location",
    personalWebsite: "Personal website",
    email: "Email",
    phone: "Phone",
    contactLinks: "Contact links",
    profilePicture: "profile picture",
    sections: {
      work: "Work Experience",
      education: "Education",
      skills: "Skills",
      awards: "Awards & Achievements",
      projects: "Projects",
    },
    present: "Present",
    to: "to",
    tags: "Tags",
    skillsList: "List of skills",
    skill: "Skill",
    companyWebsite: "company website",
    employmentPeriod: "Employment period",
    period: "Period",
    activeProject: "Active project indicator",
    projectDescription: "Project description",
    commandMenu: {
      press: "Press",
      openMenuShortcut: "to open the command menu",
      buttonLabel: "Open command menu",
      searchPlaceholder: "Type a command or search...",
      noResults: "No results found.",
      actions: "Actions",
      links: "Links",
      print: "Print",
    },
  },
  kk: {
    htmlLang: "kk",
    languageName: "Қазақша",
    switchToLanguage: "Тілді ауыстыру:",
    resumeTitle: "Түйіндеме",
    location: "Орналасқан жері",
    personalWebsite: "Жеке веб-сайт",
    email: "Электрондық пошта",
    phone: "Телефон",
    contactLinks: "Байланыс сілтемелері",
    profilePicture: "профиль суреті",
    sections: {
      work: "Жұмыс тәжірибесі",
      education: "Білім",
      skills: "Дағдылар",
      awards: "Марапаттар мен жетістіктер",
      projects: "Жобалар",
    },
    present: "Қазір",
    to: "-",
    tags: "Белгілер",
    skillsList: "Дағдылар тізімі",
    skill: "Дағды",
    companyWebsite: "компания веб-сайты",
    employmentPeriod: "Жұмыс кезеңі",
    period: "Кезең",
    activeProject: "Белсенді жоба белгісі",
    projectDescription: "Жоба сипаттамасы",
    commandMenu: {
      press: "Басыңыз",
      openMenuShortcut: "командалар мәзірін ашу үшін",
      buttonLabel: "Командалар мәзірін ашу",
      searchPlaceholder: "Команда немесе іздеу мәтінін жазыңыз...",
      noResults: "Нәтиже табылмады.",
      actions: "Әрекеттер",
      links: "Сілтемелер",
      print: "Басып шығару",
    },
  },
  ru: {
    htmlLang: "ru",
    languageName: "Русский",
    switchToLanguage: "Переключить на",
    resumeTitle: "Резюме",
    location: "Местоположение",
    personalWebsite: "Личный сайт",
    email: "Эл. почта",
    phone: "Телефон",
    contactLinks: "Контактные ссылки",
    profilePicture: "фото профиля",
    sections: {
      work: "Опыт работы",
      education: "Образование",
      skills: "Навыки",
      awards: "Награды и достижения",
      projects: "Проекты",
    },
    present: "н.в.",
    to: "по",
    tags: "Теги",
    skillsList: "Список навыков",
    skill: "Навык",
    companyWebsite: "сайт компании",
    employmentPeriod: "Период работы",
    period: "Период",
    activeProject: "Индикатор активного проекта",
    projectDescription: "Описание проекта",
    commandMenu: {
      press: "Нажмите",
      openMenuShortcut: "чтобы открыть командное меню",
      buttonLabel: "Открыть командное меню",
      searchPlaceholder: "Введите команду или запрос...",
      noResults: "Ничего не найдено.",
      actions: "Действия",
      links: "Ссылки",
      print: "Печать",
    },
  },
} satisfies Record<ResumeLanguage, ResumeLabels>;
