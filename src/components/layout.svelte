<script>
  const base = ''
  
</script>
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
  <a href="https://instagram.com/annkristindanzinger/" title="go to instagram">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 50 50">
      <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
    </svg>
  </a>
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
    min-height: calc(100vh - 140px);
  }

  .footer {
    height: 78px;
    padding: 0.8rem 0;
    border-top: 1px solid var(--primary);
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    font-size: 0.7rem;
    gap: 0.5rem;
  }
  
  a {
    text-decoration: none;
  }

  a:hover {
    font-weight: bold;
  }

  svg>path {
    stroke-width: 2px;
    stroke: var(--primary);
  }

  svg:hover path {
    stroke-width: 3px;
    
  }

  @media only screen and (max-width: 768px) {
      /* For mobile phones: */
      .header {
         flex-flow: column;
      }
      .main {
        min-height: calc(100vh - 160px);
      }
  }

</style>

