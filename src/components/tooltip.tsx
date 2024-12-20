export const Tooltip = ({ message }: { message: string }) => (
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 p-2 bg-gray-800 text-white rounded-md shadow-lg">
      {message}
    </div>
  );
  