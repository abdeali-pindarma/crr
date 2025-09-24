// Pre-populated research data for demonstration (expand with real research)
const researchDetails = {
    "Software Developer": {
        description: "Designs and builds software systems, apps, and websites.",
        education: "Bachelor’s in Computer Science or related field.",
        skills: ["Programming (Python, Java, etc.)", "Problem-solving", "Teamwork"],
        averageSalary: "$55,000 – $110,000 (varies by country & experience)",
        jobOutlook: "Excellent, with high demand in all major industries.",
        popularEmployers: ["Google", "Microsoft", "Amazon", "TCS", "Infosys"]
    },
    "Doctor (Physician)": {
        description: "Diagnoses, treats, and helps prevent diseases and injuries.",
        education: "Bachelor’s degree + Medical School (MBBS/MD).",
        skills: ["Medical expertise", "Compassion", "Attention to detail"],
        averageSalary: "$80,000 – $250,000+",
        jobOutlook: "High, especially in healthcare systems worldwide.",
        popularEmployers: ["Hospitals", "Clinics", "Private Practice"]
    }
    // ...add more for all careers
};

function formatResearch(career, data) {
    return data ?
        `
        <h2>${career}</h2>
        <p><strong>Description:</strong> ${data.description}</p>
        <p><strong>Education Required:</strong> ${data.education}</p>
        <p><strong>Key Skills:</strong> ${data.skills.join(", ")}</p>
        <p><strong>Average Salary:</strong> ${data.averageSalary}</p>
        <p><strong>Job Outlook:</strong> ${data.jobOutlook}</p>
        <p><strong>Popular Employers:</strong> ${data.popularEmployers.join(", ")}</p>
        ` :
        `<h2>${career}</h2><p>Research is coming soon for this career! Please check back later.</p>`;
}

window.onload = () => {
    const career = localStorage.getItem('selectedCareer');
    const data = researchDetails[career];
    document.getElementById('career-info').innerHTML = formatResearch(career || "No Career Selected", data);
};