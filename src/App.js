import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Import Social Media & Action Icons from react-icons
import { 
  FaLinkedin, 
  FaResearchgate, 
  FaFacebook, 
  FaOrcid, 
  FaFileDownload, 
  FaEnvelope 
} from "react-icons/fa";

// Import your profile picture from the assets folder
import profile from "./assets/Abera.jpeg";

/**
 * HOME COMPONENT
 */
function Home() {
  return (
    <section className="section">
      {/* Profile Image */}
      <img src={profile} alt="Abera Abdeta Kitaba" className="profile-img" />
      
      {/* Main Heading & Subtitle */}
      <h1>Abera Abdeta Kitaba, Ph.D. Candidate</h1>
      <h2>Biomedical & Microbiology Researcher</h2>
      <p className="lead">Welcome to my personal academic website.</p>
      
      {/* Social & Academic Profile Links with Icons */}
      <div className="social-links">
        <a href="https://www.linkedin.com/in/abera-abdeta-kitaba-440466141/" target="_blank" rel="noreferrer">
          <FaLinkedin className="icon" /> LinkedIn
        </a>
        <span>|</span>
        <a href="https://orcid.org/0000-0003-2252-6049" target="_blank" rel="noreferrer">
          <FaOrcid className="icon" /> ORCID
        </a>
        <span>|</span>
        <a href="https://www.researchgate.net/profile/Abera-Abdeta-Kitaba" target="_blank" rel="noreferrer">
          <FaResearchgate className="icon" /> ResearchGate
        </a>
        <span>|</span>
        <a href="https://www.facebook.com/abera.abdeta.1" target="_blank" rel="noreferrer">
          <FaFacebook className="icon" /> Facebook
        </a>
      </div>

      {/* Call to Action Buttons */}
      <div className="cta-buttons">
        <a href="/cv.pdf" download className="btn primary-btn">
          <FaFileDownload /> Download CV
        </a>
        <Link to="/contact" className="btn secondary-btn">
          <FaEnvelope /> Get in Touch
        </Link>
      </div>

      {/* Highlights Section */}
      <div className="fellowships-highlight">
        <h3>Fellowships & Honors</h3>
        <ul>
          <li>
            <strong>The Hong Kong PhD Fellowship Scheme (HKPFS)</strong>, 2023–2026
          </li>
          <li>
            <strong>PolyU Presidential PhD Fellowship Scheme (PPPFS)</strong>, 2023–2026
          </li>
          <li>
            <strong>Ethiopian Medical Laboratory Association (EMLA) Award</strong>, 2016
          </li>
          <li>
            <strong>University Gold Medalist</strong>, Addis Ababa University — Ranked 1st in the College of Health Sciences (2016)
          </li>
        </ul>
      </div>
    </section>
  );
}

/**
 * ABOUT COMPONENT
 */
function About() {
  return (
    <section className="section">
      <h2>About Me</h2>
      <p>
        Motivated biomedical researcher with a Ph.D. thesis completed and submitted 
        in the Department of Health Technology and Informatics at The Hong Kong Polytechnic 
        University. Proven track record of high-impact journal publications and hands-on 
        expertise in bacterial culture, mammalian cell culture, and molecular biology 
        techniques such as PCR, ELISA, DNA and RNA sequencing, as well as bioinformatics 
        analysis. Seeking a postdoctoral research position in biomedical sciences, 
        including antimicrobial resistance and host-pathogen interactions.
      </p>

      <h3>Education & Background</h3>
      <div className="education-container">
        <div className="education-item">
          <h4>Master of Science (M.Sc.) in Clinical Laboratory Science (Diagnostic & Public Health Microbiology)</h4>
          <p className="edu-meta">Addis Ababa University, Ethiopia | 2018 – 2020</p>
          <ul>
            <li>
              <strong>Academic Performance:</strong> CGPA: 3.98/4.00
            </li>
          </ul>
        </div>

        <div className="education-item">
          <h4>Bachelor of Science (B.Sc.) in Medical Laboratory Sciences</h4>
          <p className="edu-meta">Addis Ababa University, Ethiopia | 2012 – 2016</p>
          <ul>
            <li>
              <strong>Honors:</strong> First Class Honors with Very Great Distinction (Highest CGPA: 3.93/4.00 in the Department of Medical Laboratory Sciences and College of Health Sciences).
            </li>
            <li>
              <strong>Awards:</strong> University Gold Medalist & EMLA Awardee (2016).
            </li>
          </ul>
        </div>
      </div>

      <h3>Professional Work Experience</h3>
      <div className="experience-container">
        <div className="experience-item">
          <h4>Ethiopian Public Health Institute (EPHI)</h4>
          <p className="edu-meta">Junior Researcher → Associate Researcher II | Sep 2016 – Sep 2023</p>
          <ul>
            <li>Authored and co-authored peer-reviewed research articles on AMR and infectious diseases.</li>
            <li>Completed specialized training and earned certifications from the American Society for Microbiology (ASM).</li>
            <li>Served as an AMR mentor and technical focal person for national surveillance sentinel sites, including Jimma Medical Center and Tikur Anbessa Specialized Hospital.</li>
            <li>Led Project ECHO (Extension for Community Healthcare Outcomes) initiatives, delivering telementorship to strengthen national AMR surveillance.</li>
            <li>Acted as a COVID-19 PCR tester and quality control focal person during the pandemic.</li>
          </ul>
        </div>
      </div>

      <h3>Fellowships & Awards</h3>
      <ul>
        <li>
          <strong>The Hong Kong PhD Fellowship Scheme (HKPFS)</strong>, 2023–2026
        </li>
        <li>
          <strong>PolyU Presidential PhD Fellowship Scheme (PPPFS)</strong>, 2023–2026
        </li>
        <li>
          <strong>Ethiopian Medical Laboratory Association (EMLA) Award</strong>, 2016
        </li>
        <li>
          <strong>University Gold Medalist</strong>, Addis Ababa University — Ranked 1st in the College of Health Sciences (2016)
        </li>
      </ul>
    </section>
  );
}

/**
 * RESEARCH COMPONENT
 */
function Research() {
  return (
    <section className="section">
      <h2>Research</h2>
      
      <h3>Research Interests</h3>
      <ul>
        <li>Antimicrobial Resistance (AMR)</li>
        <li>Outer Membrane Vesicles (OMVs)</li>
        <li>Host-Pathogen Interactions</li>
        <li>Long Non-Coding RNAs (lncRNAs)</li>
      </ul>

      <h3>Current Research</h3>
      <p>
        Investigating the role of outer membrane vesicles (OMVs) shed by carbapenem-resistant 
        <em> Acinetobacter baumannii</em> in mediating bacteria-to-bacteria and bacteria-to-host interactions.
      </p>
    </section>
  );
}

/**
 * PUBLICATIONS COMPONENT
 */
function Publications() {
  return (
    <section className="section">
      <h2>Publications & Research Output</h2>

      <h3>Published Articles</h3>
      <ol className="publication-list">
        <li>
          Genomic characterization of carbapenem-resistant <em>Acinetobacter baumannii</em> isolates from the National Clinical Bacteriology Reference Laboratory, Ethiopia.
        </li>
        <li>
          Trends and patterns of antimicrobial resistance among <em>Staphylococcus aureus</em> isolated from various clinical specimens: a national laboratory-based AMR surveillance, 2020–2024.
        </li>
        <li>
          Antimicrobial resistance trends in clinical <em>Escherichia coli</em> and <em>Klebsiella pneumoniae</em> in Ethiopia.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/38629088/" target="_blank" rel="noreferrer" className="doi-link">[PubMed]</a>
        </li>
        <li>
          Antimicrobial susceptibility in <em>Neisseria gonorrhoeae</em> and epidemiological data of gonorrhoea patients in five cities across Ethiopia, 2021-22.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/38304725/" target="_blank" rel="noreferrer" className="doi-link">[PubMed]</a>
        </li>
        <li>
          Antimicrobial resistance profiles of bacterial isolates from clinical specimens referred to Ethiopian Public Health Institute: analysis of 5-year data.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/37968587/" target="_blank" rel="noreferrer" className="doi-link">[PubMed]</a>
        </li>
        <li>
          Lessons from leadership transition of an AMR telementoring program to sustain laboratory capacity building in Ethiopia.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10594321/" target="_blank" rel="noreferrer" className="doi-link">[PMC Article]</a>
        </li>
        <li>
          Lessons from an evaluation of an antimicrobial resistance laboratory capacity telementoring program in Ethiopia and Kenya.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10594361/" target="_blank" rel="noreferrer" className="doi-link">[PMC Article]</a>
        </li>
        <li>
          Antimicrobial Resistance Patterns of <em>Staphylococcus aureus</em> and <em>Enterococcus</em> Species at the Ethiopian Public Health Institute, Ethiopia: A Five-Year Retrospective Analysis.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/37724092/" target="_blank" rel="noreferrer" className="doi-link">[PubMed]</a>
        </li>
        <li>
          Prevalence and Trends of Carbapenem-Resistant <em>Pseudomonas aeruginosa</em> and <em>Acinetobacter</em> Species Isolated from Clinical Specimens at the Ethiopian Public Health Institute, Addis Ababa, Ethiopia: A Retrospective Analysis.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/36937143/" target="_blank" rel="noreferrer" className="doi-link">[PubMed]</a>
        </li>
        <li>
          Bacteriological spectrum, extended-spectrum β-lactamase production and antimicrobial resistance pattern among patients with bloodstream infection in Addis Ababa.{" "}
          <a href="https://www.nature.com/articles/s41598-023-29337-x" target="_blank" rel="noreferrer" className="doi-link">[Nature]</a>
        </li>
        <li>
          Bacterial and Fungal Profile, Antibiotic Susceptibility Patterns of Bacterial Pathogens and Associated Risk Factors of Urinary Tract Infection Among Symptomatic Pediatrics Patients Attending St. Paul's Hospital Millennium Medical College: A Cross-Sectional Study.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/35418760/" target="_blank" rel="noreferrer" className="doi-link">[PubMed]</a>
        </li>
        <li>
          The Diagnostic Capacity of Three Phenotypic Techniques of Extended-Spectrum β-Lactamase Detection.{" "}
          <a href="https://ajcmi.umsha.ac.ir/Article/ajcmi-3365" target="_blank" rel="noreferrer" className="doi-link">[Journal Link]</a>
        </li>
        <li>
          Catheter-associated urinary tract infections in adult intensive care units at a selected tertiary hospital, Addis Ababa, Ethiopia.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/35316286/" target="_blank" rel="noreferrer" className="doi-link">[PubMed]</a>
        </li>
        <li>
          Phenotypic characterization of carbapenem non-susceptible gram-negative bacilli isolated from clinical specimens.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/34855767/" target="_blank" rel="noreferrer" className="doi-link">[PubMed]</a>
        </li>
        <li>
          Incorporating Telementorship Into Laboratory Capacity Building Initiatives for Improved AMR Surveillance in Ethiopia.{" "}
          <a href="https://doi.org/10.1017/ice.2020.523" target="_blank" rel="noreferrer" className="doi-link">[DOI Link]</a>
        </li>
        <li>
          In vitro antifungal effect of crude extracts and solvent fractions of <em>Croton macrostachyus</em> Hochst. ex Del. and <em>Vernonia amygdalina</em> Del. against fungi isolated from formalin fixed cadavers.{" "}
          <a href="https://www.ajol.info/index.php/epj/article/view/195382" target="_blank" rel="noreferrer" className="doi-link">[AJOL Link]</a>
        </li>
        <li>
          Comparison of Double Disk Synergy Test and Combination Disk Test Methods for the Detection of Extended-Spectrum Beta-Lactamase Production among Enterobacteriaceae.
        </li>
        <li>
          Antimicrobial Susceptibility Profile of Extended Spectrum Beta-lactamases Producing Enterobacteriaceae isolated from clinical samples referred to the National Bacteriology and Mycology Reference Laboratory, Ethiopia.
        </li>
      </ol>

      <h3>Conference Presentations</h3>
      <ol className="publication-list">
        <li>
          <strong>Abera Abdeta KITABA</strong>, Abebe Mekuria SHENKUTIE, Polly HM LEUNG. "Selective Enrichment of Regulatory and Small RNAs in Outer Membrane Vesicles Derived from Carbapenem-Resistant <em>Acinetobacter baumannii</em>." 15th International Symposium on Antimicrobial Agents and Resistance 2026, held from 12-14 June 2026, Hong Kong Convention & Exhibition Centre, China.
        </li>
        <li>
          <strong>Abera Abdeta KITABA</strong>, Polly HM LEUNG. "Outer membrane vesicles from carbapenem‑resistant <em>A. baumannii</em> reshape macrophage immune responses, with long non‑coding RNAs and alternative splicing serving as regulatory layers." Early Career Summer Conference 2026, held at The Exchange, University of Birmingham, on 6th and 7th of July 2026, United Kingdom.
        </li>
        <li>
          <strong>A. Abdeta</strong>, A. Bitew, S. Fentaw, E. Tsige, D. Assefa, T. Lejisa, Y. Kefyalew, E. Tigabu, M. Evans. "Phenotypic Characterization Of Carbapenem Non-susceptible Gram-negative Bacilli Isolated From Clinical Specimens." Held from June 9–13, 2022, in Washington, D.C., United States.
        </li>
      </ol>
    </section>
  );
}

/**
 * CONTACT COMPONENT
 */
function Contact() {
  return (
    <section className="section">
      <h2>Contact Information</h2>
      <p>Feel free to reach out for research collaborations or academic inquiries.</p>
      
      <div className="contact-details">
        <h3>Email Addresses</h3>
        <ul className="contact-list">
          <li>
            <strong>Institutional:</strong>{" "}
            <a href="mailto:abera-abdeta.kitaba@connect.polyu.hk">
              abera-abdeta.kitaba@connect.polyu.hk
            </a>
          </li>
          <li>
            <strong>Personal:</strong>{" "}
            <a href="mailto:aberaabdeta4@gmail.com">
              aberaabdeta4@gmail.com
            </a>
          </li>
        </ul>

        <h3>Profiles & Socials</h3>
        <div className="social-links-inline">
          <a href="https://www.linkedin.com/in/abera-abdeta-kitaba-440466141/" target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://orcid.org/0000-0003-2252-6049" target="_blank" rel="noreferrer">
            <FaOrcid /> ORCID
          </a>
          <a href="https://www.researchgate.net/profile/Abera-Abdeta-Kitaba" target="_blank" rel="noreferrer">
            <FaResearchgate /> ResearchGate
          </a>
          <a href="https://www.facebook.com/abera.abdeta.1" target="_blank" rel="noreferrer">
            <FaFacebook /> Facebook
          </a>
        </div>
      </div>
    </section>
  );
}

/**
 * MAIN APP COMPONENT
 */
function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation Bar Header */}
        <nav className="navbar">
          <div className="nav-brand">Abera A. Kitaba</div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/research">Research</Link></li>
            <li><Link to="/publications">Publications</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Dynamic Route Viewport */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Page Footer */}
        <footer className="footer">
          <p>© {new Date().getFullYear()} Abera Abdeta Kitaba. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;