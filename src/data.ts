import { Project, Skill, Education } from './types';

export const aboutMe = {
  name: "Devank Ingle",
  title: "Analyst | BI Developer",
  description: "I analyze and interpret data to provide valuable insights.",
  longDescription: "As a aspiring data analyst driven by a passion for uncovering meaningful patterns and insights, I bring a strong blend of analytical thinking and technical expertise to solving complex problems. I thrive on transforming raw data into actionable strategies and compelling narratives. Committed to continuous growth in the dynamic field of data science and analytics, I actively seek out new tools, techniques, and technologies to expand my skill set and deliver greater value.",
  location: "Bhopal,Madhya Pradesh,India",
  email: "devank.s.ingle@gmail.com",
  github: "https://github.com/devankingle",
  linkedin: "https://linkedin.com/in/devankingle",
  phoneNumber: "+91 9340517383",
};

export const skills: Skill[] = [
  {
    name: "SQL",
    level: 90,
    icon: "database",
    description: "Proficient in writing complex SQL queries, working with relational databases (MySQL, PostgreSQL), and extracting meaningful insights from large datasets."
  },
  {
    name: "Excel",
    level: 95,
    icon: "file-spreadsheet",
    description: "Advanced Excel skills including pivot tables, VLOOKUP, complex formulas, data modeling, and statistical analysis techniques."
  },
  {
    name: "Python",
    level: 85,
    icon: "code",
    description: "Experience using Python for data manipulation with Pandas and NumPy, data analysis, and visualization using Matplotlib and Seaborn."
  },
  {
    name: "Tableau",
    level: 80,
    icon: "bar-chart",
    description: "Proficiency in creating interactive dashboards, data storytelling, and presenting complex data insights in a visually appealing manner."
  },
  {
    name: "R",
    level: 75,
    icon: "sigma",
    description: "Statistical analysis, data visualization, and reporting using R and its extensive ecosystem of packages like ggplot2 and dplyr."
  },
  {
    name: "Power BI",
    level: 85,
    icon: "pie-chart",
    description: "Creating interactive business intelligence dashboards, data modeling, and DAX formula creation for advanced analytics."
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Store Sales Analysis",
    description: "Empowering decisions: A dashboard analyzing sales, customer behavior, and inventory to drive growth and improve the shopping experience.",
    longDescription: "This project developed a data analysis dashboard for a clothing store to provide insights into sales trends, customer behavior, and inventory management. By analyzing key metrics such as total sales of ₹2,11,76,377 from 31,047 orders, the dashboard revealed that March had the highest number of orders (2,843), with Amazon contributing 34.5% of total orders. The analysis highlighted that women, especially adult women, were the primary buyers, and the top five sales-generating states were Maharashtra, Karnataka, Uttar Pradesh, Tamil Nadu, and Telangana. Based on these insights, strategies were recommended, such as running promotions in peak months (February and March), enhancing Amazon and Myntra presence, and tailoring marketing efforts towards female shoppers while also targeting underperforming platforms and demographics.",
    technologies: ["Tableau", "Excel"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    githubLink: "https://github.com/devank99/Clothing-Store-Sales-Data-Analysis-Tableau-Dashboard-",
    demoLink: "https://public.tableau.com/app/profile/devank.ingle/viz/Book1_17176071379460/Dashboard1"
  },
  {
    id: 2,
    title: "Credit Card Spending Data Analysis",
    description: "Analyzed transaction-level credit card data to uncover spending patterns across categories, time periods, and customer demographics.",
    longDescription: "Conducted a comprehensive data analysis project to understand the spending behavior of credit card users in India, following the complete data analysis lifecycle. The process began with data cleaning in Microsoft Excel to ensure accuracy and consistency, followed by exploratory data analysis to identify spending patterns based on factors such as expense type and gender. Developed an interactive Tableau dashboard to visualize the findings, enabling dynamic filtering and providing valuable insights into user behavior, which can support data-driven decision-making for financial institutions.",
    technologies: ["Tableau","Excel",],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    githubLink: "https://github.com/devank99/How-Indians-Spend-on-Credit-Card-Tableau-Dashboard-",
    demoLink: "https://public.tableau.com/app/profile/devank.ingle/viz/HowIndiansspendoncreditcard/Dashboard1"
  },
  {
    id: 3,
     title: "Customer Churn Prediction",
    description: "Developed a predictive model to identify customers at risk of churning, achieving 87% accuracy and helping reduce churn rate by 23%.",
    longDescription: "For this project, I built a machine learning model to predict customer churn for a subscription-based service. After extensive feature engineering and model selection (testing logistic regression, random forest, and gradient boosting), the final model achieved 87% accuracy in identifying at-risk customers. The implementation of proactive retention strategies based on these predictions resulted in a 23% reduction in churn rate over 6 months, saving an estimated $450,000 in annual recurring revenue.",
    technologies: ["SQL"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    githubLink: "https://github.com/devank99/Bank-Customer-Churn-Analysis"
  },
  
];

export const education: Education[] = [
  {
    id: 1,
    institution: "Lakshmi Narain College of Technology",
    degree: "Bachelor of Technology",
    field: "Mechanical Engneering",
    endYear: 2021,
    description: " Completed my B.TECH in the specification of Mechanical Engineering in Laxminarayan College of Technology, Bhopal."
  },
  {
    id: 2,
    institution: "Silver Bells Co Ed High School",
    degree: "Higher Secondary Education",
    endYear: 2017,
    description: "Completed my Higher Secondary education in science stream from Silver Bells School."
  },
  
];
