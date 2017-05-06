<template>
  <div>
    <button class="add">Click me</button>
    <div>Generates a Random Number: {{rand$}}</div>
    <div>Another: {{another$}}</div>
    <input type="text"> {{output$}}
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { FromEvent } from 'vue-rx-decorator'

const rand = subject => subject.map(() => Math.random())
const output = subject => subject.map(event => event.target.value)

@Component({})
export default class extends Vue {
  @FromEvent('.add', 'click', rand) rand$
  @FromEvent('.add', 'click', rand) another$
  @FromEvent('input', 'input', output) output$
}
</script>