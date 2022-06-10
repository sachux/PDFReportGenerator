import htmlPdf from 'html-pdf'

class PDFRenderingService{

    OPTIONS = {
        "format" : "A4",
        "orientation" : "portrait"
    };

    static async renderReport(htmlContent){
        return new Promise((resolve, reject) => {
            htmlPdf.create(htmlContent, options).toBuffer(function(error, buffer){
                if(error){
                    reject("Error while converting to PDF");
                }
                resolve(buffer);
            });
        })
    }

}

export default PDFRenderingService;