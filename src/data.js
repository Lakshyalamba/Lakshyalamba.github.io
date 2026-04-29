import project1Banner from './assets/diabities.png';
import project2Banner from './assets/train.jpeg';
import project3Banner from './assets/flipkart.jpeg';
import project4Banner from './assets/bank.jpeg';

export const profileInfo = {
  name: "Lakshyalamba",
  username: "Lakshyalamba",
  bio: "Data analytics enthusiast with strong skills in Python, Excel, Tableau, Looker Studio, and Google Sheets, focused on extracting insights, building dashboards, and solving real-world problems using data.",
  location: "Newton School of Technology, Rishihood University",
  avatarUrl: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", // Placeholder image
};

export const contactInfo = {
  email: "lakylamba266@gmail.com",
  phone: "9034181961",
  github: "https://github.com/Lakshyalamba",
  linkedin: "https://www.linkedin.com/in/lakshyachoudhary26/",
  resume: "#",
};

export const skills = [
  "Tableau",
  "Excel",
  "Google Sheets",
  "Python",
  "Pandas",
  "NumPy",
  "SQL",
  "Looker Studio",
  "React",
];

export const projects = [
  {
    id: 1,
    name: "Diabetes Readmission Analysis",
    shortDescription: "Analyzes diabetic patient hospital records to identify readmission patterns, risk factors, and actionable healthcare insights.",
    fullDescription: "A healthcare analytics project focused on diabetes readmission analysis using data preprocessing, exploratory analysis, visualization, and predictive insights. The project helps identify high-risk patients and supports better hospital decision-making.",
    impact: "Helps healthcare teams detect high-risk patients early, reduce avoidable readmissions, and improve patient care.",
    tags: ["Healthcare Analytics", "Python", "Tableau", "Data Visualization", "Machine Learning"],
    githubUrl: "https://github.com/Lakshyalamba/SectionC_G-10_DiabetesReadmissionAnalysis",
    liveUrl: "#",
    image: project1Banner,
  },
  {
    id: 2,
    name: "TTC Subway Delay Data Analysis",
    shortDescription: "Explores TTC subway delay data to understand delay causes, route-level issues, and operational performance patterns.",
    fullDescription: "A transportation analytics project analyzing subway delay records to uncover major delay reasons, station-level trends, route performance, and time-based patterns through interactive dashboards and visual insights.",
    impact: "Helps identify frequent delay causes and supports better public transit planning and service improvement.",
    tags: ["Transportation Analytics", "Tableau", "Excel", "Data Visualization", "Dashboard"],
    githubUrl: "https://github.com/anand-242003/SectionC_Group17_TTC-Subway_Delay_Data",
    liveUrl: "#",
    image: project2Banner,
  },
  {
    id: 3,
    name: "Flipkart Dashboard Project",
    shortDescription: "Builds an e-commerce dashboard to track Flipkart sales, product performance, customer trends, and business KPIs.",
    fullDescription: "A business intelligence dashboard project focused on e-commerce analytics. It visualizes sales performance, category trends, customer behavior, revenue insights, and key metrics for better decision-making.",
    impact: "Helps understand product performance, sales growth, and customer behavior for smarter e-commerce strategy.",
    tags: ["E-commerce Analytics", "Tableau", "Excel", "Dashboard", "Business Intelligence"],
    githubUrl: "https://github.com/Lakshyalamba/flipkart-dashboard-project",
    liveUrl: "#",
    image: project3Banner,
  },
  {
    id: 4,
    name: "Bank Marketing Analysis",
    shortDescription: "Analyzes bank marketing campaign data to understand customer response patterns and campaign effectiveness.",
    fullDescription: "A banking analytics project that studies marketing campaign data to identify customer segments, response trends, conversion patterns, and factors influencing campaign success.",
    impact: "Helps banks improve targeting, optimize marketing campaigns, and increase customer conversion rates.",
    tags: ["Banking Analytics", "Python", "Excel", "Tableau", "Data Analysis"],
    githubUrl: "https://github.com/Lakshyalamba/bank-marketing-analysis",
    liveUrl: "#",
    image: project4Banner,
  }
];
