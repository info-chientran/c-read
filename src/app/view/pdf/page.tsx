'use client';

import PdfViewer from '@/components/pdf-viewer/pdfViewer';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@/assets/scss/app/home.scss';

export default function PdfPage() {
    const file = '/front_end_handbook.pdf';
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        setInitialTab: (doc) => Promise.resolve(0),
    });

    return (
        <PdfViewer
            fileUrl={file}
            plugins={[defaultLayoutPluginInstance]}
            className="home"
        />
    );
}
