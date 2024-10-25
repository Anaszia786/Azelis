"use client";

interface Ingredients {
  name?: string; // This will be the file path to download
  download?: string; // This will be the download icon URL
  filepic?: string; // This will be the file picture/icon URL
}

const Ingredients: React.FC<Ingredients> = ({ filepic, name, download }) => {
  // download button functionality
  const handleClick = () => {
    if (name) {
      const link = document.createElement("a");
      link.href = name; // Set the file path as the href for download
      link.setAttribute("download", name.split("/").pop() || ""); // Extract the file name from the path or use ""
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.log("No file path provided");
    }
  };
  // Name of file which will show on ui
  const supname = name?.split("/").pop();

  return (
    <div className="flex items-center justify-between bg-[#FFFFFF14] border-[1.5px] rounded-lg p-4 cursor-default   ">
      <div className="flex items-center gap-3">
        <div className="bg-[#265BA730] rounded-lg p-2">
          <img src={filepic} alt="file-logo" />
        </div>
        <div className="font-semibold text-[#1D1D1D]">{supname}</div>
      </div>
      <div className="border-[#D6D6D6] border-[2px] p-2 rounded-md cursor-pointer">
        <img
          onClick={handleClick}
          className="cursor-pointer"
          src={download}
          alt="download"
        />
      </div>
    </div>
  );
};

export default Ingredients;
