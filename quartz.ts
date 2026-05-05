import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"  
import * as ExternalPlugin from "./.quartz/plugins"  
import { contentImage } from "./quartz/components/ContentImage"  
  
const config = await loadQuartzConfig({  
  plugins: {  
    emitters: [  
      ExternalPlugin.CustomOgImages({  
        colorScheme: "darkMode",  
        width: 1200,  
        height: 630,  
        excludeRoot: false,  
        imageStructure: contentImage, // Your custom component  
      }),  
    ],  
  },  
})  
  
export default config  
export const layout = await loadQuartzLayout()
