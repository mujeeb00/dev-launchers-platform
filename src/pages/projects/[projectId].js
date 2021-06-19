import axios from "axios";
import { useRouter } from "next/router";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import Project from "../../components/modules/Projects/Project";

// export const getStaticPaths = async () => {
//   const { data } = await axios(
//     "https://cms-api-staging.devlaunchers.com/projects",
//     {
//       headers: {
//         Accept: "application/json, text/plain, */*",
//         "User-Agent": "*"
//       }
//     }
//   );
//   // const res = await fetch("https://cms-api-staging.devlaunchers.com/projects");
//   // const data = await res.json();
//   const paths = data.map((project, i, array) => {
//     return {
//       params: { Project: project.id.toString() }
//     };
//   });
//   return {
//     paths,
//     fallback: false
//   };
// };

// export const getStaticProps = async context => {
//   const id = context.params.Project;
//   const { data } = await axios.get(
//     `https://cms-api-staging.devlaunchers.com/projects/${id.toString()}`,
//     {
//       headers: {
//         Accept: "application/json, text/plain, */*",
//         "User-Agent": "*"
//       }
//     }
//   );
//
//   return {
//     props: {
//       data
//     },
//     revalidate: 20
//   };
// };

const ProjectRoute = ({ data }) => {
  const router = useRouter();
  const { projectId } = router.query;

  return (
    <div>
      <Header />
      <Project projectId={projectId} />
      <Footer />
    </div>
  );
};

export default ProjectRoute;
