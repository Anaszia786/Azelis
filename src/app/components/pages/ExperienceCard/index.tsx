"use client";
import React from "react";
import ExperienceCard from "@/app/components/common/ExperienceCard";
import { experiencesData } from "@/utils/experiences";

const Experience = () => {
  return (
    <div className="min-h-screen py-4">
      <ExperienceCard experiences={experiencesData} />
    </div>
  );
};

export default Experience;
