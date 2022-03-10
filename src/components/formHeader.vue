<template>
 <main id= 'container'>
 <div id= 'container2'>
    <div class='header-content'>
      <img :src="require('@/assets/jambShowcase.jpg')" id= 'Imglogo' alt="UTME_showcase">
      <h2 class='inline'> UTME PREP MODE</h2>
    </div>
    <div id = 'examCategory'>
      <div>
        <p @click = 'prepMode()' class= 'MR-17 p_styling'> Prep Mode </p>
        <div v-show='prepmode' class='br-bottom'></div>
      </div>
      <div>
        <p class= 'p_styling'> Exam Mode </p>
        <div v-show='!prepmode' class='br-bottom'></div>
      </div>
    </div>
 </div>
 </main>
</template>

<script>
export default {
  name: 'formHeader',
  data () {
    return {
      prepmode: true
    }
  },
  methods: {
    prepMode () {
      this.$router.push('/')
    }
  }
}
</script>
<style>
 #container {
   background: #ffffff;
   width: 100vw;
   height: 10%;
   text-align: center;
 }
 #container2 {
   width: 92%;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
 }
 .header-content {
   flex: 0.8;
   display: flex;
   align-items: center;
 }
 #Imglogo {
   margin-top: 5px;
   margin-left: 5%;
   margin-right: -3.5%;
   height: 60px;
   width: 18%;
 }
 #examCategory {
   display: flex;
   flex-direction: row;
   justify-content: space-around;
 }
 .inline {
   display: inline;
 }
 .MR-17 {
   margin-right: 17px;
 }
 .p_styling {
   padding: 10px 30px;
   font-weight: 600;
   font-size: 20px;
 }
 .p_styling:hover {
   font-size: 22px;
 }
  .br-bottom {
   margin-left: 17%;
   margin-top: -3%;
   height: 5px;
   width: 35%;
   background: green;
   border-radius: 20px;
  }
 @media (max-width: 600px) {
  #container2 {
   width: 99%;
 }
 .header-content {
   flex: 1;
 }
 .inline {
   font-size: 17px;
 }
 #Imglogo {
   margin-top: 2px;
   margin-left: 0.5%;
   height: 50px;
   width: 30%;
 }
 #examCategory {
   flex: 1;
 }
 .MR-17 {
   margin-right: 5px;
 }
 .p_styling {
   font-size: 14px;
   margin-bottom: 5px;
   padding: 2px 5px;
 }
 }
</style>
