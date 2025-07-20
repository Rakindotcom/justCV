"use client"

import { useState } from "react"
import PersonalInfoForm from "./forms/PersonalInfoForm"
import SummaryForm from "./forms/SummaryForm"
import EducationForm from "./forms/EducationForm"
import ExperienceForm from "./forms/ExperienceForm"
import SkillsForm from "./forms/SkillsForm"
import ProjectsForm from "./forms/ProjectsForm"
import AdditionalForm from "./forms/AdditionalForm"

const CVForm = ({ cvData, onDataChange }) => {
  const [activeSection, setActiveSection] = useState("personal")

  const sections = [
    { id: "personal", label: "Personal Info", icon: "👤", color: "from-cyan-500 to-blue-500" },
    { id: "summary", label: "Summary", icon: "📄", color: "from-blue-500 to-purple-500" },
    { id: "experience", label: "Experience", icon: "💼", color: "from-purple-500 to-pink-500" },
    { id: "education", label: "Education", icon: "🎓", color: "from-pink-500 to-red-500" },
    { id: "skills", label: "Skills", icon: "⚡", color: "from-red-500 to-orange-500" },
    { id: "projects", label: "Projects", icon: "🚀", color: "from-orange-500 to-yellow-500" },
    { id: "additional", label: "Additional", icon: "➕", color: "from-yellow-500 to-green-500" },
  ]

  const renderActiveForm = () => {
    switch (activeSection) {
      case "personal":
        return <PersonalInfoForm data={cvData.personalInfo} onChange={(data) => onDataChange("personalInfo", data)} />
      case "summary":
        return <SummaryForm data={cvData.summary} onChange={(data) => onDataChange("summary", data)} />
      case "experience":
        return <ExperienceForm data={cvData.experience} onChange={(data) => onDataChange("experience", data)} />
      case "education":
        return <EducationForm data={cvData.education} onChange={(data) => onDataChange("education", data)} />
      case "skills":
        return <SkillsForm data={cvData.skills} onChange={(data) => onDataChange("skills", data)} />
      case "projects":
        return <ProjectsForm data={cvData.projects} onChange={(data) => onDataChange("projects", data)} />
      case "additional":
        return (
          <AdditionalForm
            certifications={cvData.certifications}
            languages={cvData.languages}
            onCertificationsChange={(data) => onDataChange("certifications", data)}
            onLanguagesChange={(data) => onDataChange("languages", data)}
          />
        )
      default:
        return null
    }
  }

  const activeColor = sections.find((s) => s.id === activeSection)?.color || "from-cyan-500 to-blue-500"

  return (
    <div className="h-full p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">CV Information</h2>
        <p className="text-gray-400">Fill in your details to create your professional CV</p>
      </div>

      {/* Section Navigation */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`relative p-3 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
              activeSection === section.id
                ? `bg-gradient-to-r ${section.color} text-white shadow-lg`
                : "bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600"
            }`}
          >
            <div className="flex flex-col items-center gap-1">
              <span className="text-lg">{section.icon}</span>
              <span className="text-xs">{section.label}</span>
            </div>
            {activeSection === section.id && <div className="absolute inset-0 bg-white/10 rounded-xl"></div>}
          </button>
        ))}
      </div>

      {/* Active Section Header */}
      <div className={`mb-6 p-4 rounded-xl bg-gradient-to-r ${activeColor} bg-opacity-10 border border-gray-700`}>
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${activeColor} flex items-center justify-center`}>
            <span className="text-white text-lg">{sections.find((s) => s.id === activeSection)?.icon}</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{sections.find((s) => s.id === activeSection)?.label}</h3>
            <p className="text-gray-400 text-sm">
              {activeSection === "personal" && "Your basic contact information"}
              {activeSection === "summary" && "A brief overview of your professional background"}
              {activeSection === "experience" && "Your work history and achievements"}
              {activeSection === "education" && "Your academic background"}
              {activeSection === "skills" && "Your technical and soft skills"}
              {activeSection === "projects" && "Your notable projects and contributions"}
              {activeSection === "additional" && "Certifications, languages, and more"}
            </p>
          </div>
        </div>
      </div>

      {/* Active Form */}
      <div className="max-h-96 overflow-y-auto custom-scrollbar">{renderActiveForm()}</div>
    </div>
  )
}

export default CVForm
