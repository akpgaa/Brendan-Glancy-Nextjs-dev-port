import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../../components/Navigation"));
const Greetings = dynamic(() => import("../../containers/Greetings"));
// const Skills = dynamic(() => import("../containers/Skills"));
// const Education = dynamic(() => import("../containers/Education"));
// const Experience = dynamic(() => import("../containers/Experience"));
// const Projects = dynamic(() => import("../containers/Projects"));
// const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
// const GithubProfileCard = dynamic(() =>
//   import("../components/GithubProfileCard")
// );
// import { openSource } from "../portfolio";
import SEO from "../../components/SEO";
import { useRouter } from "next/dist/client/router";
// import Contact from "../components/ContactUs.jsx";

export default function Home() {
  const router = useRouter();
  const { url, name } = router.query;
  console.log(router, url, name);
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings url={url} name={name} />
      {/* <Skills />
      <Education />
      <Experience />
      <Contact />
      <Feedbacks />
      <Projects /> */}
    </div>
  );
}

Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};
