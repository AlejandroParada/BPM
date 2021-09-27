<template><div class="features">
  <div class="feature" v-for="feat in $page.frontmatter.xfeatures">
    <h2>{{ feat.title }}</h2>
    <p>{{ feat.details }}</p>
	<p><a v-bind:href="feat.link"> Learn more...</a></p>
  </div>
</div>
<mycarousel/></template>
