"use client";

import { useState } from "react";
import { InterviewProcessTemplate } from "./types/interviewProcess";
import ProcessVisualizer from "./ProcessVisualizer";
import { bigTechFrontendProcess } from "./data/bigTechFrontendProcess";
import { startupFrontendProcess } from "./data/startupFrontendProcess";
import { europeanFrontendProcess } from "./data/europeanFrontendProcess";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const templatesMap: Record<string, InterviewProcessTemplate> = {
  "Big Tech": bigTechFrontendProcess,
  Startup: startupFrontendProcess,
  "European Product Company": europeanFrontendProcess,
};

export default function ProcessSelector() {
  const [selectedTemplateName, setSelectedTemplateName] =
    useState<string>("Big Tech");

  const selectedTemplate = templatesMap[selectedTemplateName];

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-lg shadow-md">
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Select Process Template:
        </label>

        <Select
          value={selectedTemplateName}
          onValueChange={setSelectedTemplateName}
        >
          <SelectTrigger className="w-[260px]">
            <SelectValue placeholder="Select Process Template" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(templatesMap).map((templateName) => (
              <SelectItem key={templateName} value={templateName}>
                {templateName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <ProcessVisualizer template={selectedTemplate} />
    </div>
  );
}
