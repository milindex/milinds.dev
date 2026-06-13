declare module '@splidejs/react-splide' {
  import { ComponentType, HTMLAttributes, ReactNode } from 'react';

  interface SplideOptions {
    type?: string;
    rewind?: boolean;
    rewindByDrag?: boolean;
    perPage?: number;
    arrows?: boolean;
    autoplay?: boolean;
    pauseOnHover?: boolean;
    paginationDirection?: string;
    destroy?: boolean;
    gap?: string;
    [key: string]: any;
  }

  interface SplideProps extends HTMLAttributes<HTMLElement> {
    options?: SplideOptions;
    hasTrack?: boolean;
    tag?: string;
    onMoved?: (splide: any, index: number) => void;
    onMounted?: (splide: any) => void;
    onPaginationMounted?: (splide: any) => void;
  }

  interface SplideTrackProps {
    children?: ReactNode;
    tag?: string;
  }

  interface SplideSlideProps {
    children?: ReactNode;
    tag?: string;
  }

  export const Splide: ComponentType<SplideProps>;
  export const SplideTrack: ComponentType<SplideTrackProps>;
  export const SplideSlide: ComponentType<SplideSlideProps>;
}
