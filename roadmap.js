const examsData = {
    "UPSC Civil Services": {
        colleges: ["Delhi University", "Jawaharlal Nehru University", "Lady Shri Ram College", "St. Stephen's College"],
        coachingCenters: ["Vision IAS", "Insights IAS", "Drishti IAS", "Khan Study Group"],
        roadmap: {
            eligibility: "Graduates of any discipline, aged 21-32 (reserved categories vary)",
            syllabus: "General Studies, CSAT Aptitude, Essay, Optional Subject",
            timeline: "Recommended 12-18 months of dedicated preparation",
            examPattern: "Prelims (MCQs), Mains (Descriptive Papers), Interview",
            keyPhases: [
                "6 months: NCERTs and basics",
                "4 months: Advanced reference books + current affairs",
                "2 months: Mock tests and answer writing practice",
                "Final revision and interview preparation"
            ],
            resources: [
                "NCERT textbooks (Class 6-12)",
                "The Hindu / Indian Express",
                "Yojana magazine",
                "Raj Tanthilai’s Current Affairs",
                "Standard optional books"
            ],
            tips: "Daily current affairs notes, join study groups, solve previous papers"
        }
    },
    "JEE Main": {
        colleges: ["IITs", "NITs", "IIITs", "Central Funded Technical Institutes"],
        coachingCenters: ["FIITJEE", "Allen Kota", "Resonance", "Aakash Institute"],
        roadmap: {
            eligibility: "Passed 12th with PCM",
            syllabus: "Physics, Chemistry, Mathematics (NCERT based)",
            timeline: "At least 1 year focused preparation recommended",
            examPattern: "MCQ with negative marking",
            keyPhases: [
                "10 months: Concept building and coaching",
                "2 months: Intensive problem solving",
                "1 month: Revision and timed mock tests"
            ],
            resources: [
                "NCERT 11th and 12th",
                "HC Verma (Physics)",
                "OP Tandon (Chemistry)",
                "RD Sharma (Mathematics)"
            ],
            tips: "Master concepts, practice constantly, analyze mocks"
        }
    },
    "NEET": {
        colleges: ["AIIMS", "JIPMER", "All India Medical Colleges"],
        coachingCenters: ["Aakash Institute", "Allen Career Institute", "Resonance", "CARE Academy"],
        roadmap: {
            eligibility: "Passed 12th with PCB",
            syllabus: "Physics, Chemistry, Biology",
            timeline: "1 year focus on Biology",
            examPattern: "180 MCQs with negative marking",
            keyPhases: [
                "8 months: NCERT coverage",
                "3 months: Past papers and mock tests",
                "1 month: Focus on weak points"
            ],
            resources: [
                "NCERT",
                "MTG NEET guide",
                "Allen test series"
            ],
            tips: "Focus on diagrams, revise regularly, practice weekly mocks"
        }
    },
    "IELTS": {
        colleges: ["All English-speaking Universities worldwide"],
        coachingCenters: ["British Council", "IDP Education", "Magoosh IELTS", "IELTS Liz"],
        roadmap: {
            eligibility: "No formal eligibility, usually for immigration or study",
            syllabus: "Listening, Reading, Writing, Speaking",
            timeline: "2-3 months prep recommended",
            examPattern: "Listening (40 mins), Reading (60 mins), Writing (60 mins), Speaking (11-14 mins)",
            keyPhases: [
                "Strengthen English fundamentals",
                "Practice each module extensively",
                "Mock tests with timing"
            ],
            resources: ["Official IELTS Practice Materials", "Cambridge IELTS series", "IELTS.org resources"],
            tips: "Focus on time management and speaking fluency"
        }
    },
    "CMA": {
        colleges: ["Institute of Management Accountants (IMA) Certified"],
        coachingCenters: ["Becker CMA Review", "Gleim CMA Review", "Surgent CMA Review"],
        roadmap: {
            eligibility: "Bachelor's degree or professional experience",
            syllabus: "Financial Planning, Performance, Analytics, Strategic Financial Management",
            timeline: "6-12 months preparation",
            examPattern: "Two-part exam covering varied topics",
            keyPhases: [
                "Master financial accounting concepts",
                "Practice case studies and formulas",
                "Review practice exams"
            ],
            resources: ["IMA website materials", "CMA exam prep books"],
            tips: "Regular study schedule and practice questions"
        }
    },
    "CA": {
        colleges: ["Institute of Chartered Accountants of India (ICAI) certified"],
        coachingCenters: ["Institute of Chartered Accountants of India", "SuperProfs", "CAclubindia"],
        roadmap: {
            eligibility: "Registered with ICAI, pass Common Proficiency Test",
            syllabus: "Accounting, Law, Auditing, Taxation, Finance",
            timeline: "3-5 years including articleship",
            examPattern: "Foundation, Intermediate, Final levels",
            keyPhases: [
                "Foundation and basics",
                "Articleship for practical exposure",
                "Final exam preparation"
            ],
            resources: ["ICAI study materials", "Past exam papers"],
            tips: "Consistent study and hands-on practice"
        }
    },
    "ACCA": {
        colleges: ["Association of Chartered Certified Accountants licensed"],
        coachingCenters: ["Kaplan", "BPP Learning Media", "LSBF"],
        roadmap: {
            eligibility: "Minimum education qualifications vary",
            syllabus: "Accounting, Audit, Law, Financial Management",
            timeline: "2-3 years",
            examPattern: "13 exams spanning 3 levels",
            keyPhases: [
                "Knowledge modules",
                "Skills modules",
                "Professional level and ethics"
            ],
            resources: ["ACCA official materials", "Past exam questions"],
            tips: "Plan study timeline and revision carefully"
        }
    },
    "GATE": {
        colleges: ["IITs, IISc"],
        coachingCenters: ["Made Easy", "ACE Engineering Academy", "GateForum"],
        roadmap: {
            eligibility: "Bachelor's degree in engineering or related fields",
            syllabus: "Subject-specific, including Engineering Maths",
            timeline: "1 year focused preparation",
            examPattern: "Multiple choice and numerical questions",
            keyPhases: [
                "Concept building",
                "Problem solving and mock tests",
                "Revision and previous papers"
            ],
            resources: ["GATE official syllabus", "Coaching test series"],
            tips: "Time management and strong fundamentals"
        }
    },
    "GRE": {
        colleges: ["US, Canadian, UK Graduate Schools"],
        coachingCenters: ["Magoosh", "Kaplan", "Princeton Review", "Manhattan Prep"],
        roadmap: {
            eligibility: "Bachelor's degree or equivalent",
            syllabus: "Verbal, Quantitative, Analytical Writing",
            timeline: "3-6 months",
            examPattern: "Computer adaptive MCQs and essays",
            keyPhases: [
                "Vocabulary building",
                "Quantitative skills",
                "Practice essays and mocks"
            ],
            resources: ["Official GRE guide", "Prep books"],
            tips: "Regular practice and test simulations"
        }
    },
    "CFA": {
        colleges: ["Global Financial Institutions"],
        coachingCenters: ["Kaplan Schweser", "Bloomberg Exam Prep", "Wiley CMAexcel"],
        roadmap: {
            eligibility: "Bachelor degree or 4 years professional experience",
            syllabus: "Ethics, Portfolio Management, Financial Reporting",
            timeline: "3 years for levels 1-3",
            examPattern: "Sequential exams with increasing difficulty",
            keyPhases: [
                "Level 1 basics and ethics",
                "Level 2 analysis and valuation",
                "Level 3 portfolio management"
            ],
            resources: ["CFA Institute materials", "Schweser notes"],
            tips: "Long term commitment and practice"
        }
    },
    "MCAT": {
        colleges: ["Medical Schools in US and Canada"],
        coachingCenters: ["Kaplan", "Princeton Review", "Next Step Test Prep"],
        roadmap: {
            eligibility: "Undergrad degree recommended",
            syllabus: "Biological, Physical, Chemical foundations",
            timeline: "3-6 months preparation",
            examPattern: "Multiple-choice exam with essays",
            keyPhases: [
                "Concept review",
                "Practice passages and questions",
                "Simulated practice exams"
            ],
            resources: ["AAMC official prep", "Kaplan books"],
            tips: "Consistent full-length tests for stamina"
        }
    },
    "CCIE": {
        colleges: ["Cisco Certified"],
        coachingCenters: ["IPexpert", "INE", "Cisco Learning Network"],
        roadmap: {
            eligibility: "Extensive networking experience",
            syllabus: "Deep Cisco network technologies",
            timeline: "12+ months",
            examPattern: "Written + Hands on lab",
            keyPhases: [
                "Theory and technology mastery",
                "Lab practice",
                "Simulated exams"
            ],
            resources: ["Cisco official guides", "Practice labs"],
            tips: "Hands-on experience critical"
        }
    },
    "LSAT": {
        colleges: ["Law Schools in US and Canada"],
        coachingCenters: ["Kaplan LSAT", "Manhattan Prep", "PowerScore"],
        roadmap: {
            eligibility: "Bachelor's degree recommended",
            syllabus: "Logical Reasoning, Reading Comprehension, Analytical Reasoning",
            timeline: "3-4 months prep",
            examPattern: "Multiple-choice and writing sample",
            keyPhases: [
                "Logical skills building",
                "Timed practice sections",
                "Review and refine"
            ],
            resources: ["Official LSAT prep", "Prep books"],
            tips: "Timed practice key"
        }
    }
};

// Add generic exams 51-90
for (let i = 51; i <= 90; i++) {
    examsData[`Competitive Exam ${i}`] = {
        colleges: [`College A${i}`, `College B${i}`, `College C${i}`],
        coachingCenters: [`Coach X${i}`, `Coach Y${i}`, `Coach Z${i}`],
        roadmap: {
            eligibility: "Varies by exam",
            syllabus: "Standard syllabus covering basics",
            timeline: "Varies (6-18 months)",
            examPattern: "Varies",
            keyPhases: ["Basics", "Intensive Study", "Revision & Mocks"],
            resources: ["Standard textbooks", "Online tests", "Study groups"],
            tips: "Consistent study and mock practice"
        }
    };
}

// Existing JS UI code for populateExamList, displayExamInfo, event listeners follows here unchanged