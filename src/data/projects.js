import clubpaleta from '../assets/projects/clubpaleta.png';
import guardaropas from '../assets/projects/guardaropas.png';
import memorytest from '../assets/projects/memorytest.png';
import mercadolibre from '../assets/projects/mercadolibre.png';
import backend from '../assets/projects/backend.png';

export const projects = [
    { id: 'Backend Group Project',
    name: 'Backend Group Project', 
    description: 'Integration of multiple databases into a single project.', 
    skills: ['Java', 'SpringBoot', 'MySQL', 'Neo4j', 'MongoDB', 'ElasticSearch'], 
    photo: backend, 
    link: 'https://github.com/roldanmarcos/tp-epers-backend'},

    { id: 'Club Paleta',
    name: 'Club Paleta', 
    description: 'Web application for creating and organizing pelota paleta matches.', 
    skills: ['Javascript', 'HTML', 'CSS', 'Supabase'], 
    photo: clubpaleta, 
    link: 'https://github.com/roldanmarcos/proyecto-club-paleta'},

    { id: 'Mercado Libre Clone',
    name: 'Mercado Libre Clone', 
    description: 'Clone of Mercado Libre Web and Mobile.', 
    skills: ['Javascript', 'HTML', 'CSS', 'React', 'React Native'], 
    photo: mercadolibre, 
    link: 'https://github.com/roldanmarcos/mercadolibre'},

    { id: 'Memory Test',
    name: 'Memory Test', 
    description: 'Interactive game of visual memory.', 
    skills: ['Javascript', 'HTML', 'CSS', 'React', 'React Native'], 
    photo: memorytest, 
    link: 'https://github.com/roldanmarcos/memotest'},

    { id: 'Guarda Ropas',
    name: 'Guarda Ropas', 
    description: 'Mobile application ux/ui design.', 
    skills: ['UI', 'UX', 'Figma', 'Wireframes'], 
    photo: guardaropas, 
    link: 'https://drive.google.com/drive/folders/1D8n9H_WNKDnWzyDn0f1AK4HVubRrfU5Z?usp=sharing'},
];

export const frontendProjects = projects.filter(project =>
    ['Guarda Ropas', 'Club Paleta', 'Mercado Libre Clone', 'Memory Test'].includes(project.id)
);

export const backendProjects = projects.filter(project =>
    ['Backend Group Project', 'Club Paleta', 'Mercado Libre Clone'].includes(project.id)
);

export const fullstackProjects = projects.filter(project =>
    ['Backend Group Project', 'Club Paleta', 'Mercado Libre Clone', 'Memory Test', 'Guarda Ropas'].includes(project.id)
);