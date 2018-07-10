import {
    Vector3
} from 'three/src/math/Vector3.js';

import {
    get
} from './x';

export function foo() {
    //return 33;
    return new Vector3(0, 0, 0).divideScalar(100);
}

console.log('bar', foo(), get());
