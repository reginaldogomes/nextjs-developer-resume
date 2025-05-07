'use client'

import Script from 'next/script'

const measurementId = process.env.NEXT_PUBLIC_MEASUREMENT_ID

const GoogleAnalytics: React.FC = () => {
  if (!measurementId) {
    console.warn('Google Analytics Measurement ID não está definido.')
    return null
  }

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script id="gtag-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', { page_path: window.location.pathname });
        `}
      </Script>
    </>
  )
}

export default GoogleAnalytics
