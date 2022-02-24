<script>
  import Navbar from "./Components/Navbar.svelte";
  import Banner from "./Components/Banner.svelte";
  import About from "./Components/About.svelte";
  import Projects from "./Components/Projects.svelte";
  import Developpers from "./Components/Developpers.svelte";
  import Team from "./Components/Team.svelte";
  import Tools from "./Components/Tools.svelte";
  import Network from "./Components/Network.svelte";
  import Footer from "./Components/Footer.svelte";
  import DATA from "./Data/data.js";
</script>

<Navbar header={DATA.HEADER} navlists={DATA.NAVBAR_DATA} />
<Banner bannerData={DATA.BANNER_DATA} />
<About aboutData={DATA.ABOUT_DATA} />
<Projects projectsData={DATA.PROJECTS_DATA} />
<Developpers developpersData={DATA.DEVELOPPERS_DATA} />
<Team teamData={DATA.TEAM_DATA} />
<Tools tools_data={DATA.TOOLS_DATA} />
<Network networkData={DATA.NETWORK_DATA} />
<Footer footerData={DATA.FOOTER_DATA} />
