import React from 'react';
import { ARIcon, RotateIcon, ResetIcon } from './icons';

interface ViewControlsProps {
  isARSupported: boolean;
  onEnterAR: () => void;
  isAutoRotateEnabled: boolean;
  onToggleAutoRotate: () => void;
  onResetView: () => void;
}

const ViewControls: React.FC<ViewControlsProps> = ({
  isARSupported,
  onEnterAR,
  isAutoRotateEnabled,
  onToggleAutoRotate,
  onResetView,
}) => {
  return (
    <div className="absolute bottom-8 left-4 sm:left-8 z-20 pointer-events-auto">
      <div className="flex items-center gap-2 bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-full shadow-2xl border border-gray-200 dark:border-white/10 p-2">
        <button
          onClick={onEnterAR}
          className="p-3 rounded-full bg-gray-200/50 dark:bg-gray-800/50 hover:bg-gray-300/80 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          title={isARSupported ? 'View in AR' : 'AR not supported on this device'}
          disabled={!isARSupported}
        >
          <ARIcon className="w-6 h-6" />
        </button>
        <button
          onClick={onToggleAutoRotate}
          className={`p-3 rounded-full transition-colors ${
            isAutoRotateEnabled
              ? 'bg-red-600 text-white'
              : 'bg-gray-200/50 dark:bg-gray-800/50 hover:bg-gray-300/80 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
          }`}
          title={isAutoRotateEnabled ? 'Disable Auto-Rotate' : 'Enable Auto-Rotate'}
        >
          <RotateIcon className="w-6 h-6" />
        </button>
        <button
          onClick={onResetView}
          className="p-3 rounded-full bg-gray-200/50 dark:bg-gray-800/50 hover:bg-gray-300/80 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
          title="Reset View"
        >
          <ResetIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ViewControls;