import { Canvas } from '@react-three/fiber';
import React, { CanvasHTMLAttributes } from 'react';
import dynamic from 'next/dynamic'; // SSR issue를 위해 사용

const Stars = dynamic(
  () => import('@react-three/drei').then((mod) => mod.Stars),
  { ssr: false }
);

export const Space = (props: CanvasHTMLAttributes<any>) => {
  return (
    <Canvas onCreated={(state) => state.gl.setClearColor('black')} {...props}>
      <Stars />
    </Canvas>
  );
};
