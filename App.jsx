import React, { useState } from 'react';
import PortfolioForm from './components/PortfolioForm';
import PortfolioPreview from './components/PortfolioPreview';
import { Eye, Edit, Download, FileText } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const App = () => {
  const [viewMode, setViewMode] = useState('edit');
  const [portfolioData, setPortfolioData] = useState({
    personalInfo: {
      name: '',
      title: '',
      email: '',
      phone: '',
      location: '',
      github: '',
      linkedin: '',
      website: ''
    },
    summary: '',
    experience: [],
    education: [],
    projects: [],
    skills: []
  });

  const handleDataChange = (newData) => {
    setPortfolioData(newData);
  };

  const exportToPDF = async () => {
    const element = document.getElementById('portfolio-preview');
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`${portfolioData.personalInfo.name || 'portfolio'}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const exportToHTML = () => {
    const element = document.getElementById('portfolio-preview');
    if (!element) return;

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${portfolioData.personalInfo.name || 'Portfolio'}</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 py-8">
    <div class="max-w-4xl mx-auto">
        ${element.innerHTML}
    </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${portfolioData.personalInfo.name || 'portfolio'}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Portfolio Generator</h1>
            <div className="flex items-center gap-4">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('edit')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                    viewMode === 'edit' 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Edit size={16} />
                  Edit
                </button>
                <button
                  onClick={() => setViewMode('preview')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                    viewMode === 'preview' 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Eye size={16} />
                  Preview
                </button>
              </div>
              
              {viewMode === 'preview' && (
                <div className="flex gap-2">
                  <button
                    onClick={exportToPDF}
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <Download size={16} />
                    Export PDF
                  </button>
                  <button
                    onClick={exportToHTML}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <FileText size={16} />
                    Export HTML
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {viewMode === 'edit' ? (
          <PortfolioForm data={portfolioData} onChange={handleDataChange} />
        ) : (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800">
                This is a preview of your portfolio. Use the export buttons above to download as PDF or HTML.
              </p>
            </div>
            <PortfolioPreview data={portfolioData} />
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
