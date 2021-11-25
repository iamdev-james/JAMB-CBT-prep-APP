<template>
<main id="main">
    <Header @toggleCalcClass = 'changeCalcClass($event)'/>
  <div>
    <div>
      <h3>Hey {{ user_name }}</h3>
    </div>
    <div id="subject_predisplay">
      <h4 @click="select_subject_1 = true, select_subject_2 = false, select_subject_3 = false, select_subject_4 = false">{{ subject_1 }}</h4>
      <h4 @click="select_subject_2 = true,  select_subject_1 = false, select_subject_3 = false, select_subject_4 = false">{{ subject_2 }}</h4>
      <h4 @click="select_subject_3 = true,  select_subject_1 = false, select_subject_2 = false, select_subject_4 = false">{{ subject_3 }}</h4>
      <h4 @click="select_subject_4 = true,  select_subject_1 = false, select_subject_2 = false, select_subject_3 = false">{{ subject_4 }}</h4>
    </div>
    <div class= 'displayCalculator'>
      <Calculator v-if="showCalculator"/>
      <i v-show = 'showCalculator' @click = 'closeCalculator()' class="far fa-times-circle fa-3x MT--50"></i>
    </div>
    <p v-if = '!connectionStatus' class= 'textDanger'>Something went wrong please check your internet connection </p>
   <div v-else class="component_styling">
    <keep-alive>
    <component v-bind:is="subject_1" v-if="select_subject_1" />
   </keep-alive>
   <keep-alive>
    <component v-bind:is="subject_2" v-if="select_subject_2" />
   </keep-alive>
   <keep-alive>
    <component v-bind:is="subject_3" v-if="select_subject_3" />
   </keep-alive>
   <keep-alive>
    <component v-bind:is="subject_4" v-if="select_subject_4" />
   </keep-alive>
   </div>
  </div>
 </main>
</template>

<script>
import Header from '../components/header.vue'
import Calculator from '../components/calculator.vue'
import Physics from '../components/physics.vue'
import Mathematics from '../components/math.vue'
import English from '../components/english.vue'
import Chemistry from '../components/chemistry.vue'
import Commerce from '../components/commerce.vue'
import Accounting from '../components/accounting.vue'
import Biology from '../components/biology.vue'
import Literature from '../components/lit_in_eng.vue'
import Geography from '../components/geography.vue'
import Economics from '../components/economics.vue'
import Insurance from '../components/insurance.vue'
import Civic from '../components/civicedu.vue'
import CurrentAffairs from '../components/currentAffairs.vue'
import History from '../components/history.vue'
import Government from '../components/government.vue'
import ChristianStudies from '../components/crk.vue'
import IslamicStudies from '../components/irk.vue'
export default {
  name: 'Exam',
  components: {
    Header, Calculator, Physics, Mathematics, English, Chemistry, Commerce, Accounting, Biology, Literature, Geography, Economics, Insurance, Civic, CurrentAffairs, History, Government, ChristianStudies, IslamicStudies
  },
  data () {
    return {
      user_name: this.$route.query.username,
      subject_1: this.$route.query.subject_1,
      subject_2: this.$route.query.subject_2,
      subject_3: this.$route.query.subject_3,
      subject_4: this.$route.query.subject_4,
      select_subject_1: false,
      select_subject_2: false,
      select_subject_3: false,
      select_subject_4: true,
      showCalculator: false,
      connectionStatus: null
    }
  },
  methods: {
    changeCalcClass (emittedStatus) {
      this.showCalculator = emittedStatus
    },
    closeCalculator () {
      this.showCalculator = false
    }
  },
  mounted: function () {
    if (navigator.onLine) {
      this.connectionStatus = true
    } else {
      this.connectionStatus = false
    }
  }
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#main{
  height: 100vh;
  font-family: 'Dosis', sans-serif;
  font-size: 19px;
  background: #575652;
  color: #fcba05;
  overflow-x: hidden;
}
.component_styling{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  background: rgb(105, 82, 53);
}
.flw{
  font-kerning: unset;
}
#subject_predisplay{
  padding: 5px 15px;
  background: rgb(4, 134, 134);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  cursor: pointer;
}
.displayCalculator {
  position: fixed;
  z-index: 10;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
}
/* Utility class */
.MT--50 {
  margin-top: -7rem;
}
.textDanger {
  color: red;
  font-size: 22px;
  font-weight: 700;
  background: whitesmoke;
  padding: 20px auto;
}
</style>
