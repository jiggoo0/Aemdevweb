/** @format */
import React from "react"

interface GoogleMapProps {
  url: string
  className?: string
}

export default function GoogleMap({ url, className = "" }: GoogleMapProps) {
  if (!url) return null

  return (
    <div
      className={`h-full w-full grayscale-[0.5] transition-all duration-500 hover:grayscale-0 ${className}`}
    >
      <iframe
        src={url}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Business Location"
        className="min-h-[300px]"
      />
    </div>
  )
}
