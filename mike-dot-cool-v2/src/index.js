import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import { Canvas, useFrame } from 'react-three-fiber'
import './index.css';
import Image from './Image';
import { Spring, config } from 'react-spring/renderprops'
import useInterval from './useInterval';

import Cube from './Cube';

const MorphCube = props => {
  const { previousShape, shape } = props

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
      cube1XPosition: 0,
      cube1YPosition: 0,
      cube1IsRotating: false,
      cube2XPosition: 0,
      cube2YPosition: 0,
      cube2IsRotating: false,
      cube3XPosition: 0,
      cube3YPosition: 0,
      cube3IsRotating: false,
      cube4XPosition: 0,
      cube4YPosition: 0,
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

  return (
    <Spring
      from={{
        ...shapes[previousShape]
      }}
      to={{
        ...shapes[shape]
      }}
      config={springConfig}
    >
      {props => {
        const {
          cube1XPosition,
          cube1YPosition,
          cube1IsRotating,
          cube2XPosition,
          cube2YPosition,
          cube2IsRotating,
          cube3XPosition,
          cube3YPosition,
          cube3IsRotating,
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
              xScale={0.5}
              yScale={0.5}
              zScale={0.5}
              isRotating={cube1IsRotating}
            />
            <Cube
              xRotation={0}
              yRotation={0}
              zRotation={0}
              xPosition={cube2XPosition}
              yPosition={cube2YPosition}
              zPosition={0}
              xScale={0.5}
              yScale={0.5}
              zScale={0.5}
              isRotating={cube2IsRotating}
            />
            <Cube
              xRotation={0}
              yRotation={0}
              zRotation={0}
              xPosition={cube3XPosition}
              yPosition={cube3YPosition}
              zPosition={0}
              xScale={0.5}
              yScale={0.5}
              zScale={0.5}
              isRotating={cube3IsRotating}
            />
            <Cube
              xRotation={0}
              yRotation={0}
              zRotation={0}
              xPosition={cube4XPosition}
              yPosition={cube4YPosition}
              zPosition={0}
              xScale={0.5}
              yScale={0.5}
              zScale={0.5}
              isRotating={cube4IsRotating}
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
  useInterval(() => {
    setShapes(previousShapes => ({
      shape: previousShapes.shape === 'cube' ? 'projects' : 'cube',
      previousShape: previousShapes.shape,
    }));
  }, 3000)
  const onMouseOver = () => {
    setShapes({
      shape: 'projects',
      previousShape: 'cube'
    });
  }
  const onMouseOut = () => {
    setShapes({
      shape: 'cube',
      previousShape: 'projects'
    });
  }
  return (
    <>
      <div className='heading' onMouseOver={onMouseOver} onMouseOut={onMouseOut}>Projects</div>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.6} position={[30, 30, 50]} angle={0.2} penumbra={1} castShadow />
        <MorphCube shape={shapes.shape} previousShape={shapes.previousShape} />
      </Canvas>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
