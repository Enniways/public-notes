import { i18n } from "../../i18n"  
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"  
  
const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {  
  return (  
    <article class="popover-hint" style="text-align: center; padding: 2rem;">  
      <h1>404</h1>  
      <p>This page doesn't exist or isn't available. This Pokémon is cool too though!!! :3</p>  
        
      <div id="pokemon-container" style="margin: 2rem 0;">  
        <img     
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"  
          alt="Pokemon"  
          style="width: 96px; height: 96px; image-rendering: pixelated;"  
        />  
        <p style="margin-top: 0.5rem; font-family: monospace;">  
          #25  
        </p>  
      </div>  
        
      <a href="/" style="display: inline-block; margin-top: 1rem; padding: 0.5rem 1rem; background: var(--secondary); color: var(--dark); text-decoration: none; border-radius: 4px;">  
        ← Go Home  
      </a>  
        
      <script  
        dangerouslySetInnerHTML={{  
          __html: `  
            function showRandomPokemon() {  
              const container = document.getElementById('pokemon-container');  
              if (container) {  
                const newId = Math.floor(Math.random() * 1010) + 1;  
                container.innerHTML = \`  
                  <img     
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/\${newId}.png"    
                    alt="Pokemon"    
                    style="width: 96px; height: 96px; image-rendering: pixelated;"    
                  />  
                  <p style="margin-top: 0.5rem; font-family: monospace;">    
                    #\${newId}    
                  </p>  
                \`;  
              }  
            }  
              
            // Wait for DOM to be ready  
            if (document.readyState === 'loading') {  
              document.addEventListener('DOMContentLoaded', showRandomPokemon);  
            } else {  
              showRandomPokemon();  
            }  
              
            // Show new Pokemon on each navigation  
            document.addEventListener('nav', showRandomPokemon);  
              
            // Also show new Pokemon when DOM is rendered (for popovers)  
            document.addEventListener('render', showRandomPokemon);  
              
            // Cleanup on navigation  
            window.addCleanup(() => {  
              document.removeEventListener('nav', showRandomPokemon);  
              document.removeEventListener('render', showRandomPokemon);  
            });  
          `,  
        }}  
      />  
    </article>  
  )  
}  
  
export default (() => NotFound) satisfies QuartzComponentConstructor
