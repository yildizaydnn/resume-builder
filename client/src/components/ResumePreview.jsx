import React from 'react'
import ModernTemplate from './templates/ModernTemplate.jsx'
import ClassicTemplate from './templates/ClassicTemplate.jsx'
import MinimalImageTemplate from './templates/MinimalImageTemplate.jsx'
import MinimalTemplate from './templates/MinimalTemplate.jsx'

const ResumePreview = ({ data, template, accentColor, classes = "" }) => {

  const renderTemplate = () => {
    switch (template) {
      case 'modern':
        return <ModernTemplate data={data} accentColor={accentColor} />
      case 'minimal':
        return <MinimalTemplate data={data} accentColor={accentColor} />
      case 'minimal-image':
        return <MinimalImageTemplate data={data} accentColor={accentColor} />
      default:
        return <ClassicTemplate data={data} accentColor={accentColor} />;
    }
  }

  return (
    <div className='w-full bg-gray-100'>
      {/* className kısmına bir boşluk ekledim: "shadow-md " + classes */}
      <div id='resume-preview' className={"max-w-3xl mx-auto p-6 bg-white shadow-md " + classes}>
        {renderTemplate()}
      </div>

      <style jsx>{`
        @page {
          size: A4;
          margin: 0;
        }

        @media print {
          /* Renklerin ve arka planların (accent color) görünmesini sağlar */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }

          html, body {
            width: 210mm;
            height: 297mm;
            overflow: hidden;
            background: white;
            margin: 0;
            padding: 0;
          }

          /* Sayfadaki her şeyi gizle */
          body * {
            visibility: hidden;
          }

          /* Sadece CV alanını ve içindekileri göster */
          #resume-preview, #resume-preview * {
            visibility: visible;
          }

          #resume-preview {
            position: absolute;
            left: 0;
            top: 0;
            width: 210mm;
            min-height: 297mm;
            margin: 0;
            padding: 0;
            box-shadow: none !important;
            border: none !important;
          }
        }
      `}</style>
    </div>
  )
}

export default ResumePreview