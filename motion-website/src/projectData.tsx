// png
import demoReel_png from "./assets/projects/demo-reel/thumbnail.png";
import skiBoots_png from "./assets/projects/ski-boots/thumbnail.png";
import broncoHenry_png from "./assets/projects/bronco-henry/thumbnail.png";
import overEats_png from "./assets/projects/over-eats/thumbnail.png";
import freshCaught_png from "./assets/projects/fresh-caught/thumbnail.png";
import feeRanger_png from "./assets/projects/fee-ranger/thumbnail.png";
import gatorGum_png from "./assets/projects/gator-gum/thumbnail.png";
import propmaker_png from "./assets/projects/propmaker/thumbnail.png";
import portraitOfALady_png from "./assets/projects/portrait-of-a-lady/thumbnail.png";
import purpleBusiness_png from "./assets/projects/purple-business/thumbnail.png";
//webp
import demoReel_webp from "./assets/projects/demo-reel/thumbnail.png?as=webp";
import skiBoots_webp from "./assets/projects/ski-boots/thumbnail.png?as=webp";
import broncoHenry_webp from "./assets/projects/bronco-henry/thumbnail.png?as=webp";
import overEats_webp from "./assets/projects/over-eats/thumbnail.png?as=webp";
import freshCaught_webp from "./assets/projects/fresh-caught/thumbnail.png?as=webp";
import feeRanger_webp from "./assets/projects/fee-ranger/thumbnail.png?as=webp";
import gatorGum_webp from "./assets/projects/gator-gum/thumbnail.png?as=webp";
import propmaker_webp from "./assets/projects/propmaker/thumbnail.png?as=webp";
import portraitOfALady_webp from "./assets/projects/portrait-of-a-lady/thumbnail.png?as=webp";
import purpleBusiness_webp from "./assets/projects/purple-business/thumbnail.png?as=webp";

interface Project {
  name: string;
  hoverColor: string;
  vimeoId: string;
  aspectRatio?: AspectRatio;
  thumbnailSet: thumbnailSet;
}

interface thumbnailSet {
  webp: string;
  png: string;
}

export enum AspectRatio {
  $1x1,
  $4x3,
}

const projectData: Project[] = [
  {
    name: "reel",
    hoverColor: "#FFAD4D",
    vimeoId: "823151596",
    aspectRatio: AspectRatio.$4x3,
    thumbnailSet: { png: demoReel_png, webp: demoReel_webp },
  },
  {
    name: "ski-boots",
    hoverColor: "#BF97F3",
    vimeoId: "822564645",
    aspectRatio: AspectRatio.$4x3,
    thumbnailSet: { png: skiBoots_png, webp: skiBoots_webp },
  },
  {
    name: "bronco-henry",
    hoverColor: "#FFCC4F",
    vimeoId: "698724426",
    aspectRatio: AspectRatio.$1x1,
    thumbnailSet: { png: broncoHenry_png, webp: broncoHenry_webp },
  },
  {
    name: "over-eats",
    hoverColor: "#F0A3A3",
    vimeoId: "822564471",
    aspectRatio: AspectRatio.$1x1,
    thumbnailSet: { png: overEats_png, webp: overEats_webp },
  },
  {
    name: "fresh-caught",
    hoverColor: "#FF6953",
    vimeoId: "722676961",
    aspectRatio: AspectRatio.$4x3,
    thumbnailSet: { png: freshCaught_png, webp: freshCaught_webp },
  },
  {
    name: "fee-ranger",
    hoverColor: "#999252",
    vimeoId: "822564552",
    aspectRatio: AspectRatio.$4x3,
    thumbnailSet: { png: feeRanger_png, webp: feeRanger_webp },
  },
  {
    name: "gator-gum",
    hoverColor: "#FF7DC4",
    vimeoId: "722708475",
    aspectRatio: AspectRatio.$1x1,
    thumbnailSet: { png: gatorGum_png, webp: gatorGum_webp },
  },
  {
    name: "propmaker",
    hoverColor: "#AA5B5F",
    vimeoId: "822564291",
    aspectRatio: AspectRatio.$1x1,
    thumbnailSet: { png: propmaker_png, webp: propmaker_webp },
  },
  {
    name: "portrait-of-a-lady",
    hoverColor: "#30A797",
    vimeoId: "686802629",
    aspectRatio: AspectRatio.$1x1,
    thumbnailSet: { png: portraitOfALady_png, webp: portraitOfALady_webp },
  },
  {
    name: "purple-business",
    hoverColor: "#ADDCF5",
    vimeoId: "822563879",
    aspectRatio: AspectRatio.$4x3,
    thumbnailSet: { png: purpleBusiness_png, webp: purpleBusiness_webp },
  },
];

export { projectData };
export type { Project };
