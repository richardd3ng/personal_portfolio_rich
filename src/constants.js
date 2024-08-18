export const ProfileDescription = (
    <>
        I am a software developer interested in Full Stack Mobile & Web
        Development and Artificial Intelligence/Machine Learning!
    </>
);

export const projects = [
    {
        title: "Coaster",
        description: (
            <>
                Coaster is an innovative mobile app I developed end-to-end that
                seamlessly blends music and travel experiences. Coaster offers a
                unique set of features, including geographical clustering of
                listened tracks on an interactive map, playback previews, and
                custom playlist creation. Users can share and filter song
                clusters with friends and the global community, execute location
                and music-based search queries, and create collaborative
                listening memories. Coaster represents a perfect fusion of my
                technical skills and my passion for creating meaningful,
                user-centric applications that enhance people's daily lives and
                social connections. The app is currently in development and
                available to try on TestFlight if you join the {}
                <a
                    href="https://docs.google.com/document/d/1_VbUTdMC4SZ2JUfEl9FTwajJKHST0oeqn6WOBA_RksU/edit?usp=sharing"
                    style={{
                        color: "blue",
                        textDecoration: "none",
                        transition: "text-decoration 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                        (e.target.style.textDecoration = "underline")
                    }
                    onMouseLeave={(e) =>
                        (e.target.style.textDecoration = "none")
                    }
                >
                    test group
                </a>
                !
            </>
        ),
        image: "images/coaster-mockup.png",
        tags: ["MongoDB", "Express", "React Native", "Node"],
        source: "https://github.com/richardd3ng/Coaster-Client",
        visit: "https://testflight.apple.com/join/HRjutyeD",
        id: 1,
    },
    {
        title: "Repo Amigo",
        description: (
            <>
                Repo Amigo is a chatbot web app I prototyped using Python that
                delivers a user-friendly interface for Github repository
                exploration. Users can ask questions about a selected
                repository, and receive answers generated by OpenAI's Large
                Language Models (LLMs) such as GPT-3.5-Turbo. The system employs
                persistent storage by caching document chunk embeddings in
                vector databases, ensuring that fetched repository data is
                retained across user sessions. Moreover, the web app integrates
                GitHub login functionality using OAuth2, allowing users to
                authenticate themselves with their GitHub credentials.
            </>
        ),
        image: "images/repo-amigo.png",
        tags: ["OpenAI", "LangChain", "ChromaDB", "Streamlit"],
        source: "https://github.com/richardd3ng/Repo-Amigo",
        visit: "https://repo-amigo.streamlit.app",
        id: 2,
    },
    {
        title: "GAN Research Project",
        description: (
            <>
                A Generative Adversarial Network (GAN) is a type of AI model
                designed to generate new, realistic data by learning patterns
                from existing data. This research project creates 3 GAN variants
                for CIFAR-10 image generation and evaluates their strengths and
                limiations. The first GAN is a WGAN-GP that uses the Wasserstein
                Distance loss to address training stability and mode collapse
                issues. The second GAN is an AC-GAN that introduces an auxiliary
                classifier to generate labeled images. The third GAN is a hybrid
                "WAC-GAN-GP" combining the benefits of labeled data generation
                with training stability. Applying WAC-GAN-GP to CIFAR-10 is
                novel.
            </>
        ),
        image: "images/gan.png",
        tags: ["PyTorch", "Google CoLab"],
        source: "https://github.com/richardd3ng/GAN-project",
        visit: "https://drive.google.com/file/d/1lLe3PHkyj790woM59pNPIWid3h4gIadL/view?usp=sharing",
        id: 3,
    },
    {
        title: "Nscribe",
        description: (
            <>
                As a member of the Global Alliance for Medical Innovation {}
                <a
                    href="https://www.instagram.com/gami.health/"
                    style={{
                        color: "blue",
                        textDecoration: "none",
                        transition: "text-decoration 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                        (e.target.style.textDecoration = "underline")
                    }
                    onMouseLeave={(e) =>
                        (e.target.style.textDecoration = "none")
                    }
                >
                    (GAMI)
                </a>
                , I co-led a team of students to work with doctors and
                professors to develop ML models to detect Parkinson's and
                Alzheimer's Disease from patients' handwriting data. Nscribe is
                an iOS app currently on TestFlight designed to help medical
                professionals collect handwriting data from patients for
                neurodegenerative disease diagnosis purposes. The full paper
                detailing the ML analysis pipeline we developed is linked below
                in "More Info."
            </>
        ),
        image: "images/nscribe.png",
        tags: ["XCode", "SwiftUI"],
        source: "https://github.com/jaychandra3/DrawingApp",
        visit: "https://pubmed.ncbi.nlm.nih.gov/34679363",
        id: 4,
    },
];

export const TechnologiesDesription = (
    <>
        Through my experiences in classes, personal projects, extracurriculars,
        and internships, I've worked with a range of technologies across full
        stack development and machine learning.
    </>
);

export const AboutMeDescription = (
    <>
        Hi there! I graduated from Duke University in 2024 with degrees in
        Computer Science and Electrical/Computer Engineering and am currently
        working as a full-time Software Engineer! Although I went to college in
        North Carolina, I originally grew up in the Bay Area, where my interest
        in technology was sparked from an early age. Through my classes and
        extracurriculars, I've had the opportunity to work on a plethora of
        exciting projects, from developing mobile applications to applying novel
        ML solutions to ongoing problems. I've also gained valuable experience
        through internships at a variety of tech companies, where I've had the
        chance to collaborate with talented engineers and learn about the latest
        industry trends and practices. When I'm not coding, you can find me
        working out, jamming on my piano, experimenting with healthy recipes in
        the kitchen, or traveling to explore new places!
    </>
);

export const TimeLineData = [
    { year: 2020, text: "Started college at Duke!" },
    {
        year: 2021,
        text: "Worked as a SWE intern at Mi-Corporation (acquired by Ideagen)",
    },
    { year: 2022, text: "Worked as a SWE intern at Meta" },
    { year: 2023, text: "Worked as a SWE Intern at Roblox" },
    { year: 2024, text: "Graduated from Duke! Working as a SWE at Meta" },
];