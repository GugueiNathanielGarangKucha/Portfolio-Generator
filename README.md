# Portfolio Generator

A modern, interactive portfolio generator built with React, Vite, and TailwindCSS. Create professional portfolios with ease and export them as PDF or HTML files.

## Features

- **Interactive Form Builder**: Easy-to-use form interface to input your portfolio information
- **Live Preview**: See your portfolio come to life in real-time
- **Multiple Sections**: Personal info, experience, education, projects, and skills
- **Export Options**: Download your portfolio as PDF or HTML
- **Modern Design**: Clean, professional layout with gradient headers and responsive design
- **No Backend Required**: Everything runs in the browser

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Fill in Your Information**: Use the form to add your personal details, work experience, education, projects, and skills
2. **Preview Your Portfolio**: Switch to preview mode to see how your portfolio looks
3. **Export**: Download your portfolio as a PDF or HTML file

## Portfolio Sections

### Personal Information
- Name and professional title
- Contact information (email, phone, location)
- Social links (GitHub, LinkedIn, website)

### Professional Summary
- Brief overview of your professional background and goals

### Experience
- Work history with position, company, duration, and descriptions
- Add multiple experiences

### Education
- Academic background with degree, institution, and year
- Add multiple educational entries

### Projects
- Portfolio projects with descriptions and technologies used
- Add multiple projects

### Skills
- List of technical and soft skills
- Comma-separated input for easy entry

## Export Options

### PDF Export
- High-quality PDF generation using html2canvas and jsPDF
- Maintains formatting and styling
- Automatic page breaks for long content

### HTML Export
- Standalone HTML file with embedded TailwindCSS
- Can be hosted anywhere or shared directly
- Responsive design works on all devices

## Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **TailwindCSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icons
- **html2canvas**: Convert HTML to canvas for PDF generation
- **jsPDF**: PDF generation library

## Project Structure

```
portfolio-generator/
├── public/
├── src/
│   ├── components/
│   │   ├── PortfolioForm.jsx    # Form component for data input
│   │   └── PortfolioPreview.jsx # Preview component
│   ├── App.jsx                  # Main application component
│   ├── main.jsx                 # React entry point
│   └── index.css                # TailwindCSS imports
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Customization

The portfolio generator is highly customizable. You can:

- Modify the color scheme in `PortfolioPreview.jsx`
- Add new sections by extending the data structure
- Customize the export functionality
- Add new themes or templates

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.
