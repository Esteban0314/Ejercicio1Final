import Image from 'next/image';

type ImageAtomProps = {
  src: string;
  alt: string;
  className?: string;
};

export const ImageAtom = ({ src, alt, className = '' }: ImageAtomProps) => (
  <Image src={src} alt={alt} width={70} height={70} className={`rounded ${className}`} />
);
