/// <Xreference path="three.src.d.ts"/>

import { Vector3 } from 'three/src/math/Vector3.js';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js';

export function foo() {
    return new Vector3(0,0,0).divideScalar(100);
}

const bar = new WebGLRenderer();
console.log('foo', foo());
