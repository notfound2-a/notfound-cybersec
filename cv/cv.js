document.getElementById('downloadPdf').addEventListener('click', () => {
  const cv = document.getElementById('cvArea');

  html2pdf()
    .set({
      margin: 10,
      filename: 'CV-404-NOT-FOUND-CYBER-SECURITY.pdf',
      html2canvas: { scale: 2 },
      jsPDF: { format: 'a4', orientation: 'portrait' }
    })
    .from(cv)
    .save();
});
