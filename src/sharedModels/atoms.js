import React, { useEffect } from 'react';
import {atom} from 'recoil';
import {address, contactability, personal, sections} from './fieldsEnums'

// export const atoms = new Map();

// const Store = () => {

//     useEffect(() => {
//         const fields = [...personal, ...address, ...contactability];

//     fields.map(field => atoms.set(field, atom({
//         key: field,
//         default: ''
//     })));

//     atoms.set('currentSection', atom({
//         key: 'currentSection',
//         default: sections.personal
//     }));
// }, [])

//     return <></>;
// }

// export default Store;