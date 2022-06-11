import ejs from 'ejs'
import path from 'path';


class ReportRenderingService{

    static async renderHTMLReport(data, templatePath){
        const options = {};
        console.log("path 1");
        console.log(path.resolve());
        console.log("path 2");
        const dir = path.resolve();
        console.log("path 2" + dir);
        const absolutePath = path.join(dir, "/templates/", templatePath);
        
        return new Promise((resolve, reject) => {
            ejs.renderFile(absolutePath, data, options, (error, data) => {
                if(error){
                    reject("Unable to render the html content"); 
                }
                resolve(data);
            })
        }) 
    }
}

export default ReportRenderingService;