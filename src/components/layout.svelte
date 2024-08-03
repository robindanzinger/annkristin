<script>
  const base = ''
  
</script>
<div class="construction">currently under construction</div>
<div class="header">
  <h1><a href={`/${base}`}>Ann-Kristin Danzinger</a></h1>
  <div class="menu">
    <div><a href={`/${base}cv`}>Curriculum</a></div>
    <div><a href={`/${base}contact`}>Contact</a></div>
  </div>
</div>
<div class="line"/>
<div class="main">
  <slot />
</div>
<div class="line"/>
<div class="footer">
  <a href={`/${base}impressum`}>
  Datenschutz & Impressum
  </a>
</div>


<style>
  @font-face {
    font-family: 'Arial';
    src: url('/Arial.ttf') format('ttf');
    font-weight: 700;
    font-style: normal;
  }
  .construction {
    position: fixed;
    left: calc(50vw - 70px);
    top: 50vh;
    font-size: 0.7rem;
    z-index: 100;
  }
  .header {
    display: flex;
    flex-flow: row nowrap;
    padding: 0 3rem 1rem;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--primary);
  }
  .line {
    width: 100%;
    height: 1px;
    margin: 2px 0;
    border-bottom: 1px solid var(--primary);
  }
  .menu {
    display: flex;
    flex-flow: row nowrap;
    gap: 40px;
  }
  .menu div {
    font-size: 0.9rem;
    color: var(--primary);
  }
  h1 {
    color: var(--primary);
    font-size: 1rem;
    font-weight: 300;
  }
  .main {
    display: flex;
    justify-content: center;
    min-height: calc(100vh - 120px);
  }

  .footer {
    padding: 1rem 0;
    border-top: 1px solid var(--primary);
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    font-size: 0.7rem;
  }
  
  a {
    text-decoration: none;
  }

  a:hover {
    font-weight: bold;
  }

  @media only screen and (max-width: 768px) {
      /* For mobile phones: */
      .header {
         flex-flow: column;
      }
  }

</style>

