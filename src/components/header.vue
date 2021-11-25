<template>
 <div class="progress">
  <div>
    <h2>EXAM PREP</h2>
  </div>
  <div class="calculator">
    <i @click = 'toggleClass()' class="fas fa-calculator fa-2x  MR-40"></i>
    <button @click = 'restartExam()' class ='restart_btn'> Restart </button>
 <button @click = 'retakeExam()' class ='restart_btn'>Retake Exam </button>
 </div>
 </div>
</template>

<script>
export default {
  name: 'header',
  props: {
  },
  data () {
    return {
    }
  },
  methods: {
    toggleClass () {
      this.$emit('toggleCalcClass', true)
    },
    restartExam () {
      window.location.reload()
    },
    retakeExam () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
  .progress{
    width: 100vw;
    color: beige;
    font-size: 19px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.calculator{
  margin: 15px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
h2{
  margin-left: 6px;
  margin-right: 20px;
}
.MR-40 {
  margin-right: 40px;
}
.restart_btn {
  font-size: 18px;
  padding: 10px 30px;
  border: none;
  margin-right: 30px;
}
@media screen and (max-width: 600px) {
   .progress {
     display: flex;
     flex-direction: column;
   }
   .restart_btn {
     font-size: 17px;
   }
 }
</style>
