<script>
  export let projectsData = {};
  const { heading, projects_list } = projectsData;
</script>

<section id="projects" class="">
  <div class="container">
    <h2 class="title">{heading}</h2>
    <div class="all-projects">
      {#each projects_list as project}
        <div class="project-card">
          <div class="card-content">
            <img 
              src={project.image} 
              alt={project.label} 
              class="card-img" 
            />
            <div class="card-body">
              <h4 class="card-title">{project.label}</h4>
              <p class="card-text">{project.description}</p>
            </div>
          </div>
          <div class="card-links">
            <a href={project.github_url} class="fab fa-github"> </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  #projects {
    background: var(--bglight);
    background-image: url(../images/bg-img.svg);
    color: var(--onlight);
    padding: 40px 0;
  }

  .title {
    text-transform: uppercase;
    font-size: 24px;
    padding: 10px 0 30px 0;
  }

  .all-projects {
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 20px;
    justify-content: space-between;
  }

  .project-card {
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    border-color: var(--onlight);
    padding: 10px;
    min-width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
  }

  .card-content {
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card-img {
    width: 90%;
  }

  .card-title {
    font-size: 24px;
    margin-top: 10px;
  }

  .card-links {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }

  a {
    font-size: 24px;
    text-decoration: none;
    color: var(--onlight);
  }

  a:hover {
    opacity: 0.7;
  }
</style>
