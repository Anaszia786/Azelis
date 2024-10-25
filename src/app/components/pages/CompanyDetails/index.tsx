"use client";
import React, { useState } from "react";

interface FormData {
  companyName: string;
  websiteLink: string;
  headquarterLocation: string;
  numberOfEmployees: string;
  specialization: {
    marine: boolean;
    wind: boolean;
    decarbonization: boolean;
    container: boolean;
    others: boolean;
  };
  sectors: {
    tankers: boolean;
    naval: boolean;
    passenger: boolean;
    bulker: boolean;
    container: boolean;
    specialPurpose: boolean;
    others: boolean;
  };
}

export default function CompanyDetails() {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    websiteLink: "",
    headquarterLocation: "",
    numberOfEmployees: "",
    specialization: {
      marine: false,
      wind: false,
      decarbonization: false,
      container: false,
      others: false,
    },
    sectors: {
      tankers: false,
      naval: false,
      passenger: false,
      bulker: false,
      container: false,
      specialPurpose: false,
      others: false,
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (section: keyof FormData, key: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...(prevData[section] as Record<string, boolean>),
        [key]:
          !prevData[section][key as keyof (typeof prevData)[typeof section]],
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-8rem)]">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full text-center">
        <h1 className="text-2xl font-bold mb-4">General Details</h1>
        <p className="text-gray-600 mb-8">
          Please provide the necessary information about your company to ensure
          we can tailor our services to meet your specific needs.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Input Fields */}
            <div>
              <label className="block text-left font-bold mb-2">
                Name of Company
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Type here"
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-left font-bold mb-2">
                Website Link
              </label>
              <input
                type="text"
                name="websiteLink"
                value={formData.websiteLink}
                onChange={handleInputChange}
                placeholder="Type here"
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-left font-bold mb-2">
                Headquarter Location
              </label>
              <input
                type="text"
                name="headquarterLocation"
                value={formData.headquarterLocation}
                onChange={handleInputChange}
                placeholder="Type here"
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-left font-bold mb-2">
                Number of Employees
              </label>
              <input
                type="text"
                name="numberOfEmployees"
                value={formData.numberOfEmployees}
                onChange={handleInputChange}
                placeholder="Type here"
                className="w-full p-2 border rounded-lg"
              />
            </div>
          </div>

          {/* Specialization Section */}
          <div className="mb-6">
            <label className="block text-left font-bold mb-2">
              Specialization
            </label>
            <div className="grid grid-cols-5 gap-4">
              {Object.keys(formData.specialization).map((key, index) => (
                <div
                  key={key}
                  className={`flex items-center ${index >= 5 ? "ml-6" : ""}`}
                >
                  <input
                    type="checkbox"
                    checked={
                      formData.specialization[
                        key as keyof typeof formData.specialization
                      ]
                    }
                    onChange={() => handleCheckboxChange("specialization", key)}
                    className="w-5 h-5"
                  />
                  <label
                    className={`ml-2 ${
                      formData.specialization[
                        key as keyof typeof formData.specialization
                      ]
                        ? "font-bold"
                        : ""
                    }`}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                </div>
              ))}
            </div>
          </div>
          {/* Sectors Section */}
          <div className="mb-6">
            <label className="block text-left font-bold mb-2">Sectors</label>
            <div className="grid grid-cols-5 gap-4">
              {Object.keys(formData.sectors).map((key) => (
                <div key={key} className={`flex items-center`}>
                  <input
                    type="checkbox"
                    checked={
                      formData.sectors[key as keyof typeof formData.sectors]
                    }
                    onChange={() => handleCheckboxChange("sectors", key)}
                    className="w-5 h-5"
                  />
                  <label
                    className={`ml-2 ${
                      formData.sectors[key as keyof typeof formData.sectors]
                        ? "font-bold"
                        : ""
                    }`}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="px-20 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
}
