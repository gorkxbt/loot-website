'use client';

import Spline from '@splinetool/react-spline';

export default function SplineAnimation() {
  const onLoad = (splineApp: any) => {
    // Try to remove background from the Spline scene
    if (splineApp && splineApp.setBackground) {
      splineApp.setBackground(null);
    }
    // Also try setting background color to transparent
    if (splineApp && splineApp.scene && splineApp.scene.background) {
      splineApp.scene.background = null;
    }
  };

  return (
    <div style={{ 
      width: '100vw', 
      height: '1200px', 
      position: 'relative',
      left: '50%',
      right: '50%',
      marginLeft: '-50vw',
      marginRight: '-50vw',
      overflow: 'visible',
      background: 'transparent'
    }}>
      <style jsx>{`
        canvas {
          background: transparent !important;
          background-color: transparent !important;
        }
      `}</style>
      <Spline
        scene="https://prod.spline.design/tOaB81vTwEyKzXkH/scene.splinecode"
        onLoad={onLoad}
        style={{ 
          width: '100%', 
          height: '100%',
          background: 'transparent !important',
          backgroundColor: 'transparent !important'
        }}
      />
    </div>
  );
}