import * as THREE from 'three/src/Three'
import React, { useMemo } from 'react'

function Image({ url, opacity, scale, ...props }) {
  const texture = useMemo(() => new THREE.TextureLoader().load(url), [url])
  return (
    <meshLambertMaterial attach="material" >
      <primitive attach="map" object={texture} />
    </meshLambertMaterial>
  )
}

export default Image;
