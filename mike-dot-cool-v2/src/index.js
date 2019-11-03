import React, { useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Canvas, useFrame } from 'react-three-fiber'
import './index.css';
import Image from './Image';
import useInterval from './useInterval';
import {Spring} from 'react-spring/renderprops'


/**
const useSpring = (toValue, oldValue, frameCount) => {
  const lastValue = useRef();
  const springAmount = Math.abs((toValue - oldValue)) / frameCount;
  useFrame(() => {
    if (lastValue.current) {
      if (lastValue.current === toValue) {
        // No-op
      } else if (Math.abs(lastValue.current - toValue) <= springAmount) {
        lastValue.current = toValue
      } else if (lastValue.current < toValue) {
        lastValue.current = lastValue.current + springAmount
      } else if (lastValue.current > toValue) {
        lastValue.current = lastValue.current - springAmount
      }
    } else {
      lastValue.current = oldValue;
    }
  });
  return lastValue.current;
}
*/

const useSpringYPosition = (ref, toValue, springAmount) => {
  useFrame(() => {
    if (ref.current) {
      if (ref.current.position.y === toValue) {
        return
      } else if (Math.abs(ref.current.position.y - toValue) <= springAmount) {
        ref.current.position.y = toValue
      } else if (ref.current.position.y < toValue) {
        ref.current.position.y = ref.current.position.y + springAmount
      } else if (ref.current.position.y > toValue) {
        ref.current.position.y = ref.current.position.y - springAmount
      }
    }
  })
}

const useSpringXScale = (ref, toValue, springAmount) => {
  useFrame(() => {
    if (ref.current) {
      if (ref.current.scale.x === toValue) {
        return
      } else if (Math.abs(ref.current.scale.x - toValue) <= springAmount) {
        ref.current.scale.x = toValue
      } else if (ref.current.scale.x < toValue) {
        ref.current.scale.x = ref.current.scale.x + springAmount
      } else if (ref.current.scale.x > toValue) {
        ref.current.scale.x = ref.current.scale.x - springAmount
      }
    }
  })
}

const useSpringYScale = (ref, toValue, springAmount) => {
  useFrame(() => {
    if (ref.current) {
      if (ref.current.scale.y === toValue) {
        return
      } else if (Math.abs(ref.current.scale.y - toValue) <= springAmount) {
        ref.current.scale.y = toValue
      } else if (ref.current.scale.y < toValue) {
        ref.current.scale.y = ref.current.scale.y + springAmount
      } else if (ref.current.scale.y > toValue) {
        ref.current.scale.y = ref.current.scale.y - springAmount
      }
    }
  })
}


const useSpringXRotation = (ref, toValue, springAmount) => {
  useFrame(() => {
    if (ref.current) {
      if (ref.current.rotation.x === toValue) {
        return
      } else if (Math.abs(ref.current.rotation.x - toValue) <= springAmount) {
        ref.current.rotation.x = toValue
      } else if (ref.current.rotation.x < toValue) {
        ref.current.rotation.x = ref.current.rotation.x + springAmount
      } else if (ref.current.rotation.x > toValue) {
        ref.current.rotation.x = ref.current.rotation.x - springAmount
      }
    }
  })
}

const useSpringZRotation = (ref, toValue, springAmount) => {
  useFrame(() => {
    if (ref.current) {
      if (ref.current.rotation.cube1ZRotation === toValue) {
        return
      } else if (Math.abs(ref.current.rotation.z - toValue) <= springAmount) {
        ref.current.rotation.z = toValue
      } else if (ref.current.rotation.z < toValue) {
        ref.current.rotation.z = ref.current.rotation.z + springAmount
      } else if (ref.current.rotation.z > toValue) {
        ref.current.rotation.z = ref.current.rotation.z - springAmount
      }
    }
  })
}
function Thing(props) {
  const { previousShape, shape } = props
  const cube1Ref = useRef()
  const cube1YPosition = {
    none: 0,
    cube: 0,
    dc: 0,
    resume: 0
  }

  const cube1XScale = {
    none: 1,
    cube: 1,
    dc: 0.01,
    resume: 0
  }

  const cube1YScale = {
    none: 1,
    cube: 1,
    dc: 1,
    resume: 1
  }

  const cube1XRotation = {
    none: 0,
    cube: 0,
    dc: 0,
    resume: 0
  }


  const springAmountForFrameCount = (oldValue, newValue, frameCount) => {
    return Math.abs((newValue - oldValue)) / frameCount
  }
  useFrame(() => {
    if (shape === 'cube') {
      cube1Ref.current.rotation.y = cube1Ref.current.rotation.y + 0.01
      cube1Ref.current.rotation.x = cube1Ref.current.rotation.x + 0.01
    } else {
      cube1Ref.current.rotation.x = 0;
      cube1Ref.current.rotation.y = 0;
    }
  });

  const color =  'white';
  return (
    <Spring
      from={{
        xScale: shape === 'cube' ? 1.8 : 1,
        zScale: shape === 'cube' ? 0.1 : 1,
        zPosition: shape === 'cube' ? 0.7 : 0,
      }}
      to={{
        xScale: shape === 'cube' ? 1 : 1.8,
        zScale: shape === 'cube' ? 1 : 0.1,
        zPosition: shape === 'cube' ? 0 : 0.7,
      }}
    >
      {props => (
        <mesh ref={cube1Ref} position={[0,0,props.zPosition]}>
          <boxBufferGeometry attach="geometry" args={[props.xScale, 1, props.zScale]} />
          {shape === 'cube' ? (
            <meshPhongMaterial color={color} wireframe attach="material" />
          ): (
            <Image url="/1.png" />
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
  const onMouseOverResume = e => {
    setShapes(shapes => ({
      previousShape: shapes.shape,
      shape: 'resume'
    }));
  }
  const onMouseOutResume = e => {
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
        <Thing shape={shapes.shape} previousShape={shapes.previousShape} />
      </Canvas>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
