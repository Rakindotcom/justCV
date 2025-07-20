const Template1 = ({ data }) => {
  const formatDate = (dateString) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short" })
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 text-gray-800" style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <header className="border-b-2 border-blue-600 pb-6 mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{data.personalInfo?.name || "Your Name"}</h1>
        <div className="flex flex-wrap gap-4 text-gray-600">
          {data.personalInfo?.email && <span>📧 {data.personalInfo.email}</span>}
          {data.personalInfo?.phone && <span>📞 {data.personalInfo.phone}</span>}
          {data.personalInfo?.address && <span>📍 {data.personalInfo.address}</span>}
          {data.personalInfo?.linkedin && <span>💼 LinkedIn</span>}
          {data.personalInfo?.website && <span>🌐 Portfolio</span>}
        </div>
      </header>

      {/* Summary */}
      {data.summary && (
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-3 border-b border-gray-300 pb-1">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">{data.summary}</p>
        </section>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-3 border-b border-gray-300 pb-1">Work Experience</h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                  <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                </div>
                <div className="text-gray-600 text-right">
                  <p>
                    {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                  </p>
                </div>
              </div>
              {exp.description && <p className="text-gray-700 mb-2">{exp.description}</p>}
              {exp.achievements && exp.achievements.length > 0 && (
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {exp.achievements
                    .filter((ach) => ach.trim())
                    .map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-3 border-b border-gray-300 pb-1">Education</h2>
          {data.education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h3>
                  <p className="text-blue-600 font-medium">{edu.institution}</p>
                  {edu.gpa && <p className="text-gray-600">GPA: {edu.gpa}</p>}
                </div>
                <div className="text-gray-600">
                  <p>
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  </p>
                </div>
              </div>
              {edu.description && <p className="text-gray-700 mt-1">{edu.description}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {data.skills && data.skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-3 border-b border-gray-300 pb-1">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {data.projects && data.projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-3 border-b border-gray-300 pb-1">Projects</h2>
          {data.projects.map((project) => (
            <div key={project.id} className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                {project.link && <span className="text-blue-600 text-sm">🔗 View Project</span>}
              </div>
              <p className="text-gray-700 mb-2">{project.description}</p>
              {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Certifications */}
        {data.certifications && data.certifications.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-blue-600 mb-3 border-b border-gray-300 pb-1">Certifications</h2>
            {data.certifications.map((cert) => (
              <div key={cert.id} className="mb-2">
                <h3 className="font-semibold text-gray-900">{cert.name}</h3>
                <p className="text-blue-600 text-sm">{cert.issuer}</p>
                <p className="text-gray-600 text-sm">{formatDate(cert.date)}</p>
              </div>
            ))}
          </section>
        )}

        {/* Languages */}
        {data.languages && data.languages.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-blue-600 mb-3 border-b border-gray-300 pb-1">Languages</h2>
            {data.languages.map((lang) => (
              <div key={lang.id} className="mb-2">
                <span className="font-semibold text-gray-900">{lang.name}</span>
                <span className="text-gray-600 text-sm ml-2">({lang.proficiency})</span>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  )
}

export default Template1
