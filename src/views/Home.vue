<template id="template">
 <div id="container">
  <div id="main" class="home">
    <formHeader />
      <img :src="require('@/assets/jambShowcase.jpg')" id= 'showcaseImg' alt="UTME_showcase">
    <h3>Welcome, fill in the form below to commence</h3>
    <form @submit.prevent="submit">
      <label for="name">Name: </label>
      <input type="text" id="name" v-model="username" placeholder="   Enter name" required>
    <div class = 'MT-18' id="selection-container">
      <p>Please select your three relevant subject </p>
   <select @click = 'normal()' id="sub-2" v-model="one">
     <option name="default" value='notPicked'>select >>></option>
     <option name="b" id="" value="Mathematics">Mathematics</option>
     <option name="c" id="" value="Physics">Physics</option>
     <option name="d" id="" value="Biology">Biology</option>
     <option name="e" id="" value="Chemistry">Chemistry</option>
     <option name="g" id="" value="Economics">Economics</option>
     <option name="g" id="" value="Accounting">Accounting</option>
     <option name="g" id="" value="Literature">Literature</option>
     <option name="g" id="" value="Geography">Geography</option>
     <option name="g" id="" value="Insurance">Insurance</option>
     <option name="g" id="" value="Civic">Civic</option>
     <option name="g" id="" value="History">History</option>
     <option name="g" id="" value="CurrentAffairs">Current Affairs</option>
     <option name="g" id="" value="Government">Government</option>
     <option name="g" id="" value="ChristianStudies">Christian Religious Studies</option>
     <option name="g" id="" value="IslamicStudies">Islamic Religious Studies</option>
     <option name="g" id="" value="Commerce">Commerce</option>
   </select>
   <select @click = 'normal()' id="sub-3" v-model="two">
    <option name="default" value = 'notPicked'>select >>></option>
     <option name="b" id="" value="Mathematics">Mathematics</option>
     <option name="c" id="" value="Physics">Physics</option>
     <option name="d" id="" value="Biology">Biology</option>
     <option name="e" id="" value="Chemistry">Chemistry</option>
     <option name="g" id="" value="Economics">Economics</option>
     <option name="g" id="" value="Accounting">Accounting</option>
     <option name="g" id="" value="Literature">Literature</option>
     <option name="g" id="" value="Geography">Geography</option>
     <option name="g" id="" value="Insurance">Insurance</option>
     <option name="g" id="" value="Civic">Civic</option>
     <option name="g" id="" value="History">History</option>
     <option name="g" id="" value="CurrentAffairs">Current Affairs</option>
     <option name="g" id="" value="Government">Government</option>
     <option name="g" id="" value="ChristianStudies">Christian Religious Studies</option>
     <option name="g" id="" value="IslamicStudies">Islamic Religious Studies</option>
     <option name="g" id="" value="Commerce">Commerce</option>
   </select>
   <select @click = 'normal()' id="sub-4" v-model="three">
     <option name="default" value = 'notPicked'>select >>></option>
     <option name="b" id="" value="Mathematics">Mathematics</option>
     <option name="c" id="" value="Physics">Physics</option>
     <option name="d" id="" value="Biology">Biology</option>
     <option name="e" id="" value="Chemistry">Chemistry</option>
     <option name="g" id="" value="Economics">Economics</option>
     <option name="g" id="" value="Accounting">Accounting</option>
     <option name="g" id="" value="Literature">Literature</option>
     <option name="g" id="" value="Geography">Geography</option>
     <option name="g" id="" value="Insurance">Insurance</option>
     <option name="g" id="" value="Civic">Civic</option>
     <option name="g" id="" value="History">History</option>
     <option name="g" id="" value="CurrentAffairs">Current Affairs</option>
     <option name="g" id="" value="Government">Government</option>
     <option name="g" id="" value="ChristianStudies">Christian Religious Studies</option>
     <option name="g" id="" value="IslamicStudies">Islamic Religious Studies</option>
     <option name="g" id="" value="Commerce">Commerce</option>
   </select>
    </div>
   <div id="btn-container">
    <button type="submit" id="start" class="btn" @click="validateInput()">Start -></button>
    <p v-show = 'invalidInput' class= 'textError'>Please fill in the appropiate values</p>
   </div>
   </form>
  </div>
 </div>
</template>

<script>
import formHeader from '../components/formHeader.vue'
export default {
  name: 'App',
  components: {
    formHeader
  },
  data () {
    return {
      username: '',
      one: 'notPicked',
      two: 'notPicked',
      three: 'notPicked',
      four: 'English',
      invalidInput: false
    }
  },
  methods: {
    startExam () {
      this.$router.push(
        {
          name: 'mock_examination',
          query: {
            username: this.username,
            subject_1: this.one,
            subject_2: this.two,
            subject_3: this.three,
            subject_4: this.four
          }
        })
    },
    validateInput () {
      if (this.one && this.two && this.three !== 'notPicked') {
        this.startExam()
      } else {
        this.invalidInput = true
      }
    },
    normal () {
      this.invalidInput = false
    }
  }
}
</script>

<style scoped>
#container{
  overflow: hidden;
}
#showcaseImg {
  height: 130px;
  width: 270px;
}
#main{
  font-size: 19px;
  background: rgba(90, 245, 90, 0.762);
  background-blend-mode: color-dodge;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  word-wrap: break-word;
}
input#name{
  font-size: 17px;
  background: transparent;
  height: 2rem;
  width: 12rem;
  outline-color: rgb(51, 223, 51);
  border: none;
  border-bottom:solid 1px rgb(16, 156, 91);
}
.MT-18 {
  margin-top: 18px;
}
select{
  height: 2rem;
  margin: 4px 9px;
  font-size: 20px;
  border:solid 1px rgb(16, 156, 91);
  border-radius: 10px;
  outline-color: rgb(51, 223, 51);
}
#btn-container{
  margin-top: 4rem;
}
.btn{
  padding: 10px 25px;
  font-size: 18px;
  font-style: italic;
  font-weight: 600;
  outline: none;
  border: solid 1px rgb(16, 156, 91);
  border-top-right-radius: 30%;
  border-bottom-left-radius: 30%;
  transition: all 2s ease-out;
}
.btn:hover{
  font-size: 19px;
  color: aliceblue;
  background: rgb(16, 156, 91);
}
.textError {
  color: red;
}
</style>
