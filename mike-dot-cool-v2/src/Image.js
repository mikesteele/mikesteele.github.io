import ReactDOM from 'react-dom'
import * as THREE from 'three/src/Three'
import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { apply as applyThree, Canvas, useRender, useThree } from 'react-three-fiber'

/** This component loads an image and projects it onto a plane */
function Image({ url, opacity, scale, ...props }) {
  const texture = useMemo(() => new THREE.CanvasTexture( document.querySelector('#myCanvas') ), [url])
  //const texture = useMemo(() => new THREE.TextureLoader().load(url), [url])
  return (
    <meshLambertMaterial attach="material" opacity={0.3}>
      <primitive attach="map" object={texture} />
    </meshLambertMaterial>
  )
}

export default Image;
