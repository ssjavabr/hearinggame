export default [
  // user
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: './Home' },
      { path: '/situation', component: './Situation' },
      { path: '/org', component: './Org' },
      { path: '/league', component: './League' },
      { path: '/about', component: './About' },
    ],
  },
];
