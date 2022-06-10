import ejs from 'ejs'
import path from 'path';
const __dirname = path.resolve();


class ReportRenderingService{

    static async renderHTMLReport(templatePath){
        const options = {};
        const absolutePath = path.join(__dirname, "../templates/", templatePath);
        
        return new Promise((resolve, reject) => {
            ejs.renderFile(absolutePath, options, (error, data) => {
                if(error){
                    reject("Unable to render the html content"); 
                }
                resolve(data);
            })
        }) 
    }
}

export default ReportRenderingService;