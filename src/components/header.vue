<template>
 <div id="header-container">
 <div class="progress">
  <div id='Header-content'>
    <h2>EXAM PREP</h2>
  </div>
  <div class="calculator">
   <div @click = 'toggleClass()' class='calc-cont'>
    <span>Calculator</span>
    <i class="fas fa-calculator icon MR-40"></i>
   </div>
   <div>
    <button @click = 'restartExam()' class ='restart_btn'> Restart </button>
    <button @click = 'retakeExam()' class ='restart_btn bg-light'>Retake Exam </button>
   </div>
 </div>
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
  #header-container {
    width: 100vw;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 1.5px 5px #004823;
  }
  .progress{
    width: 90%;
    height: 10%;
    color: beige;
    font-size: 19px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
  .calculator{
    flex: 1;
    margin: 15px 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .calc-cont {
    padding: 10px 20px;
    background: #ffffff;
    border-radius: 20px;
    box-shadow: 1px 1px 3px #004823;
    color: #004823;
    font-weight: 600;
  }
  #Header-content {
    flex: 1;
    text-align: left;
  }
  h2{
    font-family: PT Sans;
    font-style: normal;
    font-weight: 700;
    font-size: 27.63px;
    color: #015225;
    margin-left: 6px;
    margin-right: 20px;
  }
  .icon {
    color: #015225;
    margin: auto;
    margin-left: 10px;
  }
  .MR-40 {
    margin-right: 40px;
  }
  .restart_btn {
    font-size: 18px;
    font-weight: 600;
    padding: 10px 30px;
    border: solid 1px #015225;
    background: inherit;
    margin-right: 20px;
    border-radius: 7px;
  }
  .bg-light {
    background: #DAF5E6;
    border: none;
  }
@media screen and (max-width: 1200px) {
    #Header-content {
      flex: 0.6;
    }
    .calculator {
      flex: 1.4;
    }
}
@media screen and (max-width: 800px) {
    #Header-content {
      flex: 0.45;
    }
    .calculator {
      flex: 1.55;
    }
    .calc-cont {
      padding: 5px 10px;
    }
    .restart_btn {
    font-size: 17px;
    font-weight: 600;
    padding: 8px 15px;  }
    h2 {
      font-size: 21px;
    }
}
@media screen and (max-width: 760px) {
    h2 {
      font-size: 18px
    }
}
@media screen and (max-width: 640px) {
   .progress {
     width: 97%;
     display: flex;
     flex-direction: column;
    }
    h2 {
      font-size: 25px;
      margin-top: 10px;
    }
    .calculator {
      width: 90%;
    }
   .restart_btn {
     font-size: 16px;
    }
 }
@media screen and (max-width: 420px) {
    h2 {
      font-size: 20px;
      margin-top: 10px;
    }
    .calculator {
      width: 100%;
    }
   .restart_btn {
     font-size: 12px;
    }
   .calc-cont {
     margin-left: 2px;
     font-size: 12px;
    }
 }
</style>
