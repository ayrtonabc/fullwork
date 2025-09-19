// pages/grupowhatsapp.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function GrupoWhatsApp() {
  const router = useRouter();

  useEffect(() => {
    window.location.href = 'https://chat.whatsapp.com/KTstaeuqYjo2lIh5j8VIE3';
  }, []);

  return <p>Redirigiendo al grupo de WhatsApp...</p>;
}
