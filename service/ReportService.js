import ReportRenderingService from './ReportRenderingService.js';
import PDFRenderingService from './PDFRenderingService.js';

class ReportService{

    async createReport(data, templateName){
        const htmlContent = await ReportRenderingService.renderHTMLReport(data);
        console.log(htmlContent);
        const pdfdata = await PDFRenderingService.renderReport(htmlContent);
        return pdfdata;
    }
}


export default ReportService;