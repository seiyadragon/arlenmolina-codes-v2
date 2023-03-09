// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
    modules: ['nuxt-icon', 'nuxt-calendly'],
    buildModules: ['@nuxt/typescript-build'],
    plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1',
            title: "Arlen Molina -- Web developer",
            meta: [
                {
                    name: 'description', 
                    content: `
                        Find out whether a web developer is the right choice for you. 
                        Discover how you can take you website to the next level and turn your vision into a reality!
                        Get in touch today!
                    `
                }
            ]
        }
    },
}
