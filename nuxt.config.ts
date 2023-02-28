// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
    modules: ['nuxt-icon', 'nuxt-calendly'],
    buildModules: ['@nuxt/typescript-build'],
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1',
            title: "",
            meta: [
                {
                    name: 'description', 
                    content: `
                        
                    `
                }
            ]
        }
    },
}
