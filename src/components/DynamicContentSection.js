"use client";
import { useState, useEffect } from 'react';
import ServiceImageCarousel from './ServiceImageCarousel';

const DynamicContentSection = ({
  heading,
  content,
  images = [],
  imageTexts = [],
  imageLayout = '1x1',
  imageSide = 'right',
  showImageText = false,
  textColor = '#333333',
  headingColor = '#000000',
  imageTextColor = '#555555',
  backgroundColor = '#ffffff',
  padding = 'p-6',
  rounded = 'rounded-xl',
  shadow = 'shadow-xl',
  border = 'border-2 border-gray-200',
  // Add a new property to support embedded sections
  contentSections = [],
}) => {
  // For handling responsive layouts
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Convert layout string to grid configuration
  const getGridClass = (layout = imageLayout) => {
    switch (layout) {
      case '1x1':
        return 'grid-cols-1';
      case '1x2':
        return 'grid-cols-1 md:grid-cols-2';
      case '2x1':
        return 'grid-cols-1 md:grid-cols-2';
      case '3x1':
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case '2x2':
        return 'grid-cols-1 md:grid-cols-2';
      case '3x2':
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case '3x3':
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      default:
        return 'grid-cols-1';
    }
  };

  // Force mobile layout on small screens
  const isMobile = windowWidth < 768;
  const effectiveImageSide = isMobile ? 'top' : imageSide;
  
  // Determine if we're using the side-by-side layout
  const useGridLayout = ['2x1', '3x1', '2x2', '3x2', '3x3', '1x2'].includes(imageLayout);
  const isSideBySide = images.length > 0 && 
                       content && 
                       (imageSide === 'right' || imageSide === 'left') && 
                       !useGridLayout;

  // Render image grid layout
  const renderImageGrid = (sectionImages = images, sectionImageTexts = imageTexts, layout = imageLayout) => {
    if (!sectionImages || sectionImages.length === 0) return null;

    // For the side-by-side layout, we'll use the carousel
    if (isSideBySide && layout === imageLayout) {
      return (
        <div className={`w-full ${effectiveImageSide === 'left' ? 'order-first' : 'order-last'} lg:w-1/2`}>
          <ServiceImageCarousel images={sectionImages} />
        </div>
      );
    }

    // For regular grid layouts
    return (
      <div className={`grid gap-6 ${getGridClass(layout)} mt-6`}>
        {sectionImages.map((image, index) => (
          <div key={index} className="flex flex-col">
            <div className={`${shadow} ${rounded} ${border} overflow-hidden`}>
              <img
                src={image.src || image}
                alt={image.alt || `Image ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
            {showImageText && sectionImageTexts && sectionImageTexts[index] && (
              <p
                className="mt-3 text-center"
                style={{ color: imageTextColor }}
              >
                {sectionImageTexts[index]}
              </p>
            )}
          </div>
        ))}
      </div>
    );
  };

  // Render an embedded section with heading, content, and images
  const renderEmbeddedSection = (section, index) => {
    // Check if section has a side-by-side layout
    const sectionIsSideBySide = section.images && 
                               section.images.length > 0 && 
                               section.content && 
                               (section.imageSide === 'right' || section.imageSide === 'left') && 
                               !['2x1', '3x1', '2x2', '3x2', '3x3', '1x2'].includes(section.imageLayout || '1x1');
    
    const sectionImageSide = section.imageSide || imageSide;
    const effectiveSectionImageSide = isMobile ? 'top' : sectionImageSide;

    if (sectionIsSideBySide) {
      return (
        <div key={index} className="mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {effectiveSectionImageSide === 'left' ? (
              <div className={`w-full ${isMobile ? '' : 'lg:w-1/2'}`}>
                <ServiceImageCarousel images={section.images} />
              </div>
            ) : null}
            
            <div className={`w-full ${isMobile ? '' : 'lg:w-1/2'}`}>
              {section.heading && (
                <h2 
                  className="text-2xl font-bold mb-4"
                  style={{ color: headingColor }}
                >
                  {section.heading}
                </h2>
              )}
              {section.content && (
                <div 
                  className="prose max-w-none"
                  style={{ color: textColor }}
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              )}
            </div>
            
            {effectiveSectionImageSide === 'right' ? (
              <div className={`w-full ${isMobile ? '' : 'lg:w-1/2'}`}>
                <ServiceImageCarousel images={section.images} />
              </div>
            ) : null}
          </div>
        </div>
      );
    }

    return (
      <div key={index} className="mb-12">
        {section.heading && (
          <h2 
            className="text-2xl font-bold mb-4"
            style={{ color: headingColor }}
          >
            {section.heading}
          </h2>
        )}
        
        {section.content && (
          <div 
            className="prose max-w-none mb-6"
            style={{ color: textColor }}
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        )}
        
        {renderImageGrid(section.images, section.imageTexts, section.imageLayout)}
      </div>
    );
  };

  return (
    <div
      className={`${padding} ${rounded} ${shadow} ${border}`}
      style={{ backgroundColor }}
    >
      {isSideBySide ? (
        // Side-by-side layout
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {effectiveImageSide === 'left' ? renderImageGrid() : null}
          
          <div className={`w-full ${isMobile ? '' : 'lg:w-1/2'}`}>
            {heading && (
              <h2 
                className="text-2xl font-bold mb-4"
                style={{ color: headingColor }}
              >
                {heading}
              </h2>
            )}
            {content && (
              <div 
                className="prose max-w-none"
                style={{ color: textColor }}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
          </div>
          
          {effectiveImageSide === 'right' ? renderImageGrid() : null}
        </div>
      ) : contentSections.length > 0 ? (
        // Embedded sections layout
        <div>
          {heading && (
            <h1 
              className="text-3xl font-bold mb-6"
              style={{ color: headingColor }}
            >
              {heading}
            </h1>
          )}
          
          {content && (
            <div 
              className="prose max-w-none mb-10"
              style={{ color: textColor }}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
          
          {contentSections.map((section, index) => 
            renderEmbeddedSection(section, index)
          )}
        </div>
      ) : (
        // Standard layout (content first, then images)
        <div>
          {heading && (
            <h2 
              className="text-2xl font-bold mb-4"
              style={{ color: headingColor }}
            >
              {heading}
            </h2>
          )}
          
          {content && (
            <div 
              className="prose max-w-none"
              style={{ color: textColor }}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
          
          {renderImageGrid()}
        </div>
      )}
    </div>
  );
};

export default DynamicContentSection;