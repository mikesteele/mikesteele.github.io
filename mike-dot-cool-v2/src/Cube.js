import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Spring, config } from 'react-spring/renderprops';

const setCanvasCursor = cursor => {
  document.querySelector('canvas').style.cursor = cursor;
}

const Cube = props => {
  const {
    isInteractive,
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
  const [styles, setStyles] = React.useState({
    styles: {
      scale: '1',
      color: 'white'
    },
    previousStyles: {
      scale: '0',
      color: 'black'
    }
  });
  const cubeRef = useRef();
  useFrame(() => {
    if (isRotating) {
      cubeRef.current.rotation.x = cubeRef.current.rotation.x + 0.01
      cubeRef.current.rotation.y = cubeRef.current.rotation.y + 0.01
    }
  });

  const onPointerOver = () => {
    setCanvasCursor('pointer');
    setStyles({
      styles: {
        scale: '1.5',
        color: 'red'
      },
      previousStyles: {
        scale: '1',
        color: 'white'
      }
    });
  }

  const onPointerOut = () => {
    setCanvasCursor('default');
    setStyles({
      styles: {
        scale: '1',
        color: 'white'
      },
      previousStyles: {
        scale: '1.5',
        color: 'red'
      }
    });
  }

  return (
    <Spring
      from={{
        ...styles.previousStyles
      }}
      to={{
        ...styles.styles
      }}
    >
    {spring => {
      const {
        scale,
        color
      } = spring;
      const scaleNum = Number(scale);
      const geometry = [
        xScale * scaleNum,
        yScale * scaleNum,
        zScale * scaleNum
      ];
      return (
        <mesh
          ref={cubeRef}
          position={[xPosition, yPosition, zPosition]}
          onPointerOver={isInteractive ? onPointerOver : undefined}
          onPointerOut={isInteractive ? onPointerOut : undefined}
        >
          <boxBufferGeometry attach="geometry" args={geometry} />
          <meshPhongMaterial color={color} attach="material" />
        </mesh>
      )
    }}
    </Spring>
  );
};

export default Cube;
