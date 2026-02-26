/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

export default function App() {
  const [url, setUrl] = useState('');
  const [qrValue, setQrValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const generateQrCode = () => {
    setQrValue(url);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">QR Code Generator</h1>
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 space-y-4">
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          placeholder="Enter URL or text here"
          value={url}
          onChange={handleInputChange}
        />
        <button
          className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200"
          onClick={generateQrCode}
        >
          Generate QR Code
        </button>

        {qrValue && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg flex justify-center">
            <QRCodeSVG value={qrValue} size={256} level="H" />
          </div>
        )}
      </div>
    </div>
  );
}
