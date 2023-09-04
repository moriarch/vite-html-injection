function includeSubViews() {
    const matches = [...this.html.matchAll(this.regex.tag)];
    if(matches.length===0) return null;

    matches.forEach(match=>{
        const [tag, url, attrs] = match;
        const file = this.getFile(url);
        let component = file.data;
        
        [...attrs.matchAll(this.regex.attr)].forEach(attr=>{
            component = component.replace(new RegExp(`{{\\s*${attr[1]}\\s*}}`, 'g'), attr[2]);
        })
       
        this.html = this.html.replace(tag, component)
        
        this.includeSubViews()
    })
    
}
export default includeSubViews