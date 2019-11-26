import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { Canvas, useFrame } from 'react-three-fiber'
import './index.css';
import Image from './Image';
import { Spring, config } from 'react-spring/renderprops'
import useInterval from './useInterval';

import Cube from './Cube';

const MorphCube = props => {
  const [scales, setScales] = React.useState({
    scales: {
      cube1XScale: 0.5,
      cube2XScale: 0.5,
      cube3XScale: 0.5,
      cube4XScale: 0.5,
    },
    previousScales: {
      cube1XScale: 0.5,
      cube2XScale: 0.5,
      cube3XScale: 0.5,
      cube4XScale: 0.5,
    }
  });
  const { previousShape, shape, onChangeHelperTextState } = props;
  const shapes = {
    cube: {
      cube1XPosition: 0.25,
      cube1YPosition: 0.25,
      cube1IsRotating: false,
      cube2XPosition: 0.25,
      cube2YPosition: -0.25,
      cube2IsRotating: false,
      cube3XPosition: -0.25,
      cube3YPosition: 0.25,
      cube3IsRotating: false,
      cube4XPosition: -0.25,
      cube4YPosition: -0.25,
      cube4IsRotating: false,
    },
    none: {
      cube1XPosition: 0.25,
      cube1YPosition: 0.25,
      cube1IsRotating: false,
      cube2XPosition: 0.25,
      cube2YPosition: -0.25,
      cube2IsRotating: false,
      cube3XPosition: -0.25,
      cube3YPosition: 0.25,
      cube3IsRotating: false,
      cube4XPosition: -0.25,
      cube4YPosition: -0.25,
      cube4IsRotating: false,
    },
    projects: {
      cube1XPosition: 1,
      cube1YPosition: 0.5,
      cube1IsRotating: true,
      cube2XPosition: 1,
      cube2YPosition: -0.5,
      cube2IsRotating: true,
      cube3XPosition: -1,
      cube3YPosition: 0.5,
      cube3IsRotating: true,
      cube4XPosition: -1,
      cube4YPosition: -0.5,
      cube4IsRotating: true,
    }
  }

  const wobblyConfig = { tension: 200, friction: 10 };
  const springConfig = wobblyConfig;

  const onMouseOverCube1 = () => {
    setScales({
      scales: {
        cube1XScale: 1,
        cube2XScale: 0.5,
        cube3XScale: 0.5,
        cube4XScale: 0.5,
      },
      previousScales: {
        cube1XScale: 0.5,
        cube2XScale: 0.5,
        cube3XScale: 0.5,
        cube4XScale: 0.5,
      }
    });
  }

  const onMouseOutCube1 = () => {
    setScales({
      scales: {
        cube1XScale: 0.5,
        cube2XScale: 0.5,
        cube3XScale: 0.5,
        cube4XScale: 0.5,
      },
      previousScales: {
        cube1XScale: 1,
        cube2XScale: 0.5,
        cube3XScale: 0.5,
        cube4XScale: 0.5,
      }
    });
  }

  const cubesAreInteractive = shape === 'projects';

  return (
    <Spring
      from={{
        ...shapes[previousShape],
        ...scales.previousScales
      }}
      to={{
        ...shapes[shape],
        ...scales.scales
      }}
      config={springConfig}
    >
      {props => {
        const {
          cube1XScale,
          cube1XPosition,
          cube1YPosition,
          cube1IsRotating,
          cube2XScale,
          cube2XPosition,
          cube2YPosition,
          cube2IsRotating,
          cube3XScale,
          cube3XPosition,
          cube3YPosition,
          cube3IsRotating,
          cube4XScale,
          cube4XPosition,
          cube4YPosition,
          cube4IsRotating,
        } = props;
        return (
          <>
            <Cube
              xRotation={0}
              yRotation={0}
              zRotation={0}
              xPosition={cube1XPosition}
              yPosition={cube1YPosition}
              zPosition={0}
              xScale={cube1XScale}
              yScale={0.5}
              zScale={0.5}
              isRotating={cube1IsRotating}
              onPointerOver={onMouseOverCube1}
              onPointerOut={onMouseOutCube1}
              isInteractive={cubesAreInteractive}
              onChangeHelperTextState={onChangeHelperTextState}
              helperTextLabel='Projects'
            />
            <Cube
              xRotation={0}
              yRotation={0}
              zRotation={0}
              xPosition={cube2XPosition}
              yPosition={cube2YPosition}
              zPosition={0}
              xScale={cube2XScale}
              yScale={0.5}
              zScale={0.5}
              isRotating={cube2IsRotating}
              isInteractive={cubesAreInteractive}
              onChangeHelperTextState={onChangeHelperTextState}
              helperTextLabel='Art'
            />
            <Cube
              xRotation={0}
              yRotation={0}
              zRotation={0}
              xPosition={cube3XPosition}
              yPosition={cube3YPosition}
              zPosition={0}
              xScale={cube3XScale}
              yScale={0.5}
              zScale={0.5}
              isRotating={cube3IsRotating}
              isInteractive={cubesAreInteractive}
              onChangeHelperTextState={onChangeHelperTextState}
              helperTextLabel='Writing'
            />
            <Cube
              xRotation={0}
              yRotation={0}
              zRotation={0}
              xPosition={cube4XPosition}
              yPosition={cube4YPosition}
              zPosition={0}
              xScale={cube4XScale}
              yScale={0.5}
              zScale={0.5}
              isRotating={cube4IsRotating}
              isInteractive={cubesAreInteractive}
              onChangeHelperTextState={onChangeHelperTextState}
              helperTextLabel='Etc'
            />
          </>
        );
      }}
      </Spring>
  )
}

const App = () => {
  const [shapes, setShapes] = React.useState({
    shape: 'cube',
    previousShape: 'none'
  });
  const [helperTextState, setHelperTextState] = React.useState({
    top: 0,
    left: 0,
    isVisible: false,
    text: ''
  });
  const onMouseOver = () => {
    setShapes({
      shape: 'projects',
      previousShape: 'cube'
    });
  }
  const onChangeHelperTextState = state => {
    setHelperTextState(state);
  }
  return (
    <>
      {shapes.shape !== 'projects' && (
        <div className='heading' onClick={onMouseOver}>Enter</div>
      )}
      {helperTextState.isVisible && (
        <div style={{
          position: 'fixed',
          background: 'white',
          top: helperTextState.top,
          left: helperTextState.left,
          padding: 32,
          zIndex: 10,
          pointerEvents: 'none',
          margin: 16
        }}>{helperTextState.text}</div>
      )}
      <Canvas camera={{ position: [0, 0, 2] }}>
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.6} position={[30, 30, 50]} angle={0.2} penumbra={1} castShadow />
        <MorphCube onChangeHelperTextState={onChangeHelperTextState} shape={shapes.shape} previousShape={shapes.previousShape} />
      </Canvas>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
