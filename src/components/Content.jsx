import React from 'react';
import border from './../assets/browser.png';
import { Codecademy, Default, Ncwit, Mlh, Bbg, Njii } from './News';

export default function Content({show}) {
  switch(show) {
    case 'Ncwit':
      return (
        <Ncwit />
      )
    case 'Codecademy':
      return (
        <Codecademy />
      )
    case 'Mlh':
      return (
        <Mlh />
      )
    case 'Bbg':
      return (
        <Bbg />
      )
    case 'Njii':
      return (
        <Njii />
      )
    default:
      return (
        <Default />
      )
  };
}