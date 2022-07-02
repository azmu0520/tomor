import Generic from '../components/Generic';
import Women from '../components/Women';

export const data = [
  {
    id: 1,
    title: 'Women',
    path: '/women',
    Component: Women,
  },
  {
    id: 2,
    title: 'Men',
    path: '/men',
    Component: Generic,
  },
  {
    id: 3,
    title: 'Kids',
    path: '/kids',
    Component: Generic,
  },
];
