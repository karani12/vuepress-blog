import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { path } from "@vuepress/utils";
export default defineUserConfig<DefaultThemeOptions>({
    base: '/',
    title:"my vuepress blog",
    theme: path.resolve(__dirname, "./theme"),
    
    themeConfig:{
        navbar:[
            {
                text:"blog",
                link:"/blog/"
            }
        ]
    }

})