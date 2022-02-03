<template>
  <li class="nav-list-item">
    <div class="list-item-start">
      <span class="icon"><i class="fas fa-home" /></span>
    </div>
    <div class="list-item-content">
      <span>{{ text }}</span>
    </div>
    <div class="list-item-end">
      <span class="icon"><i class="fas fa-angle-down" /></span>
    </div>
  </li>
</template>

<script>
export default {

  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="postcss" scoped>
 .nav-list-item {
        display: flex;
        align-items: center;
        transition: background 75ms linear;
        padding: 10px 16px;
        font-size: 0.875rem;
        line-height: 1.25rem;
      }
      .nav-list-item:hover {
        background-color: rgba(0, 0, 0, 0.1);
        color: #000;
      }
      .nav-dark .nav-list-item:hover {
        background-color: rgba(255, 255, 255, 0.1);
        color: #fff;
      }
      .list-item-content {
        flex-grow: 1;
        margin: 0 0.5rem;
        max-width: 100%;
        overflow: hidden;
      }
      .list-item-start {
        flex-shrink: 1;
      }
      .list-item-end {
        flex-shrink: 1;
      }
     
</style>
