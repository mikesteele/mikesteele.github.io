import React, { useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Canvas, useFrame } from 'react-three-fiber'
import './index.css';

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
  const cube2Ref = useRef()
  const cube1YPosition = {
    none: 0,
    cube: 0.25,
    dc: 0.5
  }

  const cube2YPosition = {
    none: 0,
    cube: -0.25,
    dc: -0.5
  }

  const cube1XScale = {
    none: 1,
    cube: 1,
    dc: 2.5
  }

  const cube2XScale = {
    none: 1,
    cube: 1,
    dc: 2
  }

  const cube1XRotation = {
    none: 0,
    cube: 0,
    dc: -0.4
  }

  const cube2XRotation = {
    none: 0,
    cube: 0,
    dc: -0.4
  }

  const springAmountForFrameCount = (oldValue, newValue, frameCount) => {
    return Math.abs((newValue - oldValue) / frameCount)
  }

  // Cube 1 springs
  useSpringYPosition(cube1Ref, cube1YPosition[shape], springAmountForFrameCount(cube1YPosition[previousShape], cube1YPosition[shape], 15))
  useSpringXScale(cube1Ref, cube1XScale[shape], springAmountForFrameCount(cube1XScale[previousShape], cube1XScale[shape], 15))
  useSpringXRotation(cube1Ref, cube1XRotation[shape], springAmountForFrameCount(cube1XRotation[previousShape], cube1XRotation[shape], 15))

  // Cube 2 springs
  useSpringYPosition(cube2Ref, cube2YPosition[shape], springAmountForFrameCount(cube2YPosition[previousShape], cube2YPosition[shape], 15))
  useSpringXScale(cube2Ref, cube2XScale[shape], springAmountForFrameCount(cube2XScale[previousShape], cube2XScale[shape], 15))
  useSpringXRotation(cube2Ref, cube2XRotation[shape], springAmountForFrameCount(cube2XRotation[previousShape], cube2XRotation[shape], 15))

  useFrame(() => {
    cube1Ref.current.rotation.y = cube1Ref.current.rotation.y + 0.01
    cube2Ref.current.rotation.y = cube2Ref.current.rotation.y + 0.01
  })

  return (
    <>
      <mesh ref={cube1Ref}>
        <boxBufferGeometry attach="geometry" args={[1, 0.5, 1]} />
        <meshNormalMaterial attach="material" />
      </mesh>
      <mesh ref={cube2Ref}>
        <boxBufferGeometry attach="geometry" args={[1, 0.5, 1]} />
        <meshNormalMaterial attach="material" />
      </mesh>
    </>
  )
}

const App = () => {
  const [shape, setShape] = React.useState('cube')
  const [previousShape, setPreviousShape] = React.useState('none')
  const onMouseOver = e => {
    setPreviousShape('cube')
    setShape('dc')
  }
  const onMouseOut = e => {
    setPreviousShape('dc')
    setShape('cube')
  }
  return (
    <>
      <p>{shape}</p>
      <p>{previousShape}</p>
      <h1 onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
        hi
      </h1>
      <Canvas>
        <Thing shape={shape} previousShape={previousShape} />
      </Canvas>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
