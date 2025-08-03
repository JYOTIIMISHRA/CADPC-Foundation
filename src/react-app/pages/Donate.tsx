import { useEffect } from 'react';

export default function Donate() {
  useEffect(() => {
    // Redirect to Google Form
    window.location.href = 'https://forms.gle/YOUR_GOOGLE_FORM_ID';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center p-8 bg-white rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Redirecting to Donation Form</h2>
        <p className="text-gray-600 mb-6">
          You are being redirected to our secure donation form. If you are not redirected automatically, 
          please click the button below.
        </p>
        <a
          href="https://forms.gle/YOUR_GOOGLE_FORM_ID"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-full hover:from-emerald-600 hover:to-blue-700 transition-all duration-200"
        >
          Go to Donation Form
        </a>
      </div>
    </div>
  );
}
