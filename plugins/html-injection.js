
import injection from "./injection";



const htmlInjectionPlugin = (options) => {
    
    let config;
    return {
      name: "html-injection",
      configResolved(resolvedConfig) {
        config = resolvedConfig;
      },
      transformIndexHtml(html) {

        injection.init({
            config,
            html,
            options,
            rootPath: config.root,
        })
        
        return injection.out();
      },
    };
  }

  export default htmlInjectionPlugin