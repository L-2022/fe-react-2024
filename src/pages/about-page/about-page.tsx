import aboutImage from '@/assets/about-image.png';
import { Link } from '@/components/link';
import { WidthContainer } from '@/components/width-container';
import { EXTERNAL_LINK_URLS } from '@/constants/link-urls';

import styles from './about-page.module.css';

export const AboutPage = () => (
    <section className={styles.about}>
        <WidthContainer>
            <div className={styles.about__content}>
                <div className={styles.about__info}>
                    <div className={styles.about__title}>
                        <h1 className={styles.title}>About me</h1>
                    </div>
                    <p className={styles.about__info_text}>
                        Hi! My name is Vasyl, and I&apos;m a Frontend/Backend Developer with practical experience in key web technologies
                        like Node, React, TypeScript, HTML, CSS, JavaScript, Python, and Git version control system.
                    </p>
                    <p className={styles.about__info_text}>
                        In 2024, I completed the &apos;
                        <Link href={EXTERNAL_LINK_URLS.COURSE} className={styles.about__info_link}>
                            Intro to React
                        </Link>
                        &apos; course from Masters Academy, where I created this page as part of a social project with the MOCG company.
                        During the project, I collaborated with mentors to build my portfolio and gained valuable frontend development
                        experience.
                    </p>
                    <p className={styles.about__info_text}>
                        Besides frontend development, I have over 3 years of experience in backend and embedded programming. I am proficient
                        in both frontend libraries and various backend technologies and frameworks, developing web applications, working
                        with databases, web servers, and understanding UI/UX design principles.
                    </p>
                    <p className={styles.about__info_text}>
                        You can contact me via&nbsp;
                        <Link href={'https://t.me/bytenko'} className={styles.about__info_link}>
                            Telegram
                        </Link>
                        &nbsp;and check out my&nbsp;
                        <Link href={'https://github.com/L-2022'} className={styles.about__info_link}>
                            GitHub
                        </Link>
                        , or follow me on&nbsp;
                        <Link href={'https://x.com/VasylBiliak'} className={styles.about__info_link}>
                            X (formerly Twitter)
                        </Link>
                        &nbsp; and{' '}
                        <Link href={'https://ca.linkedin.com/in/vasyl-biliak-developer'} className={styles.about__info_link}>
                            Linkedin
                        </Link>
                        .
                    </p>
                </div>
                <div className={styles.about__image}>
                    <img className={styles.about__image_photo} src={aboutImage} alt="" />
                </div>
            </div>
            <div className={styles.about__skills}>
                <div className={styles.about__title}>
                    <h1 className={styles.title}>Technical Skills</h1>
                </div>
                <ul>
                    <li>
                        Programming Languages: JavaScript, Python, C#, Ladder Logic (LAD), Function Block Diagram (FBD), Structured Text
                        (ST), Sequential Function Chart (SFC), Instruction List (IL), TypeScript (basic)
                    </li>
                    <li>
                        Frameworks & Libraries: Node.js, Express.js, Flask, SQLAlchemy, Sequelize, MongoDB, MySQL, Redis, Next.js (basic)
                    </li>
                    <li>Databases: SQL, NoSQL</li>
                    <li>Tools & Platforms: GitHub, GitLab, Linux, Ubuntu, Postman, Pgadmin4</li>
                    <li>Methodologies: Agile (Scrum, Kanban, Extreme Programming, Crystal)</li>
                    <li>Protocols & APIs: TCP/IP, Modbus, Profibus, REST API</li>
                    <li>Security: OWASP web security methodology (basic)</li>
                    <li>
                        Soft Skills: Excellent communication and active listening, collaborative and participatory working style, quick
                        learning of new technology
                    </li>
                </ul>
            </div>

            <div className={styles.about__education}>
                <div className={styles.about__title}>
                    <h1 className={styles.title}>Education</h1>
                </div>
                <ul>
                    <li>
                        National Technical University of Ukraine &quot;Igor Sikorsky Kyiv Polytechnic Institute&quot; - Bachelor (2015 -
                        2019), Master 2019), Master 2019), Master (2019 - 2020) - Program Subject Area: Electrical Energetics, Electrical
                        Electromechanics
                    </li>
                    <li>SoftServe Academy - Practical Node.js Course</li>
                    <li>Masters Academy IT Courses - Frontend for Beginners (JS, HTML5, CSS3)</li>
                    <li>Udemy - &quot;Python 3: Full Course&quot; (including PostgreSQL)</li>
                    <li>Udemy - &quot;Node.js: Full Course&quot;</li>
                    <li>Udemy - &quot;React.js: Full Course&quot;</li>
                </ul>
            </div>
        </WidthContainer>
    </section>
);
