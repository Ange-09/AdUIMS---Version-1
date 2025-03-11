async function loadandFillPDF() {
    const existingPdfBytes = await fetch('assets/sample.pdf').then((res) => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const form = pdfDoc.getForm();
    
}