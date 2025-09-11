export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 border-t border-gray-200 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-3 mb-4 sm:mb-6">
          <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
          <span className="text-base sm:text-lg font-semibold text-gray-900">Javed Sidiqi</span>
        </div>
        <p className="text-gray-600 text-sm sm:text-base">
          Builder, Innovator, Entrepreneur
        </p>
        <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
          &copy; {currentYear} Javed Sidiqi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}