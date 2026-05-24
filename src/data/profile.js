/** Edit this object to personalize your portfolio */

export const LINKS = {
  emailPersonal: 'arghyasree07@gmail.com',
  emailInstitutional: 'arghyasree.saha_r@isical.ac.in',
  googleScholar:
    'https://scholar.google.com/citations?user=kJsemWIAAAAJ&hl=en',
  github: 'https://github.com/Arghyasree',
  linkedin: 'https://www.linkedin.com/in/arghyasree-saha-82b07422b/',
  orcid: '#',
}

export const ADVISORS = {
  utpal: {
    name: 'Prof. Utpal Garain',
    href: 'https://oldweb.isical.ac.in/~utpal/',
  },
  pawan: {
    name: 'Dr. Pawan Kumar Singh',
    href: 'https://jadavpuruniversity.in/faculty-profile/pawan-kumar-singh/',
  },
}

export const PROFILE = {
  name: 'Arghyasree Saha',
  selfName: 'Arghyasree Saha',
  selfCitationName: 'A. Saha',
  role: 'PhD Student in Computer Science',
  homeBio: [
    {
      beforeInstitution:
        'I am a Junior Research Fellow in Computer Science at the Computer Vision and Pattern Recognition Unit, ',
      institution: {
        name: 'Indian Statistical Institute, Kolkata',
        href: 'https://www.isical.ac.in/',
      },
      beforeAdvisor: ', advised by ',
      advisor: ADVISORS.utpal,
      afterAdvisor:
        '. My research interests lie at the intersection of AI for scientific discovery, computational biology, and trustworthy machine learning.',
    },
    'I am particularly interested in developing intelligent computational methods for problems in covalent drug discovery, PROTACs, molecular representation learning, and molecular property prediction. My broader goal is to build reliable, explainable, and data-efficient AI systems that can assist in biological knowledge extraction, drug design, and decision-making in complex biomedical domains.',
  ],
  profileLinks: [
    { label: 'Email', href: `mailto:${LINKS.emailPersonal}` },
    { label: 'Google Scholar', href: LINKS.googleScholar, external: true },
    { label: 'GitHub', href: LINKS.github, external: true },
    { label: 'LinkedIn', href: LINKS.linkedin, external: true },
  ],
  researchInterests: [
    {
      title: 'Deep Learning',
      description:
        'Representation learning and neural models for complex biomedical and scientific data.',
    },
    {
      title: 'Large Language Models',
      description:
        'LLM-based reasoning, retrieval, and information extraction from scientific literature.',
    },
    {
      title: 'Computational Drug Design',
      description:
        'AI-driven methods for covalent drug discovery, PROTACs, and molecular modeling.',
    },
    {
      title: 'Biomedical Data Analysis',
      description:
        'Reliable and interpretable machine learning for biomedical decision-making.',
    },
  ],
  publications: [
    {
      type: 'journal',
      title:
        'Schizophrenia detection from electroencephalogram signals using image encoding and wrapper-based deep feature selection approach',
      authors: [
        'U. Aich',
        'A. Saha',
        'M. F. Ijaz',
        'P. K. Singh',
        'M. Woźniak',
      ],
      venue: 'Scientific Reports',
      year: 2025,
      href: 'https://www.nature.com/articles/s41598-025-06121-7',
    },
    {
      type: 'conference',
      title:
        'DeepPark-Net: A Multimodal Deep Learning Framework for Parkinson’s Disease Detection',
      authors: ['S. Bera', 'A. Saha', 'P. K. Singh'],
      venue:
        'International Conference on Computational Intelligence in Communications and Business Analytics',
      year: 2025,
      href: 'https://link.springer.com/chapter/10.1007/978-3-032-17181-8_26',
    },
  ],
  education: [
    {
      degree: 'PhD in Computer Science',
      school: 'Indian Statistical Institute, Kolkata',
      unit: 'Computer Vision and Pattern Recognition Unit',
      advisor: ADVISORS.utpal,
      researchArea:
        'Computational Biology, Drug Design, and Biomedical Data Analysis',
      years: '2025 — Present',
    },
    {
      degree:
        'M.E. in Software Engineering, Department of Information Technology',
      school: 'Jadavpur University',
      advisor: ADVISORS.pawan,
      thesisTitle:
        'A Multimodal Approach to Schizophrenia Detection and Classification.',
      years: '2023 — 2025',
    },
    {
      degree: 'B.Tech in Computer Science and Engineering',
      school:
        'Maulana Abul Kalam Azad University of Technology, West Bengal (formerly WBUT)',
      years: '2019 — 2023',
    },
    {
      degree: 'Class XII (ISC)',
      school: 'Modern High School for Girls',
      grade: '94%',
    },
    {
      degree: 'Class X (ICSE)',
      school: 'Our Lady Queen of the Missions School',
      grade: '95.2%',
    },
  ],
  achievements: [
    {
      title: 'University Gold Medalist, Jadavpur University',
      year: '2025',
      detail: 'Awarded for securing First Class First position in M.E.',
    },
    {
      title: 'UGC NET-JRF in Computer Science',
      year: '2025',
    },
    {
      title: 'Qualified GATE in Computer Science',
      year: '2023',
    },
  ],
  affiliation: {
    lines: [
      'Computer Vision and Pattern Recognition Unit,',
      'Indian Statistical Institute,',
      '203 B.T. Road, Kolkata 700108, India',
    ],
  },
}
