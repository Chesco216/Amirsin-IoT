import { useRef, useEffect } from 'react';
import { Camera } from './SVGs/Camera'
import Hls from 'hls.js';

export const CameraContainer = () => {

   const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    let hls;

    // Ruta exacta donde tu servidor Node.js sirve los archivos HLS
    const streamUrl = 'http://localhost:3002/stream/stream.m3u8';

    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(streamUrl);
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Soporte nativo para Safari
      video.src = streamUrl;
    }

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
        style={{ width: '100%', maxWidth: '800px' }}
      />
      </div>
    </div>
  )
}

