<template>
  <div>
    <div>
      <span class="count" data-testid="count">{{ multiplierCount }}</span>
    </div>
    <div class="buttons__wrapper">
      <button class="increment" @click="increment">Increments</button>
      <button class="decrement" @click="decrement">Decrements</button>
      <button class="reset" @click="reset">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    multiplier: { type: Number, default: 1 }
  },
  data () {
    return {
      count: 0
    }
  },
  methods: {
    increment () {
      this.count++
    },
    decrement () {
      this.count--
    },
    reset () {
      this.count = 0
    }
  },
  computed: {
    multiplierCount: function () {
      return this.count * this.multiplier
    }
  }
}
</script>
<style lang="scss" scoped>
.buttons__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.count {
  font-size: 4rem;
  font-family: Lobster, arial, helvetica, sans-serif;
  background: #eebbfd;
  padding: 3rem;
  display: block;
  margin-top: 1rem;
}

.increment {
  background-color: #54b0ff;
  color: white;
  font-family: Lobster, arial, helvetica, sans-serif;
  font-size: 1.8rem;
  border: none;
  padding: 1em 3em;
  margin: 2em auto;
  display: block;
  transition: background 0.6s ease-in, transform 0.2s ease-out;
  &:hover {
    background: #d265f2;
    color: black;
    transform: scale(1.2) rotateX(30deg);
  }
}

.decrement {
  background-color: #ff8a54;
  color: white;
  font-family: Lobster, arial, helvetica, sans-serif;
  font-size: 1.8rem;
  border: none;
  padding: 1em 3em;
  margin: 2em auto;
  display: block;
  transition: background 0.6s ease-in, transform 0.2s ease-out;
  &:hover {
    background: #65f288;
    color: black;
    transform: scale(1.2) rotateX(30deg);
  }
}

.reset {
  background-color: #ff5454;
  color: white;
  font-family: Lobster, arial, helvetica, sans-serif;
  font-size: 1.8rem;
  border: none;
  padding: 1em 3em;
  margin: 2em auto;
  display: block;
  transition: background 0.6s ease-in, transform 0.2s ease-out;
  &:hover {
    background: #d8f265;
    color: black;
    transform: scale(1.2) rotateX(30deg);
  }
}
</style>
