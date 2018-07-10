/// <Xreference path="three.src.d.ts"/>

import { Vector3 } from 'three/src/math/Vector3.js';

export function foo() {
    return new Vector3(0,0,0).divideScalar(100);
}

console.log('foo', foo());
