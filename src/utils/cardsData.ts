import { imagesPath } from "./constants";

interface CardData {
    title: string;
    description: string;
    icon: string;
    arrowIcon: string;
  }

export const cards: CardData[] = [
    {
      title: 'Concept Formulations',
      description: 'Unveil new product formulations and cutting-edge beauty concepts.',
      icon: imagesPath.conceptFormulation, 
      arrowIcon: imagesPath.arrow, 
    },
    {
      title: 'Sensory Bar',
      description: 'Engage your senses with our curated experiences featuring scent, and sound.',
      icon: imagesPath.sensoryBar, 
      arrowIcon: imagesPath.arrow, 
    },
    {
      title: 'Novel Ingredients',
      description: 'Discover breakthrough ingredients that are shaping the future of beauty.',
      icon: imagesPath.novelIngredients,
      arrowIcon: imagesPath.arrow, 
    },
  ];