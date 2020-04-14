export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e956f614bae0d75bd59261e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-k7zgeyhz',
                  apiId: '046cb4b1-6805-4a14-88f3-33b6483859ea'
                },
                {
                  buildHookId: '5e956f61fda81b07765eba6c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1jb6xgaj',
                  apiId: '72c1d33c-386e-4075-a2a2-a6abf1fd34e0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jente-Penterman/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1jb6xgaj.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
