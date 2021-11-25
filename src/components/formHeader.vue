<template>
 <div id= 'container2'>
    <div>
      <h2> UTME PREP MODE</h2>
    </div>
    <div id = 'examCategory'>
      <div>
        <p @click = 'prepMode()' class= 'MR-17 p_styling'> Prep Mode </p>
      </div>
      <div>
        <p class= 'p_styling'> Exam Mode </p>
      </div>
    </div>
 </div>
</template>

<script>
export default {
  name: 'formHeader',
  methods: {
    prepMode () {
      this.$router.push('/')
    }
  }
}
</script>
<style>
 #container2 {
   width: 100vw;
   display: flex;
   flex-direction: row;
   justify-content: space-around;
 }
 #examCategory {
   display: flex;
   flex-direction: row;
   justify-content: space-around;
 }
 .MR-17 {
   margin-right: 17px;
 }
 .p_styling {
   padding: 10px 30px;
   background: whitesmoke;
   border: 1px solid lightgreen;
   box-shadow: 2px 1px 2px black;
 }
 .p_styling:hover {
   background: lightgreen;
   border: 1px solid black;
   color: white;
   box-shadow: 2px 1px 2px whitesmoke;
   transform: scale(1.2);
   transition: all 1s ease;
 }
 @media (max-width: 600px) {
   #container2 {
     display: flex;
     flex-direction: column;
   }
 }
</style>
