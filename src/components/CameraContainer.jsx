import Hls from 'hls.js';
import { Camera } from'./SVGs/Camera'
import { useEffect, useRef } from 'react';

export const CameraContainer = () => {

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    let hls;

    const initPlayer = () => {
      if (Hls.isSupported()) {
        hls = new Hls({
          maxBufferLength: 30,       // Aumenta el buffer (segundos)
          maxMaxBufferLength: 60,     // Máximo buffer permitido
          enableWorker: true,         // Usa Web Workers para mejor rendimiento
          lowLatencyMode: true,      // Reduce latencia
          backBufferLength: 10        // Mantiene segmentos anteriores en memoria
        });

        hls.loadSource('http://localhost:3001/stream/stream.m3u8');
        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(e => console.error("Auto-play falló:", e));
        });
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Soporte nativo para Safari
        video.src = 'http://localhost:3001/stream/stream.m3u8';
        video.addEventListener('loadedmetadata', () => {
          video.play().catch(e => console.error("Auto-play falló:", e));
        });
      }
    };

    initPlayer();

    return () => {
      if (hls) hls.destroy();
    };
  }, []);

  return (
    <div className="w-[70%] border-1 border-slate-300 p-[40px] rounded-xl">
      <span className='flex flex-row items-center pb-[10px] gap-[15px]'>
        <Camera w={40} h={40} c='black'/>
        <h3 className="text-xl font-semibold ">Transmision en vivo</h3>
        <p className='bg-red-400 text-white px-[5px] rounded-xl'>En VIVO</p>
      </span>
      <p className=" pb-[30px] text-slate-500">Camara estacion X</p>
      <div className="rounded-xl overflow-hidden ">
        <video
          ref={videoRef}
          controls
          autoPlay
          muted
          playsInline
          style={{ width: '100%', maxWidth: '800px' }}
        />
      </div>
    </div>
  )
}

