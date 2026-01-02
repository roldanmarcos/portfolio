import canva from '../assets/icons/canva-logo.svg';
import css from '../assets/icons/css-logo.svg';
import figma from '../assets/icons/figma-logo.svg';
import html from '../assets/icons/html-logo.svg';
import java from '../assets/icons/java-logo.svg';
import js from '../assets/icons/js-logo.svg';
import mysql from '../assets/icons/mysql-logo.svg';
import react from '../assets/icons/react-logo.svg';
import git from '../assets/icons/git-logo.svg';
import python from '../assets/icons/python-logo.svg';
import jira from '../assets/icons/jira-logo.svg';
import photoshop from '../assets/icons/photoshop-logo.svg';
import typescript from '../assets/icons/typescript-logo.svg';
import nodejs from '../assets/icons/nodejs-logo.svg';
import kotlin from '../assets/icons/kotlin-logo.svg';
import postgresql from '../assets/icons/postgresql-logo.svg';
import mongodb from '../assets/icons/mongodb-logo.svg';
import elasticsearch from '../assets/icons/elasticsearch-logo.svg';
import gitactions from '../assets/icons/gitactions-logo.svg';
import cicd from '../assets/icons/cicd-logo.svg';
import sql from '../assets/icons/sql-logo.svg';
import springboot from '../assets/icons/springboot-logo.svg';
import supabase from '../assets/icons/supabase-logo.svg';
import javalin from '../assets/icons/javalin-logo.svg';

export const skills = [
    { id: 'html', name: 'HTML', progress: 100, type: 'language', icon: html },
    { id: 'css', name: 'CSS', progress: 90, type: 'language', icon: css },
    { id: 'js', name: 'JavaScript', progress: 85, type: 'language', icon: js },
    { id: 'ts', name: 'TypeScript', progress: 70, type: 'language', icon: typescript },
    { id: 'java', name: 'Java', progress: 90, type: 'language', icon: java },
    { id: 'python', name: 'Python', progress: 80, type: 'language', icon: python },
    { id: 'kotlin', name: 'Kotlin', progress: 80, type: 'language', icon: kotlin },
    { id: 'sql', name: 'SQL', progress: 85, type: 'language', icon: sql },

    { id: 'mysql', name: 'MySQL', progress: 90, type: 'database', icon: mysql },
    { id: 'postgresql', name: 'PostgreSQL', progress: 90, type: 'database', icon: postgresql },
    { id: 'mongodb', name: 'MongoDB', progress: 75, type: 'database', icon: mongodb },
    { id: 'elastic', name: 'Elastic Search', progress: 90, type: 'database', icon: elasticsearch },
    { id: 'supabase', name: 'Supabase', progress: 70, type: 'database', icon: supabase},


    { id: 'react', name: 'React', progress: 75, type: 'framework', icon: react },
    { id: 'reactnative', name: 'React Native', progress: 70, type: 'framework', icon: react },
    { id: 'springboot', name: 'Spring Boot', progress: 70, type: 'framework', icon: springboot },
    { id: 'javalin', name: 'Javalin', progress: 70, type: 'framework', icon: javalin },

    { id: 'figma', name: 'Figma', progress: 90, type: 'design', icon: figma },
    { id: 'canva', name: 'Canva', progress: 100, type: 'design', icon: canva },
    { id: 'ps', name: 'Photoshop', progress: 90, type: 'design', icon: photoshop },

    { id: 'git', name: 'Git', progress: 90, type: 'other', icon: git },
    { id: 'gitactions', name: 'Git Actions', progress: 80, type: 'other', icon: gitactions },
    { id: 'cicd', name: 'CI/CD', progress: 80, type: 'other', icon: cicd },
    { id: 'jira', name: 'Jira', progress: 90, type: 'other', icon: jira },

    
];

export const frontendSkills = skills.filter(skill =>
    ['html', 'css', 'js', 'ts', 'react', 'reactnative', 'git', 'figma', 'canva', 'ps', 'jira'].includes(skill.id)
);

export const backendSkills = skills.filter(skill =>
    ['java', 'python', 'kotlin', 'sql', 'mysql', 'postgresql', 'mongodb', 'elastic', 'supabase', 'springboot', 'javalin', 'elastic', 'gitactions', 'cicd', 'jira'].includes(skill.id)
);

export const fullstackSkills = skills; 