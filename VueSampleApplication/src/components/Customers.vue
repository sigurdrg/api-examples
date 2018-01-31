<template lang="pug">
#customers(v-if="data")
  md-card
    md-card-media-cover
      md-card-media(md-ratio="16:9")
        img(src="@/assets/img/sbanken.jpg" alt="Background")
      md-card-area
        md-avatar.md-avatar.md-large
          img(src="@/assets/img/face.jpg" alt="Face")
  md-content.md-transparent
    span.md-headline {{ data.firstName }} {{ data.lastName }}
    span.md-caption
      md-icon email
      | {{ data.emailAddress }}
</template>

<script>
export default {
  name: 'Customers',
  computed: {
    data () {
      return this.$store.getters['Customers/data']
    }
  }
}
</script>

<style lang="scss" scoped>
#customers {
  .md-card {
    overflow: unset;

    .md-avatar {
      $size: 100px;
      min-width: $size;
      min-height: $size;
      border-radius: $size;
      margin-bottom: -50px;
      border: 3px solid #fafafa;
    }
  }

  .md-content {
    padding: 75px 0 50px;
    background: none;
    text-align: center;

    span {
      display: block;
    }

    .md-icon {
      $size: 30px;
      width: $size;
      min-width: $size;
      height: $size;
      font-size: 16px !important;
    }
  }
}
</style>
