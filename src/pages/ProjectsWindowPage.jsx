// import SkillsList from '../components/SkillsList';
// import SkillForm from '../components/SkillForm';
// header, link React/dom/css/footer/
import { React } from "react";
import { Header } from "../components/Header.jsx";
import { Navbar } from "../components/Navbar.jsx";
import { Footer } from "../components/Footer.jsx";
import "../components/UI/Projects.css";

export default ProjectsWindowPage

// import { QUERY_SINGLE_PROFILE } from '../utils/queries';

// const Profile = () => {
//   const { profileId } = useParams();

//   const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
//     variables: { profileId: profileId },
//   });

//   const profile = data?.profile || {};

//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <div>
//       <h2 className="card-header">
//         {profile.name}'s friends have endorsed these skills...
//       </h2>

//       {profile.skills?.length > 0 && <SkillsList skills={profile.skills} />}

//       <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
//         <SkillForm profileId={profile._id} />
//       </div>
//     </div>
//   );
// };

// export default Profile;

    // Fetch whatevs upon being loaded.
    // fetchWhatevs();