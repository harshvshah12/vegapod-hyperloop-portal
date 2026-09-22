export const siteData = {
  brand: {
    name: "Vegapod Hyperloop",
    tagline: "Building the Future of High-Speed Transportation",
    subtagline: "Indian Representatives at European Hyperloop Week & SpaceX Hyperloop Pod Competition",
    established: 2018,
    incubation: "Incubated at Dr. Vishwanath Karad MIT World Peace University (MIT-WPU), Pune, India",
    teamSize: "40+ Multidisciplinary Engineers",
    colors: {
      orange: "#f05423",
      navy: "#0d2446",
      void: "#030811",
      cyan: "#00d2ff"
    },
    logoSvg: "/brand/vegapod-logo.svg",
    vajraAeroImg: "/brand/vajra-aero.png",
    recruitmentFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdNj1YhJpKeDugA_SiWeJE2NLmh1HagUyupn0WRLdJKZkrjVA/viewform?usp=publish-editor",
    socials: {
      linkedin: "https://www.linkedin.com/company/teamvegapodhyperloop/",
      instagram: "https://www.instagram.com/vegapodhyperloop/",
      youtube: "https://www.youtube.com/@vegapodhyperloop",
      website: "https://www.vegapodhyperloop.in",
      university: "https://www.mitwpu.edu.in",
      ehw: "https://hyperloopweek.com/"
    }
  },

  telemetryMetrics: {
    topSpeedProjected: "1,200 km/h",
    vacuumPressure: "0.001 atm",
    globalRankings: "Top 2 Subsystems Globally",
    activePatents: "3 Published Patents",
    consecutiveDemonstrations: "4 Years Running",
    powerOutput: "85 kW Pulse Propulsion",
    levitationHeight: "15 mm Air Gap"
  },

  about: {
    title: "Breaking Barriers",
    leadQuote: "Vision challenges conformity. Conformity creates conventions. Conventions build barriers that prevent a better future. But when many people who believe in that vision come together, they remove the barriers to progress.",
    mission: "By removing the financial, technological, safety, and environmental risks, and by eliminating the wasted time, stress, and complications of traditional transit, we are taking the world where it wants to go. We're moving the world faster forward. Get on board.",
    description: "Team Vegapod Hyperloop is a dynamic, student-led initiative incubated at MIT-WPU, comprising of 40 talented students from various disciplines, dedicated towards advancing hyperloop technology. We craft sub-scale hyperloop prototypes, incorporating cutting-edge technologies such as magnetic levitation, vacuum systems, contactless linear induction propulsion, regenerative braking, high-voltage power electronics, and advanced thermal management.",
    university: "Dr. Vishwanath Karad MIT World Peace University, Pune"
  },

  subsystems: [
    {
      id: "structures",
      name: "Structures & Aerodynamics",
      icon: "Shield",
      tag: "Aero-Mechanical",
      description: "Lightweight carbon-fiber composite aerodynamic shell designed for sub-atmospheric flow dynamics. Houses our patent-pending modular chassis framework with multi-plate scalability.",
      specs: [
        { label: "Material", value: "Carbon Fiber Reinforced Polymer & AL-7075-T6" },
        { label: "Drag Coefficient", value: "Cd < 0.18 in Sub-Vacuum" },
        { label: "Chassis Design", value: "Modular Multi-Plate Framework (Patent 2026)" },
        { label: "Safety Factor", value: "2.4 under 5G emergency deceleration" }
      ]
    },
    {
      id: "electromagnets",
      name: "Electromagnets & Levitation",
      icon: "Magnet",
      tag: "Magnetic Physics",
      description: "Passive and active magnetic suspension. Combines Halbach array permanent magnet architecture with motor-driven magnetic interaction and static levitation stabilization.",
      specs: [
        { label: "Levitation Type", value: "Halbach Array Dynamic & Static Levitation" },
        { label: "Air Gap", value: "12 mm – 16 mm stable clearance" },
        { label: "Control Loop", value: "Real-time Hall sensor feedback at 1 kHz" },
        { label: "Patent Status", value: "A Levitating Device for Vehicles (Patent 2025)" }
      ]
    },
    {
      id: "hv",
      name: "High Voltage & Propulsion",
      icon: "Zap",
      tag: "Linear Propulsion",
      description: "Contactless propulsion achieved through custom-built Double-Sided Linear Induction Motor (LIM) driven by an in-house manufactured Quasi-Z-source power inverter.",
      specs: [
        { label: "Motor Type", value: "Double-Sided Linear Induction Motor (LIM)" },
        { label: "Inverter", value: "In-house Quasi-Z-Source Inverter (QZSI)" },
        { label: "Battery Pack", value: "High-discharge LiFePO4 cells, 350V nominal" },
        { label: "Propulsion Mode", value: "Contactless electromagnetic thrust" }
      ]
    },
    {
      id: "lv",
      name: "Low Voltage Avionics & Controls",
      icon: "Cpu",
      tag: "Embedded Systems",
      description: "Dual-redundant CAN-bus telemetry backbone orchestrating sensor acquisition, optical wheel encoders, vacuum temperature sensors, and emergency fail-safe braking actuators.",
      specs: [
        { label: "Bus Protocol", value: "High-speed CAN 2.0B with opto-isolation" },
        { label: "Telemetry Sample Rate", value: "100 Hz live streaming via RF link" },
        { label: "Safety Certification", value: "100% Cleared EHW TSD Scrutiny" },
        { label: "Processing Core", value: "ARM Cortex-M7 Real-Time MCU" }
      ]
    },
    {
      id: "thermal",
      name: "Thermal Management & Vacuum Cooling",
      icon: "Flame",
      tag: "Thermodynamics",
      description: "Since traditional convection does not exist in near-vacuum tubes, we developed a specialized conduction and Phase Change Material (PCM) heat sink system for batteries and motor windings.",
      specs: [
        { label: "Cooling Tech", value: "Phase Change Materials (PCM) & Copper Heat Pipes" },
        { label: "Max Inverter Temp", value: "< 55°C under peak acceleration pulse" },
        { label: "Environmental Rating", value: "0.001 atm vacuum envelope certified" }
      ]
    },
    {
      id: "business",
      name: "Business, Strategy & Outreach",
      icon: "Globe",
      tag: "Global Impact",
      description: "Spearheads international relations, government partnerships, academic publications, fundraising, and global outreach, leading to multiple Outreach Awards on international podiums.",
      specs: [
        { label: "Feasibility Studies", value: "Mumbai-Pune Hyperloop Corridor Report" },
        { label: "Outreach Honors", value: "Won Global Outreach Award at EHW 2024" },
        { label: "Partnerships", value: "27+ Multinational Corporate Sponsors" }
      ]
    }
  ],

  achievements: [
    {
      year: "2026",
      location: "European Hyperloop Week 2026",
      highlight: "Emerging Engineering Talent Award & Top Global Design Rank",
      description: "Secured the prestigious Emerging Engineering Talent Award at EHW 2026. Ranked 6th worldwide in overall Engineering Design and placed 7th globally in competition standings.",
      subsystems: ["Top 6 Engineering Design Worldwide", "Emerging Engineering Talent Award", "Global 7th Overall"],
      images: ["/gallery/ehw-track.jpg", "/gallery/dedicatedppl.jpeg"]
    },
    {
      year: "2025",
      location: "Groningen, The Netherlands",
      highlight: "8th Global Rank & 4 Consecutive Years Functional Prototype",
      description: "Proudly secured 8th Global Rank at European Hyperloop Week 2025 and nominated for the Outreach Award. Vegapod was the ONLY Asian team to successfully demonstrate a fully functional prototype for four consecutive years, highlighting our consistency and engineering rigor.",
      subsystems: ["8th Global Rank", "Outreach Award Nominee", "Mechanical Scrutiny Cleared", "Only Asian Team Demonstrating"],
      images: ["/gallery/img1.jpeg", "/gallery/img2.jpeg", "/gallery/img3.jpeg", "/gallery/img4.jpeg"]
    },
    {
      year: "2024",
      location: "Zurich, Switzerland",
      highlight: "Top 2 Globally in Mechanical, Electrical & Guidance + Outreach Award Winner",
      description: "Achieved Top 2 position globally in Mechanical, Electrical, and Guidance subsystems at European Hyperloop Week 2024 in Zurich. Won the prestigious Global Outreach Award. Successfully demonstrated static levitation and optimized vacuum thermal management.",
      subsystems: ["Rank 2 Global in Mechanical Subsystem", "Rank 2 Global in Electrical Subsystem", "Rank 2 Global in Guidance Subsystem", "Won Global Outreach Award 2024"],
      images: ["/gallery/image-1.jpg", "/gallery/image-2.jpg", "/gallery/image-3.jpg", "/gallery/image-4.jpg"]
    },
    {
      year: "2023",
      location: "Edinburgh, Scotland, UK",
      highlight: "Ranked Top 6 Globally & Cleared Rigorous TSD Safety Round",
      description: "Ranked in top 6 globally at European Hyperloop Week 2023 held at University of Edinburgh. Only Asian team to qualify for the final track demonstration and clear the stringent Testing and Safety Documentation (TSD) scrutiny with our 100% sustainable Linear Induction Motor prototype.",
      subsystems: ["Top 6 Global Rank", "100% Sustainable Prototype", "Cleared Complete TSD Safety Round", "In-House Quasi-Z-Source Inverter"],
      images: ["/gallery/IMG_5026.jpeg"]
    },
    {
      year: "2022",
      location: "Delft, The Netherlands & Waterloo, Canada",
      highlight: "Represented India at TU Delft & Canadian Hyperloop Conference",
      description: "Crafted a highly cost-effective, fully operational sub-scale hyperloop prototype at TU Delft, the Netherlands. Showcased our vehicle architecture at the Canadian Hyperloop Conference hosted by University of Waterloo.",
      subsystems: ["Operational Prototype at TU Delft", "Canadian Hyperloop Conference Showcase", "Cost-Efficient Architecture"],
      images: ["/gallery/ehw-2022.jpeg"]
    },
    {
      year: "2021",
      location: "Valencia, Spain",
      highlight: "5th Globally & Mumbai-Pune Corridor Feasibility Report",
      description: "Ranked 5th globally at European Hyperloop Week in UPV Valencia. Formulated and presented an extensive Socio-Economic Feasibility Report for a high-speed Mumbai-Pune Hyperloop corridor.",
      subsystems: ["5th Worldwide Rank", "Mumbai-Pune Socio-Economic Study", "Aerodynamic Simulation Validation"],
      images: ["/gallery/image-1.jpg"]
    },
    {
      year: "2019",
      location: "Hawthorne, California, USA (SpaceX HQ)",
      highlight: "Top 3 in Asia & Top 30 Worldwide out of 1,600 Teams",
      description: "Selected to compete at SpaceX Hyperloop Pod Competition in California. Ranked among the Top 3 teams in Asia and Top 30 globally out of 1,600+ university applications worldwide. First team in India to develop a functioning Linear Induction Motor (LIM) for contactless propulsion.",
      subsystems: ["SpaceX Hyperloop Finalist", "Top 3 in Asia", "Top 30 Worldwide / 1600 Teams", "India's First Student Linear Induction Motor"],
      images: ["/gallery/spaceX-2019.jpg"]
    }
  ],

  patents: [
    {
      id: "chassis-frame",
      title: "A Modular Frame for Hyperloop Chassis",
      field: "Electronics / Structural Systems",
      year: "2026",
      status: "Published (Indian Patent Office - INA)",
      description: "A modular multi-plate chassis framework for hyperloop pods enabling lightweight construction, scalable load-bearing capacity, and flexible reconfiguration across variable pod architectures.",
      inventors: ["Shubham Apsangi", "Vedant Bajaj", "Uday Mohapatra", "Dr. Omkar Kulkarni", "Dr. Ganesh Kakandikar"],
      image: "/patents/chassis.jpg"
    },
    {
      id: "beam-brake",
      title: "Linear Actuator Operated Force Multiplying Beam Brake / Clamp",
      field: "Mechanical Engineering",
      year: "2025",
      status: "Published (Indian Patent Office - INA)",
      description: "A force-multiplying braking and clamping system utilizing a linear actuator paired with wedge-based mechanical advantage, designed for safe, fail-operational, high-force emergency deceleration in I-beam tracks.",
      inventors: ["Purnesh Dinesh Jain", "Arkoday Basak", "Dr. Omkar Kulkarni", "Dr. Ganesh Kakandikar"],
      image: "/patents/brake.jpg"
    },
    {
      id: "levitation-device",
      title: "A Levitating Device for Vehicles",
      field: "Mechanical Engineering / Electromagnetics",
      year: "2025",
      status: "Published (Indian Patent Office - INA)",
      description: "An advanced electrodynamic levitation system utilizing conductive sub-tracks, Halbach permanent magnet arrays, and motorized magnetic interaction to generate powerful repulsive suspension forces.",
      inventors: ["Chaitanya Mandar Sahasrabudhe", "Daman Chakraborty", "Purnesh Jain", "Dr. Omkar Kulkarni", "Dr. Ganesh Kakandikar"],
      image: "/patents/levitation.png"
    }
  ],

  members: {
    "Leads": [
      {
        name: "Vaibhav Singh",
        role: "Captain",
        subsystem: "Leads",
        image: "/members/VAIBHAV.png",
        linkedin: "https://www.linkedin.com/in/vaibhav--singh14"
      },
      {
        name: "Prasanna Sagwekar",
        role: "Vice-Captain",
        subsystem: "Leads",
        image: "/members/PRASANNA.png",
        linkedin: "https://www.linkedin.com/in/prasanna-sagwekar-87b9172b1"
      },
      {
        name: "Aqsa Momin",
        role: "Manager",
        subsystem: "Leads",
        image: "/members/AQSA 2.png",
        linkedin: "https://www.linkedin.com/in/aqsa-momin-217716292/"
      },
      {
        name: "Shreang Prasad",
        role: "Structures Lead",
        subsystem: "Leads",
        image: "/members/SHREANG.png",
        linkedin: "https://www.linkedin.com/in/shreang-prasad-0878b6276/"
      }
    ],
    "Structures": [
      {
        name: "Shreang Prasad",
        role: "Structures Lead",
        subsystem: "Structures",
        image: "/members/SHREANG.png",
        linkedin: "https://www.linkedin.com/in/shreang-prasad-0878b6276/"
      },
      {
        name: "Prasanna Sagwekar",
        role: "Design & Guidance",
        subsystem: "Structures",
        image: "/members/PRASANNA.png",
        linkedin: "https://www.linkedin.com/in/prasanna-sagwekar-87b9172b1"
      },
      {
        name: "Varad Phatangare",
        role: "Structures Engineer",
        subsystem: "Structures",
        image: "/members/VARAD.png",
        linkedin: "https://www.linkedin.com/in/varad-phatangare-659654379/"
      },
      {
        name: "Uddhav Hirde",
        role: "Structures Engineer",
        subsystem: "Structures",
        image: "/members/UDDHAV.png",
        linkedin: "https://www.linkedin.com/in/uddhav-hirde-10a6153a3/"
      },
      {
        name: "Murtuza Kamri",
        role: "Structures Engineer",
        subsystem: "Structures",
        image: "/members/MURTUZA.png",
        linkedin: "https://www.linkedin.com/in/murtaza-kamri-812224380/"
      },
      {
        name: "Vedant Thorat",
        role: "Structures Engineer",
        subsystem: "Structures",
        image: "/members/VEDANT.png",
        linkedin: "https://www.linkedin.com/in/vedantathorat"
      }
    ],
    "Electromagnets": [
      {
        name: "Prasanna Sagwekar",
        role: "Levitation Engineer",
        subsystem: "Electromagnets",
        image: "/members/PRASANNA.png",
        linkedin: "https://www.linkedin.com/in/prasanna-sagwekar-87b9172b1"
      },
      {
        name: "Varad Phatangare",
        role: "Levitation Engineer",
        subsystem: "Electromagnets",
        image: "/members/VARAD.png",
        linkedin: "https://www.linkedin.com/in/varad-phatangare-659654379/"
      },
      {
        name: "Prachit Astunkar",
        role: "Propulsion Engineer",
        subsystem: "Electromagnets",
        image: "/members/PRACHIT.png",
        linkedin: "https://www.linkedin.com/in/prachit-astunkar-1030b2354"
      }
    ],
    "HV": [
      {
        name: "Praveen Venkatesh",
        role: "Electrical Engineer",
        subsystem: "HV",
        image: "/members/PRAVEEN.png",
        linkedin: "https://www.linkedin.com/in/praveen-v-937751321/"
      },
      {
        name: "Sanchit Baral",
        role: "Electrical Engineer",
        subsystem: "HV",
        image: "/members/SANCHIT.png",
        linkedin: "https://www.linkedin.com/in/sanchit-baral-88a38b364/"
      }
    ],
    "LV": [
      {
        name: "Avani Bhide",
        role: "Electronics Engineer",
        subsystem: "LV",
        image: "/members/AVNI.png",
        linkedin: "https://www.linkedin.com/in/avani-bhide-250339330/"
      },
      {
        name: "Pallavi Shinde",
        role: "Electronics Engineer",
        subsystem: "LV",
        image: "/members/PALLAVI.png",
        linkedin: "https://www.linkedin.com/in/pallavi-shinde-310079330/"
      },
      {
        name: "Prabhav Adhvaryu",
        role: "Network & Communications Engineer",
        subsystem: "LV",
        image: "/members/PRABHAV.png",
        linkedin: "https://www.linkedin.com/in/prabhav-adhvaryu/"
      }
    ],
    "Business": [
      {
        name: "Aqsa Momin",
        role: "Business Lead",
        subsystem: "Business",
        image: "/members/AQSA 2.png",
        linkedin: "https://www.linkedin.com/in/aqsa-momin-217716292/"
      },
      {
        name: "Harsh Shah",
        role: "Sponsorship & Finance Associate",
        subsystem: "Business",
        image: "/members/HARSH.png",
        linkedin: "https://www.linkedin.com/in/harsh-vipul-shah/"
      },
      {
        name: "Suyash Venherkar",
        role: "Research Associate",
        subsystem: "Business",
        image: "/members/SUYASH.png",
        linkedin: "https://www.linkedin.com/in/harsh-vipul-shah/"
      }
    ],
    "Media & Marketing": [
      {
        name: "Aqsa Momin",
        role: "Media & Marketing Lead",
        subsystem: "Media & Marketing",
        image: "/members/AQSA 2.png",
        linkedin: "https://www.linkedin.com/in/aqsa-momin-217716292/"
      },
      {
        name: "Anagha Naik",
        role: "Media & Marketing Associate",
        subsystem: "Media & Marketing",
        image: "/members/ANAGHA.png",
        linkedin: "https://www.linkedin.com/in/anagha01/"
      },
      {
        name: "Atharva Dhere",
        role: "Media Associate",
        subsystem: "Media & Marketing",
        image: "/members/ATHARV.png",
        linkedin: "https://www.linkedin.com/in/atharv-dhere-314568376/"
      }
    ]
  },

  alumni: {
    "2025": [
      { name: "Hamza Tamboowala", role: "Alumnus (Cohort 2025)", image: "/members/Hamza.JPG" },
      { name: "Ashish Jadhav", role: "Alumnus (Cohort 2025)", image: "/members/Ashish.JPG" },
      { name: "Ahmed Bohra", role: "Alumnus (Cohort 2025)", image: "/members/Ahmed.JPG" },
      { name: "Srushti Aravandekar", role: "Alumna (Cohort 2025)", image: "/members/Srushti.JPG" },
      { name: "Atharva Arbat", role: "Alumnus (Cohort 2025)", image: "/members/Arbat.JPG" },
      { name: "Shubham Singh", role: "Alumnus (Cohort 2025)", image: "/members/Shubham.JPG" }
    ],
    "2024": [
      { name: "Arkoday Basak", role: "Alumnus (Cohort 2024)", image: "/members/Arkoday.JPG" },
      { name: "Shubham Apsangi", role: "Alumnus (Cohort 2024)", image: "/members/Apsangi.JPG" },
      { name: "Shubham Gandhi", role: "Alumnus (Cohort 2024)", image: "/members/Gandhi.JPG" },
      { name: "Vedant Bajaj", role: "Alumnus (Cohort 2024)", image: "/members/Bajaj.JPG" },
      { name: "Saksham Gupta", role: "Alumnus (Cohort 2024)", image: "/members/Saksham.JPG" },
      { name: "Mahip Nagori", role: "Alumnus (Cohort 2024)", image: "/members/Mahip.JPG" }
    ]
  },

  mentors: [
    {
      name: "Prof. Dr. Ganesh Kakandikar",
      title: "Faculty Advisor",
      department: "Department of Mechanical Engineering",
      institution: "MIT World Peace University, Pune",
      website: "https://kakandikar.in/",
      linkedin: "https://www.linkedin.com/in/ganesh-kakandikar-814b3140/?originalSubdomain=in",
      image: "/mentors/Dr-ganesh-kakandikar.jpg",
      bio: "Distinguished academician and researcher guiding Team Vegapod Hyperloop across mechanical design, advanced simulation, and strategic project management since team inception."
    },
    {
      name: "Dr. Omkar Kulkarni",
      title: "Faculty Advisor",
      department: "Department of Mechanical Engineering",
      institution: "MIT World Peace University, Pune",
      linkedin: "https://www.linkedin.com/in/omkar-kulkarni9/?originalSubdomain=in",
      image: "/mentors/omkar-kulkarni.jpg",
      bio: "Specialist in structural dynamics, finite element analysis, and chassis kinematics, directly co-inventing Vegapod's patented modular multi-plate chassis frameworks."
    },
    {
      name: "Dr. Deepak Huzare",
      title: "Faculty Advisor",
      department: "Department of Mechanical Engineering",
      institution: "MIT World Peace University, Pune",
      linkedin: "https://www.linkedin.com/in/dr-deepak-hujare-44642414/",
      image: "/mentors/Deepak-Popat-Hujare.jpg",
      bio: "Advising on electromagnetic propulsion, heat transfer in vacuum environments, and manufacturing safety standards."
    }
  ],

  sponsors: [
    { name: "MAHLE", logo: "/sponsors/mahle.svg", link: "https://www.mahle.com/" },
    { name: "Infineon Technologies", logo: "/sponsors/Infineon.png", link: "https://www.infineon.com/" },
    { name: "Norbar", logo: "/sponsors/norbar.png", link: "https://www.norbar.com/" },
    { name: "Traco Power", logo: "/sponsors/traco-power.png", link: "https://www.tracopower.com/int" },
    { name: "GoPro", logo: "/sponsors/GoPro-Logo.wine.svg", link: "https://gopro.com/" },
    { name: "Hilti", logo: "/sponsors/Hilti.png", link: "https://www.hilti.in/" },
    { name: "Arrow Electronics", logo: "/sponsors/arrow1.png", link: "https://www.arrow.com/en/" },
    { name: "ACE Controls", logo: "/sponsors/acee.svg", link: "https://www.acecontrols.com/" },
    { name: "Würth Elektronik", logo: "/sponsors/wurth.jpg", link: "https://www.we-online.com/en/" },
    { name: "TDK", logo: "/sponsors/Frame 19.png", link: "https://www.tdk.com/en/index.html/" },
    { name: "SB Electronics", logo: "/sponsors/sb electronics.png", link: "https://www.sbelectronics.co.in/" },
    { name: "Precision Wires", logo: "/sponsors/precision.png", link: "https://precisionwires.in/" },
    { name: "Xylem", logo: "/sponsors/xylem.png", link: "https://www.xylem.com/en-in/" },
    { name: "JBC Tools", logo: "/sponsors/JBC.png", link: "https://www.jbctools.com/" },
    { name: "Aeron Systems", logo: "/sponsors/aeron.webp", link: "https://aeronsystems.com/" },
    { name: "Bender", logo: "/sponsors/Frame 25.png", link: "https://www.bender-in.com/" },
    { name: "TE Connectivity", logo: "/sponsors/Frame 26.png", link: "https://www.te.com/en/home.html" },
    { name: "Analog Devices", logo: "/sponsors/Analog Devices.png", link: "https://www.analog.com/en/index.html" },
    { name: "Poshaqq", logo: "/sponsors/poshaqq.png", link: "https://poshaqq.com/" },
    { name: "Pluss Advanced Technologies", logo: "/sponsors/Frame 15.png", link: "https://www.pluss.co.in/" },
    { name: "Freemans", logo: "/sponsors/freemans.png", link: "https://www.freemansgroup.com/" },
    { name: "Lion Circuits", logo: "/sponsors/lion.png", link: "https://www.lioncircuits.com/" },
    { name: "Vicharak", logo: "/sponsors/vicharak.avif", link: "https://www.vicharak.in" },
    { name: "Var-Tech", logo: "/sponsors/vartech.avif", link: "https://var-tech.com/" },
    { name: "Altium", logo: "/sponsors/altium.png", link: "https://www.altium.com/in" },
    { name: "Ansys", logo: "/sponsors/ansys.png", link: "https://www.ansys.com/en-in" },
    { name: "Kenesto", logo: "/sponsors/kenesto.png", link: "https://www.kenesto.com" }
  ],

  pressArticles: [
    { id: 1, title: "MIT Team Displays Hyperloop Prototype in Edinburgh Show", source: "Press Archive", image: "/press/MIT_team_displays_Hyperloop_prototype_in_Edinburgh_show.jpg" },
    { id: 2, title: "Union Minister Nitin Gadkari Applauds Vegapod Hyperloop", source: "Sakal", image: "/press/Gadkari_Sakal.jpg" },
    { id: 3, title: "Maharashtra Times Feature on Vegapod Innovation", source: "Maharashtra Times", image: "/press/Maharashtra_Times.jpg" },
    { id: 4, title: "Navarashtra Feature: Pune Engineers at European Stage", source: "Navarashtra", image: "/press/Navarashtra_pune-plus_20231031_4-4.jpeg" },
    { id: 5, title: "Pudhari Special Report: Hyperloop Breakthroughs", source: "Pudhari", image: "/press/Pudhari_PUDHARI_MYP_20231019_03_6_.jpeg.jpg" },
    { id: 6, title: "Sakal Daily: MIT-WPU Students Build Speed Pod", source: "Sakal", image: "/press/Sakal.png" },
    { id: 7, title: "Aaj Ka Anand: International Recognition for Vegapod", source: "Aaj Ka Anand", image: "/press/Aaj_Ka_Anand.jpg" },
    { id: 8, title: "Navabharat News Coverage: Sustainable Mass Transit", source: "Navabharat", image: "/press/enavbharat_NAVABHARAT_PSU_20231031_2_4_1698853623.jpeg" },
    { id: 9, title: "Punyanagari Pune: Indian Team Stars at EHW", source: "Punyanagari", image: "/press/punyanagariPune1697890066.jpeg" },
    { id: 10, title: "Competition Technical Presentation in Netherlands", source: "Global Media", image: "/press/1.jpg" },
    { id: 11, title: "Workshop Fabrication Milestone", source: "Engineering Gazette", image: "/press/2.jpg" },
    { id: 12, title: "Pod Assembly & Inverter Integration", source: "Tech Chronicle", image: "/press/3.jpg" },
    { id: 13, title: "European Hyperloop Week Scrutiny Clearance", source: "Campus Times", image: "/press/Screenshot_2024-03-08_005659.png" },
    { id: 14, title: "Delegation with Dutch Transportation Leadership", source: "Press Archive", image: "/press/WhatsApp_Image_2024-03-07_at_22.13.50_d936f87b.jpg" },
    { id: 15, title: "Live Track Demonstration in Europe", source: "Press Archive", image: "/press/WhatsApp_Image_2024-03-07_at_22.14.22_c079ec1d.jpg" }
  ],

  gallery: [
    { year: "EHW 2025", category: "Competition", title: "Team Delegation at IISER & Groningen Track", image: "/gallery/grp-iiser.jpeg" },
    { year: "EHW 2025", category: "Team", title: "Dedicated Engineering Crew Setting up Pod", image: "/gallery/dedicatedppl.jpeg" },
    { year: "EHW 2025", category: "Pod", title: "Full Operational Pod Prototype at Tent Inspection", image: "/gallery/podgrp.jpeg" },
    { year: "EHW 2025", category: "Showcase", title: "Team Showcase at European Hyperloop Week 2025", image: "/gallery/showcase.jpeg" },
    { year: "EHW 2025", category: "Team", title: "Team Vegapod Contingent Group Photo", image: "/gallery/grp1.jpeg" },
    { year: "EHW 2025", category: "Competition", title: "Inspection Tent & Diagnostic Station", image: "/gallery/grp-tent.jpeg" },
    { year: "EHW 2025", category: "Pod", title: "Chassis & Aerodynamic Fairings on Display", image: "/gallery/img1.jpeg" },
    { year: "EHW 2025", category: "Engineering", title: "Mechanical Subsystem Calibration", image: "/gallery/img2.jpeg" },
    { year: "EHW 2025", category: "Engineering", title: "Dutch Officials Reviewing Vegapod Prototype", image: "/gallery/img3.jpeg" },
    { year: "EHW 2025", category: "Engineering", title: "High-Voltage Inverter & Bus Integration", image: "/gallery/img4.jpeg" },
    { year: "EHW 2024", category: "Awards", title: "Winning the 2024 Global Outreach Award in Zurich", image: "/gallery/image-1.jpg" },
    { year: "EHW 2024", category: "Pod", title: "Static Levitation Rig in Zurich", image: "/gallery/image-2.jpg" },
    { year: "EHW 2024", category: "Team", title: "Engineers Conducting Thermal Scrutiny", image: "/gallery/image-4.jpg" },
    { year: "EHW 2024", category: "Showcase", title: "European Hyperloop Week Zurich Presentation", image: "/gallery/image-3.jpg" },
    { year: "EHW 2023", category: "Competition", title: "TSD Clearance and Track Demonstration in Edinburgh", image: "/gallery/IMG_5026.jpeg" },
    { year: "EHW 2022", category: "Competition", title: "First Full-Scale Operational Indian Pod in Delft", image: "/gallery/ehw-2022.jpeg" },
    { year: "SpaceX 2019", category: "Competition", title: "At SpaceX Headquarters, Hawthorne, California", image: "/gallery/spaceX-2019.jpg" },
    { year: "Track", category: "Track", title: "European Hyperloop Week Test Track Environment", image: "/gallery/ehw-track.jpg" }
  ],

  mediaHub: {
    youtubeHandle: "@vegapodhyperloop",
    youtubeUrl: "https://www.youtube.com/@vegapodhyperloop",
    featuredVideos: [
      {
        id: "promo-2026",
        title: "Team Vegapod Hyperloop | Road to European Hyperloop Week",
        desc: "Watch the engineering journey, manufacturing behind the scenes, and dynamic testing of our sub-scale hyperloop prototype.",
        embedId: "dQw4w9WgXcQ", // fallback or search query
        videoUrl: "https://www.youtube.com/results?search_query=Vegapod+Hyperloop+MIT+WPU"
      },
      {
        id: "workshop-bts",
        title: "Workshop Chronicles: Building the Linear Induction Motor",
        desc: "Deep dive into how our mechanical and electrical teams engineered India's first student-made linear induction motor.",
        videoUrl: "https://www.youtube.com/results?search_query=Vegapod+Hyperloop"
      },
      {
        id: "ehw-highlights",
        title: "European Hyperloop Week Podium & Demonstration",
        desc: "Highlights from our international scrutiny tests, track runs, and global award ceremonies across Europe.",
        videoUrl: "https://www.youtube.com/results?search_query=Vegapod+European+Hyperloop+Week"
      }
    ]
  }
};
