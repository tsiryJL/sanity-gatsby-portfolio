export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e1f153d5079a82345847f0c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-q98u7mws',
                  apiId: '2ec38813-d14b-4922-b49c-2bbd26978319'
                },
                {
                  buildHookId: '5e1f153d9ae4efd4e84d2eff',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-i29itbcr',
                  apiId: '73788ea6-c3d5-4733-b91c-eb29974ae932'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tsiryJL/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-i29itbcr.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
