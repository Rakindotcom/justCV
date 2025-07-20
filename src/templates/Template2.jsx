const Template2 = ({ data }) => {
  const formatDate = (dateString) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short" })
  }

  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-800" style={{ fontFamily: "Georgia, serif" }}>
      <div className="grid grid-cols-3 gap-0 min-h-screen">
        {/* Left Sidebar */}
        <div className="col-span-1 bg-gray-800 text-white p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">{data.personalInfo?.name || "Your Name"}</h1>
            <div className="w-12 h-1 bg-blue-500 mb-4"></div>
          </div>

          {/* Contact Info */}
          <section className="mb-8">
            <h2 className="text-lg font-bold mb-4 text-blue-400">CONTACT</h2>
            <div className="space-y-3 text-sm">
              {data.personalInfo?.email && (
                <div>
                  <p className="text-gray-300">Email</p>
                  <p className="break-all">{data.personalInfo.email}</p>
                </div>
              )}
              {data.personalInfo?.phone && (
                <div>
                  <p className="text-gray-300">Phone</p>
                  <p>{data.personalInfo.phone}</p>
                </div>
              )}
              {data.personalInfo?.address && (
                <div>
                  <p className="text-gray-300">Address</p>
                  <p>{data.personalInfo.address}</p>
                </div>
              )}
              {data.personalInfo?.linkedin && (
                <div>
                  <p className="text-gray-300">LinkedIn</p>
                  <p className="break-all">LinkedIn Profile</p>
                </div>
              )}
              {data.personalInfo?.website && (
                <div>
                  <p className="text-gray-300">Website</p>
                  <p className="break-all">Portfolio</p>
                </div>
              )}
            </div>
          </section>

          {/* Skills */}
          {data.skills && data.skills.length > 0 && (
            <section className="mb-8">
              <h2 className="text-lg font-bold mb-4 text-blue-400">SKILLS</h2>
              <div className="space-y-2">
                {data.skills.map((skill, index) => (
                  <div key={index} className="text-sm">
                    <p>{skill}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Languages */}
          {data.languages && data.languages.length > 0 && (
            <section className="mb-8">
              <h2 className="text-lg font-bold mb-4 text-blue-400">LANGUAGES</h2>
              <div className="space-y-2">
                {data.languages.map((lang) => (
                  <div key={lang.id} className="text-sm">
                    <p className="font-medium">{lang.name}</p>
                    <p className="text-gray-300 text-xs">{lang.proficiency}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications */}
          {data.certifications && data.certifications.length > 0 && (
            <section>
              <h2 className="text-lg font-bold mb-4 text-blue-400">CERTIFICATIONS</h2>
              <div className="space-y-3">
                {data.certifications.map((cert) => (
                  <div key={cert.id} className="text-sm">
                    <p className="font-medium">{cert.name}</p>
                    <p className="text-gray-300 text-xs">{cert.issuer}</p>
                    <p className="text-gray-300 text-xs">{formatDate(cert.date)}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Content */}
        <div className="col-span-2 p-8 bg-white">
          {/* Summary */}
          {data.summary && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-500">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-gray-700 leading-relaxed">{data.summary}</p>
            </section>
          )}

          {/* Experience */}
          {data.experience && data.experience.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-500">WORK EXPERIENCE</h2>
              {data.experience.map((exp) => (
                <div key={exp.id} className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                      <p className="text-lg text-gray-700 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-gray-600 text-right">
                      <p className="font-medium">
                        {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                      </p>
                    </div>
                  </div>
                  {exp.description && <p className="text-gray-700 mb-3 italic">{exp.description}</p>}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
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
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-500">EDUCATION</h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {edu.degree} {edu.field && `in ${edu.field}`}
                      </h3>
                      <p className="text-gray-700 font-medium">{edu.institution}</p>
                      {edu.gpa && <p className="text-gray-600">GPA: {edu.gpa}</p>}
                    </div>
                    <div className="text-gray-600">
                      <p className="font-medium">
                        {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                      </p>
                    </div>
                  </div>
                  {edu.description && <p className="text-gray-700 mt-2 italic">{edu.description}</p>}
                </div>
              ))}
            </section>
          )}

          {/* Projects */}
          {data.projects && data.projects.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-500">PROJECTS</h2>
              {data.projects.map((project) => (
                <div key={project.id} className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                    {project.link && <span className="text-blue-600 text-sm font-medium">View Project</span>}
                  </div>
                  <p className="text-gray-700 mb-3">{project.description}</p>
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  )
}

export default Template2
