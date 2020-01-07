import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Spring, config } from 'react-spring/renderprops';
import ReactDOM from 'react-dom';
import Image from './Image';

const setCanvasCursor = cursor => {
  document.querySelector('canvas').style.cursor = cursor;
}

const setCanvasBg = bgImageSrc => {
  const canvas = document.querySelector('canvas');
  canvas.style.backgroundImage = `url(${bgImageSrc})`;
  canvas.style.backgroundSize = 'cover';
}

const resetCanvasBg = () => {
  const canvas = document.querySelector('canvas');
  canvas.style.backgroundImage = '';
}

const wobblyConfig = { tension: 200, friction: 10 };

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
    onChangeHelperTextState,
    helperTextLabel,
    hoverColor,
    href,
    showWireframe,
    hoverImage,
    hoverCanvasBg,
  } = props;
  const [imageMaterialSrc, setImageMaterialSrc] = React.useState('');
  const [styles, setStyles] = React.useState({
    styles: {
      scale: '1',
      color: 'white',
      isWireframe: false
    },
    previousStyles: {
      scale: '1',
      color: 'white',
      isWireframe: true
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
    setStyles({
      styles: {
        scale: '1.5',
        color: hoverColor,
        isWireframe: true
      },
      previousStyles: {
        scale: '1',
        color: 'white',
        isWireframe: false
      }
    });
    setImageMaterialSrc(hoverImage);
    setCanvasBg(hoverCanvasBg);
  }

  const onPointerOut = () => {
    setCanvasCursor('default');
    setStyles({
      styles: {
        scale: '1',
        color: 'white',
        isWireframe: false
      },
      previousStyles: {
        scale: '1.5',
        color: hoverColor,
        isWireframe: true
      }
    });
    setImageMaterialSrc('');
    onChangeHelperTextState({
      top: 0,
      left: 0,
      text: '',
      isVisible: false
    });
    resetCanvasBg();
  }

  const onPointerMove = e => {
    setCanvasCursor('pointer');
    onChangeHelperTextState({
      top: e.clientY,
      left: e.clientX,
      text: helperTextLabel,
      isVisible: true
    })
  }

  const onClick = () => {
    window.open(href)
  }

  return (

      <Spring
        from={{
          ...styles.previousStyles
        }}
        to={{
          ...styles.styles
        }}
        config={wobblyConfig}
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
        let material = (
          <meshNormalMaterial color={color} attach="material" />
        );
        if (imageMaterialSrc) {
          material = (
            <Image url={imageMaterialSrc} />
          )
        } else if (showWireframe) {
          material = (
            <meshNormalMaterial wireframe color={color} attach="material" />
          );
        }
        return (
          <mesh
            ref={cubeRef}
            position={[xPosition, yPosition, zPosition]}
            onPointerOver={isInteractive ? onPointerOver : undefined}
            onPointerMove={isInteractive ? onPointerMove : undefined}
            onPointerOut={isInteractive ? onPointerOut : undefined}
            onClick={isInteractive ? onClick : undefined}
          >
            <boxBufferGeometry attach="geometry" args={geometry} />
            { material }
          </mesh>

        )
      }}
      </Spring>

  );
};

export default Cube;
