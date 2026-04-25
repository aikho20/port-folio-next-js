export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      <div className="relative w-[90vw] h-[90vh] rounded-sm bg-white p-5 overflow-auto shadow-lg z-10 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between border-b pb-3">
           <h5 className="my-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black"
          >
            ✕
          </button>
        </div>

        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}