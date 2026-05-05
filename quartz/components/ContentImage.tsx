// quartz/components/ContentImage.tsx  
import { SatoriOptions } from "satori/wasm"  
import { GlobalConfiguration } from "../cfg"  
import { SocialImageOptions, UserOpts } from "./imageHelper"  
import { QuartzPluginData } from "../plugins/vfile"  
  
export const contentImage: SocialImageOptions["imageStructure"] = (  
  cfg: GlobalConfiguration,  
  userOpts: UserOpts,  
  title: string,  
  description: string, // Ignored - we'll use content instead  
  fonts: SatoriOptions["fonts"],  
  fileData: QuartzPluginData,  
) => {  
  const { colorScheme } = userOpts  
    
  // Use first 300 characters of actual content  
  const contentPreview = fileData.text?.slice(0, 300) + (fileData.text?.length > 300 ? "..." : "")  
    
  return (  
    <div  
      style={{  
        display: "flex",  
        flexDirection: "column",  
        justifyContent: "center",  
        alignItems: "center",  
        height: "100%",  
        width: "100%",  
        backgroundColor: cfg.theme.colors[colorScheme].light,  
        padding: "3rem",  
      }}  
    >  
      <p  
        style={{  
          color: cfg.theme.colors[colorScheme].dark,  
          fontSize: 82,  
          textAlign: "center",  
          fontFamily: fonts[0].name,  
          lineHeight: 1.2,  
          marginBottom: "2rem",  
        }}  
      >  
        {title}  
      </p>  
      <p  
        style={{  
          color: cfg.theme.colors[colorScheme].dark,  
          fontSize: 32,  
          textAlign: "center",  
          fontFamily: fonts[1].name,  
          lineHeight: 1.4,  
          maxHeight: "60%",  
          overflow: "hidden",  
        }}  
      >  
        {contentPreview}  
      </p>  
    </div>  
  )  
}
