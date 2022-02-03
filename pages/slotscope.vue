<template>
  <div id="app">
    <div class="list-title">
      Text list
    </div>
    <List :items="listItems">
      <div
        slot-scope="row"
        class="list-item1"
      >
        {{ row.visibleSlotData.text }}
      </div>
    </List>

    <div class="list-separator" />

    <div class="list-title"> Text e icons </div>
    <!-- implementação do componente: -->
    <List :items="listItems">
      <div
        slot-scope="dataFromSlot"
        class="list-item2"
      >
        <p>  {{ dataFromSlot }} </p>
        <p>
          {{ dataFromSlot.visibleSlotData.icon }}
            &nbsp;
          {{ dataFromSlot.visibleSlotData.text }}
        </p>
      </div>
    </List>
    <div class="example">
        <div class="example">
            <p>oi</p>
        </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'App',

  data () {
    return {
      listItems: [
        { text: 'First item', icon: 'fa fa-user' },
        { text: 'Second item', icon: 'fa fa-copy' },
        { text: 'Third item', icon: 'fa fa-cut' }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>

.example:last-child {
    display:none;
}
p{display:block !important;}

.list-item1 {
  height: 50px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 6px 10px -4px rgba(0, 0, 0, 0.15);
  color: #66615b;
}

.list-item2 {

  padding: 20px;
  line-height: 30px;

  display: block;
  align-items: center;
  box-shadow: 0 6px 10px -4px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease-out;
  color: #66615b;
  &:hover {
    transform: translateY(-2px);
    
    background-color: #66615b;
    color: white;
    cursor: pointer;
  }
}
.list-separator {
  margin-top: 50px;
}
.list-title {
  color: #66615b;
  font-size: 18px;
  padding-left: 20px;
  margin-bottom: 10px;
}
</style>
