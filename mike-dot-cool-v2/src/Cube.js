import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

const Cube = props => {
  const {
    onPointerOver,
    onPointerOut,
    isRotating,
    xRotation,
    yRotation,
    zRotation,
    xPosition,
    yPosition,
    zPosition,
    xScale,
    yScale,
    zScale,
  } = props;
  const cubeRef = useRef();
  useFrame(() => {
    if (isRotating) {
      cubeRef.current.rotation.x = cubeRef.current.rotation.x + 0.01
      cubeRef.current.rotation.y = cubeRef.current.rotation.y + 0.01
    }
  });

  return (
    <mesh
      ref={cubeRef}
      position={[xPosition, yPosition, zPosition]}
      rotation={[xRotation, yRotation, zRotation]}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
    >
      <boxBufferGeometry attach="geometry" args={[xScale, yScale, zScale]} />
      <meshNormalMaterial color="white" wireframe attach="material" />
    </mesh>
  );
};

export default Cube;
