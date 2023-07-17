export default ({
  handlePrevious,
  handleSubmit,
  isLoading,
  activeStep,
  totalLength,
  isSubmitted,
}) => {
  return (
    <div className="flex justify-between mt-6">
      {activeStep !== 1 && (
        <button
          onClick={handlePrevious}
          className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
        >
          Previous
        </button>
      )}
      {activeStep === totalLength ? (
        <button
          onClick={handleSubmit}
          className={`px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading || isSubmitted}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      ) : (
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Next
        </button>
      )}
    </div>
  );
};
