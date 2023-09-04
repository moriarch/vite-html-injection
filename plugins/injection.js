import path from "path";
import fs from "fs";
import appendGlobalParts from "./components/appendGlobalParts";
import includeSubViews from "./components/includeSubViews";

const injection = {
    config:null,
    html: null,
    options:{
        globalParts:false
    },
    regex:{
        tag: new RegExp('<import(?:.*?)="([^"]+)"(.*?)/>', 'gs'),
        attr: new RegExp('(?:(?:\s)?([a-z0-9_-]+)(?:="([^"]*)"|))', 'gi'),
        // replaceAttr: new RegExp('{=[$]([a-z0-9_-]+)}', 'gi'),
    },
    getFile:function(filePath){
        let fullFilePath = path.resolve(this.rootPath, filePath);
        return {
            path: fullFilePath,
            data: fs.readFileSync(filePath, "utf8")
        }
    },
    init:function({config, html, options, rootPath}){
        this.html = html;
        this.config = config;
        this.rootPath = rootPath;
        this.options = {...this.options,...options};

        this.includeSubViews()
        if(this.options.globalParts) this.appendGlobalParts({parts: this.options.globalParts});
        
        
    },
    appendGlobalParts: appendGlobalParts,
    includeSubViews:includeSubViews,
    out:function(){
        return this.html;
    }
}
export default injection;
