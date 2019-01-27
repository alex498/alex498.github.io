<template>
  <carousel :mouse-drag="true" :perPageCustom="[[1, 1], [1199, 3]]">
    <slide v-for="n in 10" :key="n">
      <img width=200px; height=200px; src="https://www.gettyimages.com/gi-resources/images/CreativeLandingPage/HP_Sept_24_2018/CR3_GettyImages-159018836.jpg"/>
    </slide>
  </carousel>
</template>


<script>
import { Carousel, Slide } from 'vue-carousel';
export default { 
components: { Carousel, Slide }
}
</script>