/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/siba.gltf -t
Author: zixisun02 (https://sketchfab.com/zixisun51)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/shiba-faef9fe5ace445e7b2989d1c1ece361c
Title: Shiba
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useAppSelector } from "../../../redux/store.hooks";

type GLTFResult = GLTF & {
  nodes: {
    Group18985_default_0: THREE.Mesh;
    Box002_default_0: THREE.Mesh;
    Object001_default_0: THREE.Mesh;
  };
  materials: {
    ["default"]: THREE.MeshBasicMaterial;
  };
};

export function Siba(props: JSX.IntrinsicElements["group"] | any) {
  const { nodes, materials } = useGLTF(
    `${process.env.PUBLIC_URL}/models/siba.gltf`
  ) as GLTFResult;

  const isOther = props.other;

  const gardenType = useAppSelector((state: any) =>
    isOther ? state.garden.otherGardenData.type : state.garden.gardenData.type
  );

  let positionX, positionY, positionZ;
  if (gardenType === 0) {
    positionX = -2.2;
    positionY = 0.66;
    positionZ = -1.5;
  } else if (gardenType === 1) {
    positionX = 0.35;
    positionY = 0.54;
    positionZ = 0.1;
  } else if (gardenType === 2) {
    positionX = 2.65;
    positionY = 1.25;
    positionZ = -0.8;
  }

  const settingScale = () => {
    if (gardenType === 0) {
      return 0.7;
    } else if (gardenType === 1) {
      return 0.6;
    } else if (gardenType === 2) {
      return 0.6;
    }
  };

  const settingRotation = (
    gardenType: number | null
  ): THREE.Euler | undefined => {
    if (gardenType === 1) return new THREE.Euler(0, Math.PI / 2, 0);
    else if (gardenType === 2) return new THREE.Euler(0, Math.PI, 0);
  };

  return (
    <group
      {...props}
      dispose={null}
      scale={settingScale()}
      rotation={settingRotation(gardenType)}
      position={[positionX, positionY, positionZ]}
    >
      <mesh
        geometry={nodes.Group18985_default_0.geometry}
        material={materials["default"]}
        rotation={[-Math.PI / 2, 0, 0]}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Box002_default_0.geometry}
        material={materials["default"]}
        rotation={[-Math.PI / 2, 0, 0]}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Object001_default_0.geometry}
        material={materials["default"]}
        rotation={[-Math.PI / 2, 0, 0]}
        castShadow={true}
        receiveShadow={true}
      />
    </group>
  );
}