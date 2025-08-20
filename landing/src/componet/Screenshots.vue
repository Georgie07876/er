<template>
  <section class="screenshots">
    <div ref="gallery" class="gallery">
      <a v-for="(src, i) in images" :key="i" :href="src" class="gallery-item">
        <img :src="src" :alt="'Скриншот ' + (i+1)" />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import lightGallery from "lightgallery";

// Плагины
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

const gallery = ref<HTMLElement | null>(null);
let galleryInstance: any = null;

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
];

onMounted(() => {
  if (gallery.value) {
    galleryInstance = lightGallery(gallery.value, {
      plugins: [lgZoom, lgThumbnail],
      speed: 400,
      licenseKey: "0000-0000-000-0000", // бесплатный ключ
    });
  }
});

onBeforeUnmount(() => {
  if (galleryInstance) {
    galleryInstance.destroy();
    galleryInstance = null;
  }
});
</script>

<style scoped>
.screenshots {
  padding-top: 20px;
  text-align: center;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
}

.gallery-item {
  flex: 1 1 250px; 
  max-width: 210px;
  border-radius: 8px;
  overflow: hidden;
}

.gallery-item img {
  width: 100%;
  height: 180px; 
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.gallery-item img:hover {
  transform: scale(1.05);
}
</style>

<style>
@import "lightgallery/css/lightgallery.css";
@import "lightgallery/css/lg-zoom.css";
@import "lightgallery/css/lg-thumbnail.css";
</style>
