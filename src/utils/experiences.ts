import { bgImagesPath, imagesPath } from "./constants";

export const experiencesData = [
  {
    id: 1,
    title: "Mild & Mighty",
    description:
      "A small two line description for the experience should go here.",
    icon: imagesPath.mildMighty,
    background: bgImagesPath.bgMildMighty,
    text_color: "text-zinc",
    background_color: "bg-zinc",
  },
  {
    id: 2,
    title: "Grab & Go",
    description:
      "A small two line description for the experience should go here.",
    icon: imagesPath.grabGo,
    background: bgImagesPath.bgGrabGo,
    text_color: "text-blue",
    background_color: "bg-blue",
  },
  {
    id: 3,
    title: "Unwind O'Clock",
    description:
      "A small two line description for the experience should go here.",
    icon: imagesPath.unwind,
    background: bgImagesPath.bgUnwindClock,
    text_color: "text-grapes",
    background_color: "bg-grapes",
  },
  {
    id: 4,
    title: "Spotlight on Science",
    description:
      "A small two line description for the experience should go here.",
    icon: imagesPath.milk,
    background: bgImagesPath.bgSpotlight,
    text_color: "text-yellow",
    background_color: "bg-yellow",
  },
  {
    id: 5,
    title: "Playful Pop Glamour",
    description:
      "A small two line description for the experience should go here.",
    icon: imagesPath.popGlamour,
    background: bgImagesPath.bgPopGlamour,
    text_color: "text-pink",
    background_color: "bg-pink",
  },
];

export const sensoryBarExpData = [
  {
    id: 6,
    title: "Morning Boost",
    description:
      "A small two line description for the experience should go here.",
    icon: imagesPath.morningBoostIcon,
    background: bgImagesPath.morningBoostBg,
    text_color: "text-orange",
    background_color: "bg-orange",
  },
  {
    id: 7,
    title: "Express Makeover",
    description:
      "A small two line description for the experience should go here.",
    icon: imagesPath.flash,
    background: bgImagesPath.expressMakeoverBg,
    text_color: "text-dpink",
    background_color: "bg-dpink",
  },
  {
    id: 8,
    title: "Unwind Your Senses",
    description:
      "A small two line description for the experience should go here.",
    icon: imagesPath.unwindYourSensesIcon,
    background: bgImagesPath.unwindYourSensesBg,
    text_color: "text-sky",
    background_color: "bg-sky",
  },
];

export type Experience = {
  id: number;
  title: string;
  description: string;
  icon: string;
  background: string;
  text_color: string;
  background_color: string;
};
