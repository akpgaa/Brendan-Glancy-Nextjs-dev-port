import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../../components/Navigation"));
const Greetings = dynamic(() => import("../../containers/Greetings"));
import SEO from "../../components/SEO";
import { useRouter } from "next/dist/client/router";
import QRUI from "../../containers/QR";

export default function Home() {
  const router = useRouter();
  const { url, name } = router.query;
  console.log(router, url, name);
  return (
    <div>
      <SEO />
      <Navigation />
      <QRUI />
    </div>
  );
}

Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};
