<template>
  <div id="thumbnail"></div>
</template>

<script>
export default {
  name: "thumbnail",
};
</script>

<style lang="scss" scoped>
#thumbnail {
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

//mobile 480px기준
@media screen and (max-width: 768px) {
  #thumbnail {
    border-radius: 0.35rem;
  }
}
</style>
