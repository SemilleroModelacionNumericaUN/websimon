<script>
  export let teamData = {};
  const { heading, team_list } = teamData;
</script>

<div id="team" class="">
  <div class="container">
    <h2 class="title">{heading}</h2>
    <div class="all-team">
      {#each team_list as user}
        <div class="user-card">
          <h4>{user.name}</h4>
          <p class="user-details">
            <b>{user.position}</b>
            <br />
            {user.email}
          </p>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  #team {
    background: var(--bglight);
    background-image: url(../images/bg-img.svg);
    color: var(--onlight);
    padding: 40px 0;
  }

  .title {
    text-align: center;
    text-transform: uppercase;
    font-size: 24px;
    padding: 10px 0 30px 0;
  }

  .all-team {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 2em;
  }

  .user-card {
    flex: 1;
    min-width: 200px;
    border-color: var(--onlight);
    border-left: 4px solid;
    background: rgba(230, 230, 230, 0.5);
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 5px;
  }

  .user-details {
    display: inline-block;
    font-size: 12px;
  }
</style>
