import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import { Canvas, useFrame } from 'react-three-fiber'
import './index.css';
import Image from './Image';
import { Spring } from 'react-spring/renderprops'

const MorphCube = props => {
  const { previousShape, shape } = props
  const cube1Ref = useRef()

  useFrame(() => {
    if (shape === 'cube') {
      cube1Ref.current.rotation.x = cube1Ref.current.rotation.x + 0.01
      cube1Ref.current.rotation.y = cube1Ref.current.rotation.y + 0.01
    }
  });

  const shapes = {
    cube: {
      xScale: 1,
      zScale: 1,
      zPosition: 0,
      xRotation: 1
    },
    dc: {
      xScale: 1.6,
      zScale: 0.1,
      zPosition: 1,
      xRotation: 0
    },
    none: {
      xScale: 0.01,
      zScale: 0.01,
      zPosition: -10,
      xRotation: -1
    }
  }

  return (
    <Spring
      from={{
        xScale: shapes[previousShape].xScale,
        zScale: shapes[previousShape].zScale,
        zPosition: shapes[previousShape].zPosition,
        xRotation: shapes[previousShape].xRotation
      }}
      to={{
        xScale: shapes[shape].xScale,
        zScale: shapes[shape].zScale,
        zPosition: shapes[shape].zPosition,
        xRotation: shapes[shape].xRotation
      }}
    >
      {props => (
        <mesh ref={cube1Ref} position={[0,0,props.zPosition]} rotation={[props.xRotation, 0, 0]}>
          <boxBufferGeometry attach="geometry" args={[props.xScale, 1, props.zScale]} />
          {shape === 'cube' ? (
            <meshNormalMaterial color="white" wireframe attach="material" />
          ): (
            <Image url="/dc.png" />
          )}
          <boxBufferGeometry attach="geometry" args={[props.xScale, 1, props.zScale]} />
        </mesh>
      )}
      </Spring>
  )
}

const App = () => {
  const [shapes, setShapes] = React.useState({
    shape: 'cube',
    previousShape: 'none'
  });
  const onMouseOverDC = e => {
    setShapes(shapes => ({
      previousShape: shapes.shape,
      shape: 'dc'
    }));
  }
  const onMouseOutDC = e => {
    setShapes(shapes => ({
      previousShape: shapes.shape,
      shape: 'cube'
    }));
  }
  return (
    <>
      <a href="https://github.com/mikesteele/dual-captions">
       <div className='links' onMouseOver={onMouseOverDC} onMouseOut={onMouseOutDC}>
          dual-captions
        </div>
      </a>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.6} position={[30, 30, 50]} angle={0.2} penumbra={1} castShadow />
        <MorphCube shape={shapes.shape} previousShape={shapes.previousShape} />
      </Canvas>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
