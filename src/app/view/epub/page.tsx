'use client';

import { useState } from "react"
import { ReactReader } from "react-reader"

export default function epubPage() {
      const [location, setLocation] = useState<string | number>(0)

  return (
    <div>
        <div style={{ margin: 'auto', height: '100vh', maxWidth: '768px' }}>
            <ReactReader
                url="/mindset.epub"
                location={location}
                locationChanged={(epubcfi: string) => setLocation(epubcfi)}
                epubOptions={{
                    flow: 'scrolled',
                    manager: 'continuous',
                }}
            />
        </div>
    </div>
  )
}
