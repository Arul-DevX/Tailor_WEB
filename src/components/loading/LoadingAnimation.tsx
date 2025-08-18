import React from 'react';
import { Scissors } from 'lucide-react';
import useLoadingAnimation from './useLoadingAnimation';
import './loading.css';

export default function LoadingAnimation() {
  const { isVisible } = useLoadingAnimation();

  if (!isVisible) return null;

  return (
    <div className="loading-overlay">
      <div className="loading-content">
        <div className="scissors-container">
          <div className="scissors-wrapper">
            <Scissors className="scissors-icon" />
          </div>
          <div className="cutting-line">
            <div className="cutting-progress"></div>
          </div>
        </div>
        <p className="loading-text">Loading...</p>
      </div>
    </div>
  );
}