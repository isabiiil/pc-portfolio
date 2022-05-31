import folder from './../assets/folder.png';
import back from './../assets/back.png';
import file from './../assets/documents.png';
import code from './../assets/coding.png';

import microsoft from './../assets/ms.png';
import hunter from './../assets/hunter.jpg'
import roblox from './../assets/roblox.jpg';
import oden from './../assets/oden.png';
import jbs from './../assets/jbs.jpg';
import rfcuny from './../assets/rfcuny.png';
import caribou from './../assets/caribou.png';
import fiera from './../assets/fiera.jpeg';
import cuny from './../assets/cuny.jpeg';
import kt from './../assets/kt.jfif';
import rwjbh from './../assets/rwjbh.png';
import columbia from './../assets/columbia.jpg';

import cunyhk from './../assets/hackathon.png';
import craving from './../assets/craving.png';
import dsc from './../assets/dsc.png';
import php from './../assets/php.jpg';
import hg from './../assets/hg.png';
import hax from './../assets/hax.png';
import sinai from './../assets/sinai.jpg';
import colEng from './../assets/columbia-engineering.png';

export const root = [
  {
    id: 1,
    title: 'featured news',
    link: 'news',
    icon: folder,
  },
  {
    id: 2,
    title: 'work experiences',
    link: 'work',
    icon: folder,
  },
  {
    id: 3,
    title: 'extracurriculars',
    link: 'extras',
    icon: folder,
  },
  {
    id: 4,
    title: 'project highlights',
    link: 'proj',
    icon: folder,
  }
]

export const news = [
  {
    id: 1,
    title: 'root directory',
    link: 'root',
    icon: back,
  },
  {
    id: 2,
    title: 'NCWIT finalist',
    link: 'news',
    icon: file,
    content: 'Ncwit'
  },
  {
    id: 3,
    title: 'Codecademy interview',
    link: 'news',
    icon: file,
    content: 'Codecademy'
  },
  {
    id: 4, 
    title: 'MLH Top 50',
    link: 'news', 
    icon: file,
    content: 'Mlh'
  },
  {
    id: 5,
    title: '#BUILTBYGIRLS campaign',
    link: 'news',
    icon: file,
    content: 'Bbg'
  },
  {
    id: 6, 
    title: 'NJII Code-a-thon Grand Prize Winner',
    link: 'news',
    icon: file,
    content: 'Njii'
  },
  {
    id: 7,
    title: 'CAYC interview',
    link: 'news',
    icon: file,
    content: 'Cayc'
  },
  {
    id: 8, 
    title: 'Identification of novel phage',
    link: 'news',
    icon: file, 
    content: 'Ubrp',
  },
  {
    id: 9,
    title: 'HK Maker Lab',
    link: 'news',
    icon: file,
    content: 'Hkml'
  }
]

export const work = [
  {
    id: 1,
    title: 'root directory',
    link: 'root',
    icon: back,
  },
  {
    id: 2,
    title: 'Software Engineering Intern',
    company: 'Microsoft',
    link: 'work',
    icon: microsoft,
  },
  {
    id: 3,
    title: 'Undergraduate Teaching Assistant',
    company: 'Hunter College',
    link: 'work',
    icon: hunter,
  },
  {
    id: 4,
    title: 'Product Management Intern',
    company: 'Roblox',
    link: 'work',
    icon: roblox,
  },
  {
    id: 5, 
    title: 'Software Engineering Intern',
    company: 'Oden Technologies',
    link: 'work',
    icon: oden,
  },
  {
    id: 6,
    title: 'Director of Partnerships, Web Developer and Project Manager',
    company: 'JumpButton Studio',
    link: 'work',
    icon: jbs,
  },
  {
    id: 7,
    title: 'Teaching Assistant',
    company: 'Research Foundation of City University of New York',
    link: 'work',
    icon: rfcuny,
  },
  {
    id: 8,
    title: 'Web Development Intern',
    company: 'Caribou Health',
    link: 'work',
    icon: caribou,
  },
  {
    id: 9,
    title: 'Operations & IT Intern',
    company: 'Fiera Capital Inc.',
    link: 'work',
    icon: fiera,
  },
  {
    id: 10,
    title: 'Data Analytics Intern',
    company: 'City University of New York: Registrar',
    link: 'work',
    icon: cuny,
  },
  {
    id: 11,
    title: 'Quality Manager',
    company: 'Khan\'s Tutorial',
    link: 'work',
    icon: kt,
  },
  {
    id: 12,
    title: 'Nursing Informatics Intern',
    company: 'Robert Wood Johnson University Hospital',
    link: 'work',
    icon: rwjbh,
  },
  {
    id: 13,
    title: 'Research Associate',
    company: 'Columbia University Irving Medical Center',
    link: 'work',
    icon: columbia,
  }
]

export const extras = [
  {
    id: 1,
    title: 'root directory',
    link: 'root',
    icon: back,
  },
  {
    id: 2, 
    title: 'Lead Organizer',
    company: 'CUNY Hackathon',
    link: 'extras',
    icon: cunyhk,
  },
  {
    id: 3, 
    title: 'Founder',
    company: 'Craving',
    link: 'extras',
    icon: craving,
  },
  {
    id: 4,
    title: 'Founder and President',
    company: 'Google Developer Student Club',
    link: 'extras',
    icon: dsc,
  },
  {
    id: 5,
    title: 'Lead Developer and Board Member',
    company: 'The Purple Hydrangea Project',
    link: 'extras',
    icon: php,
  },
  {
    id: 6,
    title: 'Founder and Executive Director',
    company: 'HackGuild',
    link: 'extras',
    icon: hg,
  },
  {
    id: 7,
    title: 'Director of Operations',
    company: 'HAX',
    link: 'extras',
    icon: hax,
  },
  {
    id: 8,
    title: 'Research Intern',
    company: 'Icahn School of Medicine at Mount Sinai',
    link: 'extras',
    icon: sinai,
  },
  {
    id: 9,
    title: 'Student Intern',
    company: 'Fu Foundation School of Engineering and Applied Science',
    link: 'extras',
    icon: colEng,
  }
]

export const proj = [
  {
    id: 1,
    title: 'root directory',
    link: 'root',
    icon: back,
  },
  {
    id: 2,
    title: 'meds.fyi',
    link: 'proj',
    icon: code,
  },
  {
    id: 3,
    title: 'TrustBuilder',
    link: 'proj',
    icon: code,
  },
  {
    id: 4,
    title: 'WEmotion',
    link: 'proj',
    icon: code,
  },
  {
    id: 5,
    title: 'FoodLink',
    link: 'proj',
    icon: code,
  },
  {
    id: 6,
    title: 'MamaCare',
    link: 'proj',
    icon: code,
  }
]