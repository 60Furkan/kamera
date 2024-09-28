import React from 'react';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>ESP32-CAM Görüntü Akışı</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {/* İlk Kamera Görüntüsü */}
        <div>
          <h2>Kamera 1</h2>
          <img src="http://192.168.1.106/stream" alt="Kamera 1" width="400" />
        </div>
        {/* İkinci Kamera Görüntüsü */}
        <div>
          <h2>Kamera 2</h2>
          <img src="http://192.168.1.101/stream" alt="Kamera 2" width="400" />
        </div>
      </div>
    </div>
  );
}

export default App;
