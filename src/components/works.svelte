<script>
 	import { onMount } from 'svelte'
  import worklist from './works.js'

  let works = []
  onMount(async () => {
    works = await Promise.all(
      worklist.map(async work => {
        return {
          ...work,
          imgSrc: new URL('../assets/' + work.name + '.jpg', import.meta.url),
        }
      })
    )
  })

</script>

<ul>
  {#each works as work}
  <li>
    <div class="imgcontainer" on:click={(evt) => {
         evt.target.scrollIntoView?.({behavior: 'smooth'})}}>
      <img src={work.imgSrc} height="{work.ts.split('x')[1]}" width="{work.ts.split('x')[0]}">
    <div class="box transparent_box" />
    <div class="box description">
      <h3>{work.name}</h3>
      <div>{work.material}</div>
      <div>{work.size}</div>
      <div>{work.date}</div>
    </div>
    </div>
  </li>
  {/each}
</ul>

<style>
  ul {
    display: flex;
    list-style-type: none;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;  
    gap: 3rem;
    padding: 0 1rem;
  }

  li {
    display: flex;
    justify-content: center;
  }

  .imgcontainer {
    position: relative;
    display: flex;
    justify-content: center;
  }

  img {
    width: 100%;
    height: auto;
    max-height: max(700px, 100vh);
    object-fit: contain;
  }

  .box {
    max-height: 100vh; 
    position: absolute;
    bottom: 0;
    height: 3.75rem;
    width: 100%;
    opacity: 1;
    transition: opacity 1s ease;
  }

  .description {
    display: flex;
    flex-flow: column nowrap;
    gap: 0.125rem;
    padding: 0 30px;
    opacity: 0;
    color: var(--primary);
  }

  h3 {
    font-size: 0.7rem;
  }
  .description>div {
    font-size: 0.7rem;
  }

  .transparent_box {
    background-color: white;
    opacity: 0;
  }

  li>div:hover .description {
    opacity: 1;
  }
  li>div:hover .transparent_box {
    opacity: 0.7;
  }

  h3 {
    margin: 0.125rem 0;
  }

  @media only screen and (max-width: 768px) {
      /* For mobile phones: */
      ul {
         padding: 0;
      }
  }
</style>
