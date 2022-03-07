<template>
  <div id="main">
    <div class="question_box">
      <h1>Christian Religious Studies</h1>
      <div v-if="questions.length">
       <div id= "counter" class="MT-10 MR-5">{{ index + 1 }} / 40</div>
        <h3 id="question" v-html="questions[index].question"></h3>
        <i><h5 class = 'MB-25' v-text="questions[index].section"></h5></i>
        <ul id="answer_block">
        <li
          v-for="(answer, index_2) in answers"
          :key="index_2"
          id="answer"
          @click="selectedIndex(index_2)"
          :class= "answerClass(index_2)"
        >
          {{ answer }}
        </li>
        </ul>
        <button
          @click="submit()"
          id="nxt-btn"
          :disabled="selectedAnswer === null || answered"
        >
          Submit
        </button>
        <button @click="next()" :disabled="selectedAnswer === null || index === 39" id="nxt-btn">
          Next
        </button>
      </div>
      <div v-else>
      <div>please wait while we fetch your questions</div>
      <i class="fas fa-spinner fa-2x fa-spin MT-30"></i>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'crk',
  data () {
    return {
      questions: [],
      index: 0,
      answered: false,
      selectedAnswer: null
    }
  },
  methods: {
    selectedIndex (value) {
      this.selectedAnswer = value
    },
    next () {
      this.index++
      this.selectedAnswer = null
      this.answered = false
    },
    submit () {
      this.answered = true
    },
    answerClass (indexParam) {
      let answerClass = ''
      if (!this.answered && this.selectedAnswer === indexParam) {
        answerClass = 'selected'
      } else if (
        this.answered &&
        this.questions[this.index].answer === indexParam
      ) {
        answerClass = 'correct'
      } else if (
        this.answered &&
        this.selectedAnswer === indexParam &&
        this.selectedAnswer !== this.questions[this.index].answer
      ) {
        answerClass = 'incorrect'
      }
      return answerClass
    }
  },
  computed: {
    answers () {
      const answers = this.questions[this.index].option
      return answers
    }
  },
  mounted: function () {
    const headers = {
      method: 'GET',
      'Content-Type': 'application/json',
      AccessToken: 'ALOC-72d6ec289a578cace8c3'
    }
    fetch('https://questions.aloc.com.ng/api/v2/q/40?subject=crk', { headers })
      .then(response => {
        return response.json()
      })
      .then(jsonData => {
        this.questions = jsonData.data
      })
  }
}
</script>
<style scoped>
#main {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.question_box {
  position: relative;
  width: 70vw;
  align-self: center;
  justify-self: center;
  padding: 10px 30px;
}
#counter {
  position: absolute;
  top: 0px;
  right: 0px;
  color: whitesmoke;
}
#question {
  margin: 12px auto;
}
.MB-25 {
  margin-bottom: 25px;
}
.MB-40 {
  margin-bottom: 40px;
}
.MT-30 {
  margin-top: 30px;
}
.MR-5 {
  margin-right: 5px;
}
.MT-10 {
  margin-right: 10px;
}
#answer_block {
  margin: auto;
  margin-bottom: 23px;
  text-align: center;
  list-style: none;
  width: 60vw;
  padding-left: 0px;
  background: whitesmoke;
  border: none;
  border-bottom: rgb(175, 27, 101);
  box-shadow: 1px 1px 2px black;
}
#answer {
  height: 100%;
  font-size: 23px;
  font-weight: 650;
  margin: auto;
  padding: 10px 15px;
  border: none;
  outline: none;
  border-bottom: 1px solid #333;
  box-shadow: 1px 1px 2px #333;
}
#answer:hover {
  background: orange;
  color: aliceblue;
}
.selected {
  background-color: #fcba05;
  color: black;
  border: 1px solid blue;
}
.correct {
  background: lightgreen;
  color: green;
  transform:scale(1.03)
}
.incorrect {
  background: rgb(99, 7, 7);
  color: rgb(255, 251, 251);
  transform:scale(1.03)
}
#nxt-btn {
  font-size: 19px;
  padding: 10px 25px;
  border: none;
  margin-right: 10px;
  outline: none;
  color: aliceblue;
  background: rgb(4, 134, 134);
  border-radius: 8px;
  transition: all 1s ease;
}
</style>
