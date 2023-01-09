declare global {
  interface Window {
    __NUXT__: { state: RootState };
  }
}

interface Post {
  title: string;
  slug?: string;
  excerpt?: string;
  content: string;
  publishedAt: string;
  featuredImage?: string;
  seoDescription?: string;
  seoMetaImage?: string;
}

interface Page {
  title: string;
  subtitle?: string;
  slug?: string;
  content: string;
  featuredImage?: string;
  seoDescription?: string;
  seoMetaImage?: string;
}

interface BlogPost {
  tag: string;

  title: string;

  created_at: string;

  read_length: string;

  content: string;

  image_url: string;
}

interface Lottie {
  setDirection(direction: number): void;
  play(): void;
  playSegments(segments: number[] | number[][], forceFlag?: boolean): void;
  getLottie(): Promise<{
    play(): void;
    playSegments(segments: number[] | number[][], forceFlag?: boolean): void;
    goToAndStop(value: number, isFrame: boolean): void;
    goToAndPlay(value: number, isFrame: boolean): void;
    totalFrames: number;
  }>;
}
type HTMLElementLottie = HTMLElement & {
  setDirection(direction: number): void;
  play(): void;
  playSegments(segments: number[] | number[][], forceFlag?: boolean): void;
  getLottie(): Promise<{
    play(): void;
    playSegments(segments: number[] | number[][], forceFlag?: boolean): void;
    goToAndStop(value: number, isFrame: boolean): void;
    goToAndPlay(value: number, isFrame: boolean): void;
    totalFrames: number;
  }>;
};
