import htmlPdf from 'html-pdf-node'

class PDFRenderingService{

    

    static async renderReport(htmlContent){
        const OPTIONS = {
            "format" : "A4",
            "orientation" : "portrait"
        };

        return new Promise((resolve, reject) => {
            const fileContent = {
                content : htmlContent,
                name : "report.pdf"
            };
            htmlPdf.generatePdf(fileContent, OPTIONS).then(buffer => {
                
                resolve(buffer);
            }).catch(error => {
                if(error){
                    reject("Error while converting to PDF");
                }
            });
        })
    }

}

export default PDFRenderingService;