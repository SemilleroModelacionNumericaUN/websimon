<script>
  export let networkData = {};
  const { heading, network_list } = networkData;
</script>

 <div id="network" class="">
  <div class="container">
    <h2 class="title text-center">{heading}</h2>
    <div class="all-network">
      {#each network_list as item}
        <div class="network-card">
          <!--img src={item.img} alt={item.name} /-->
          <h3>{item.name}</h3>
          <p>{item.institution}</p>
          <!--a href={item.url}>{item.url}</a-->
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  #network {
    background: var(--bglight);
    background-image: url(../images/bg-img.svg);
    color: var(--onlight);
    padding: 40px 0;
  }

  .title {
    text-align: center;
    text-transform: uppercase;
    font-size: 24px;
    margin-bottom: 1em;
  }

  .all-network {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    grid-gap: 1em;
  }

  .network-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    text-align: center;
    box-shadow: 5px 5px 20px;
  }

  h3 {
    margin-bottom: 0.5em;
  }
</style>
