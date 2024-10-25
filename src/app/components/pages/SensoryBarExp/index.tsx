"use client";
import React, { useState, useEffect } from "react";
import ExperienceCard from "@/app/components/common/ExperienceCard";
import { Experience, sensoryBarExpData } from "@/utils/experiences";

const SensoryBarExp = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    setExperiences(sensoryBarExpData);
  }, []);

  return (
    <div className="min-h-screen p-4">
      <ExperienceCard experiences={experiences} />
    </div>
  );
};

export default SensoryBarExp;
