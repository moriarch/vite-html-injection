


const injectionTypes = {
    'body': ({ html, data }) => {
        return html.replace("</body>", `${data}\n</body>`)
    },
    'body-prepend': ({ html, data }) => {
        return html.replace(/<body(.*)>/i, `$&\n${data}`);
    },
    'head': ({ html, data }) => {
        return html.replace("</head>", `${data}\n</head>`);
    },
}


export default function appendGlobalParts({ parts }) {

    const fileType = ({file, part}) => {
        
        if(!part.hasOwnProperty('type')) return file.data
        if(part.type === 'js') return `<script>\n${file.data}\n</script>\n`;
        if(part.type === 'css') return `<style>\n${file.data}\n</style>\n`;

        return file.data
    }


    parts.forEach(part => {
        if (injectionTypes.hasOwnProperty(part.injectTo)) {
            let file = this.getFile(part.path);
            let data = fileType({ file, part });
            this.html = injectionTypes[part.injectTo]({ html: this.html, data });
        } else
            console.log(`Undefined inject place: ${part.injectTo}`)
    });
}