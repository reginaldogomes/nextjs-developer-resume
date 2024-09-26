// lib/analytics.ts
export const GA_TRACKING_ID = 'G-422530133' // Substitua pelo seu ID do GA

// Função para enviar o evento de pageview para o Google Analytics
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}
