import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { ResumeContent } from "./components/ResumeContent";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} - Resume`,
  description: RESUME_DATA.about,
  openGraph: {
    title: `${RESUME_DATA.name} - Resume`,
    description: RESUME_DATA.about,
    type: "profile",
    locale: "en_US",
    images: [
      {
        url: "https://www.yerkebulan.dev/your-opengraph-image.png",
        width: 1200,
        height: 630,
        alt: `${RESUME_DATA.name}'s profile picture`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${RESUME_DATA.name} - Resume`,
    description: RESUME_DATA.about,
    images: ["https://www.yerkebulan.dev/your-opengraph-image.png"],
  },
};

export default function ResumePage() {
  return <ResumeContent />;
}
