import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  // Image links array
  const imgLinks = [
    { src: '/gallery/image_1.webp', category: 'category1' },
    { src: '/gallery/image_2.webp', category: 'category2' },
    { src: '/gallery/image_3.webp', category: 'category1' },
    { src: '/gallery/image_4.webp', category: 'category3' },
    { src: '/gallery/image_5.webp', category: 'category2' },
    { src: '/gallery/image_6.webp', category: 'category1' },
    { src: '/gallery/image_7.webp', category: 'category3' },
    { src: '/gallery/image_8.webp', category: 'category2' },
    { src: '/gallery/image_9.webp', category: 'category1' },
    { src: '/gallery/image_10.webp', category: 'category3' },
    { src: '/gallery/image_11.webp', category: 'category2' },
    { src: '/gallery/image_12.webp', category: 'category1' },
    { src: '/gallery/image_13.webp', category: 'category3' },
    { src: '/gallery/image_14.webp', category: 'category2' },
    { src: '/gallery/image_15.webp', category: 'category1' },
    { src: '/gallery/image_16.webp', category: 'category3' },
    { src: '/gallery/image_17.webp', category: 'category2' },
    { src: '/gallery/image_18.webp', category: 'category1' },
    { src: '/gallery/image_19.webp', category: 'category3' },
    { src: '/gallery/image_20.webp', category: 'category2' },
    { src: '/gallery/image_21.webp', category: 'category1' },
    { src: '/gallery/image_22.webp', category: 'category3' },
    { src: '/gallery/image_23.webp', category: 'category2' },
    { src: '/gallery/image_24.webp', category: 'category1' },
    { src: '/gallery/image_25.webp', category: 'category3' },
    { src: '/gallery/image_26.webp', category: 'category2' },
    { src: '/gallery/image_27.webp', category: 'category1' },
  ];

  const handleImageClick = (link: string) => {
    setSelectedImage(link);
  };

  // Extract image number from link
  const getImageNumber = (link: string) => {
    const match = link.match(/image_(\d+)\.webp/);
    return match ? match[1] : '';
  };

  const filteredImages = filter === 'all' ? imgLinks : imgLinks.filter(img => img.category === filter);

  return (
    <div className="min-h-screen p-8">
      {/* Header */}
      <div className="bg-gray-200 rounded-xl dark:bg-medium dark:border-gray-500 dark:border-2">
        <div className="max-w-7xl mx-auto mb-12 dark:bg-medium rounded-xl">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-4 pt-6 dark:text-white">Gallery</h1>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8">
          <button className={`px-4 py-2 mx-2 ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-white'}`} onClick={() => setFilter('all')}>All</button>
          <button className={`px-4 py-2 mx-2 ${filter === 'category1' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-white'}`} onClick={() => setFilter('category1')}>Category 1</button>
          <button className={`px-4 py-2 mx-2 ${filter === 'category2' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-white'}`} onClick={() => setFilter('category2')}>Category 2</button>
          <button className={`px-4 py-2 mx-2 ${filter === 'category3' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-white'}`} onClick={() => setFilter('category3')}>Category 3</button>
        </div>

        {/* Masonry Grid */}
        <div className="max-w-7xl mx-auto p-10 rounded-lg dark:bg-medium">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredImages.map((link) => (
              <div
                key={link.src}
                className="relative group overflow-hidden transform transition-all duration-300 hover:scale-[1.02]"
                onClick={() => handleImageClick(link.src)}
              >
                <div className="aspect-w-8 aspect-h-9">
                  <img
                    src={link.src}
                    alt={`Gallery image ${getImageNumber(link.src)}`}
                    className="object-cover w-full h-full rounded-lg shadow-transparent"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm">Image {getImageNumber(link.src)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-6xl w-full">
            <img
              src={selectedImage}
              alt={`Selected gallery image ${getImageNumber(selectedImage)}`}
              className="w-full h-full object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition-colors duration-200"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;