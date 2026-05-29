export type MediaVideo = {
  title: string;
  description: string;
  provider: "YouTube" | "Vimeo";
  embedUrl: string;
};

export const mediaIntro = {
  eyebrow: "Media",
  heading: "Performance Gallery",
  description:"Selected recordings and performance highlights"}

export const mediaVideos: MediaVideo[] = [
  {
    title: "Rachmaninoff: Cello Sonata, Op.19",
    description: "Piano & Cello",
    provider: "YouTube",
    embedUrl: "https://www.youtube.com/embed/DbdGrtHqnsY?si=Ho9d4Wx6OvaDEhCA",
  },
  {
    title: "Debussy: Il pleure dans mon coeur",
    description: "Piano & Voice",
    provider: "YouTube",
    embedUrl: "https://www.youtube.com/embed/XDAQirgZc-U?si=DN3GsKJZKYb6NBs_",
  },
  {
    title: "Guo Xiaohu: 《壮美延安》",
    description: "Choir Accompaniment",
    provider: "YouTube",
    embedUrl: "https://www.youtube.com/embed/UbymZJzAk-8?si=W0SXiLajRPQEdMmt",
  },
];
