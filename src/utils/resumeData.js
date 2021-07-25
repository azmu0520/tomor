import { Facebook, GitHub, LinkedIn, Twitter } from "@material-ui/icons";
import React from "react";

export default {
  name: "Azizbek",
  title: "Front-End Developer",
  birthday: "20th  May  2001",
  email: "azizbekbootcam@gmail.com",
  adress: "Uchkurgan District",
  phone: "+99893 056 27 28",
  socials: {
    Facebook: {
      link: "https://www.facebook.com/rajjol.mukhtorov",
      text: "My FaceBook",
      icon: <Facebook />,
    },
    Twitter: {
      link: "https://twitter.com/Azizbek97601149",
      text: "My Twitter",
      icon: <Twitter />,
    },
    LinkedIn: {
      link: "http://www.linkedin.com/in/azizbek-mukhtorov-104b53217",
      text: "My linkedIn",
      icon: <LinkedIn />,
    },
    Github: {
      link: "https://github.com/azmu0520",
      text: "My Github",
      icon: <GitHub />,
    },
  },
  about:
    "The name’s Azizbek Mukhtorov. I am a tireless seeker of knowledge , coincidentally, a Front-End Developer. I have tried myself in so many different types of professions until 'today' and for me I have imagined their collection in the form of IT and decided to start this field from being a web developer. I am results-oriented , meaning  I know the ultimate goal of loaded work and   which resources it will take to get there. I will do whatever it takes to get the job done. \n\n I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best. In my last job, this passion led me to challenge myself daily and learn new skills that helped me to do better work.  I thrive on challenge and constantly set goals for myself, so I have something to strive toward. I’m not comfortable with settling, and I’m always looking for an opportunity to do better and achieve greatness.  ",
  experiences: [
    {
      title: "Front-End Web Developer",
      date: "2021 - Present",
      describtion: `Building websites and apps that are responsive and usable.
Monitoring website performance and rectifying front-end-related issues.
Communicating technical issues in an understandable manner to the team and clients.`,
    },
    {
      title: "Mentor Teacher in WebBrain Academy",
      date: "2020-2021",
      describtion:
        "I prefer models of teaching who support and monitor Interns as they begin an intensive and sustained period of learning to teach in a context of practice. My  responsibilities fall into three categories: planning and communication, support of the Intern’s learning, and assessment of the Intern’s understanding and progress.",
    },
    {
      title: "English Tutor",
      date: "2019 - 2021",
      describtion:
        "I used to  provide one-on-one or a small group lessons to students in elementary, middle or high school.I have tried to provide lessons outside a school setting.I was familiar with pre-set curriculum and use that knowledge to design and implement lessons accordingly.",
    },
  ],
  educations: [
    {
      title: "Westminster International University in Tashkent",
      date: "2021 - Present",
      describtion:
        "In order to improve my knowledge in the field of IT, this year I applied to study at westminster international university in Tashkent and was successfully accepted.",
    },
    {
      title: "WebBrain Academy",
      date: "2020-2021",
      describtion:
        "WebBrain academy has been the foundation for me to start my bright future. In a short time, I’ve wrapped up the basics of front-end web programming. I am grateful to WebBrain academy for the rest of my life",
    },
    {
      title: "Dombita",
      date: "2018-2019",
      describtion:
        "It is the only and most powerful educational institution in Uzbekistan with the name of English language training center, but It teaches you the lifehacks you will need all your life. I will never forget this place",
    },
  ],
};
