import ejs from 'ejs'
import path from 'path';
import ImageToBase64 from './ImageToBse64Converter.js';

class ReportRenderingService{

    static async renderHTMLReport(data, templatePath){
        const options = {};
        const dir = path.resolve();
        data.image = ImageToBase64.convert(dir+"/image/logo.png")
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