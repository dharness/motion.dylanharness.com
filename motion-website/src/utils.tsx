import { Project, projectData } from "./projectData";

// Takes an kebab-case-string, and converts it to a Title Case String
function kebabToTitle(str: string) {
  // Split the string into an array of words
  const words = str.split("-");

  // Capitalize the first letter of each word and join them together
  const titleCase = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return titleCase;
}

// Find the project data for a given project name
function getProjectData(projectName: string) {
  const project =
    projectData.find((p) => p.name == projectName) || ({} as Project);
  return project;
}

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

export const EMAIL_ADDRESS = "dharness.work@gmail.com";
export const GAMES_WEBSITE = "https://dharness.github.io/games/";
export const LINKEDIN = "https://www.linkedin.com/in/dhsoftware/";
export const VIMEO = "https://vimeo.com/user126295858";
export const INSTAGRAM = "https://www.instagram.com/dylanharness/";

export { kebabToTitle, getProjectData, isMobileDevice };
