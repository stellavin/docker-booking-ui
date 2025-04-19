import React, { createContext, useContext, useState, useEffect } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      // Disable background scrolling and interactions when modal is open
      document.body.style.overflow = 'hidden';
      document.body.style.pointerEvents = 'none';
    } else {
      // Re-enable when modal is closed
      document.body.style.overflow = 'unset';
      document.body.style.pointerEvents = 'auto';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.pointerEvents = 'auto';
    };
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
      {isModalOpen && (
        <style>
          {`
            body > *:not(.modal-container) {
              pointer-events: none !important;
            }
            .modal-container {
              pointer-events: auto !important;
            }
          `}
        </style>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

export const ModalContainer = ({ children, onClose }) => {
  if (!children) return null;

  return (
    <div className="modal-container fixed inset-0 z-[9999]">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div 
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[10000] w-full"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}; 