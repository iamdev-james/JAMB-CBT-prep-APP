<template id="template">
 <div id="container">
  <div id="main" class="home">
    <formHeader />
  <div id='form-container'>
    <h2>Welcome to UTME Prep</h2>
    <p><i>Prepare for JAMB HERE AND GO ON TO get excellent grades in all your Subject</i></p>
    <h4>Fill the form below to commence</h4>
    <form @submit.prevent="submit">
      <h5>Your name here:</h5>
      <input type="text" id="name" v-model="username" placeholder="   Enter name" required>
    <div class = 'MT-18' id="selection-container">
      <p>Please select your three relevant subject </p>
   <select @click = 'normal()' id="sub-2" v-model="one">
     <option name="default" value='notPicked'>select</option>
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
    <option name="default" value = 'notPicked'>select</option>
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
     <option name="default" value = 'notPicked'>select</option>
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
  font-family: 'Comic Neue', cursive;
  background-image: url('../assets/jambShowcase.jpg');
  background-repeat: no-repeat;
  background-position: center 25%;
}
#main{
  font-size: 19px;
  background: radial-gradient(104.5% 1065.69% at -1.75% 3.76%, rgba(1, 82, 37, 0.53) 0%, #004823 0.01%, #02642B 0.02%, #004823 0.03%, rgba(0, 72, 35, 0.74) 1.52%, rgba(0, 72, 35, 0.750521) 14.69%, rgba(0, 73, 35, 0.757496) 23.42%, rgba(0, 74, 35, 0.73) 52.67%, rgba(0, 75, 36, 0.797516) 73.53%, rgba(0, 75, 36, 0.802808) 80.16%, rgba(0, 75, 36, 0.81065) 89.98%, rgba(0, 75, 36, 0.814873) 95.26%, #015426 100%);
  background-blend-mode: color-dodge;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  word-wrap: break-word;
}
h2 {
  color: #ffffff;
}
#form-container {
  background: #004823;
  padding: 35px;
  color: white;
  opacity: 0.8;
  margin-bottom: 16px;
  border-radius: 55px;
  height: 60%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
input#name{
  font-size: 17px;
  background: white;
  height: 2.5rem;
  width: 20rem;
  border: solid 1px rgb(51, 223, 51);
  outline-color: rgb(51, 223, 51);
}
.MT-18 {
  margin-top: 18px;
}
select{
  height: 3rem;
  width: 213.38px;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 4px;
  margin-right: 6px;
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
