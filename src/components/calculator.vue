<template>
 <main id="calculator">
    <div id="calculator_display"></div>
    <div id="calculator_keys">
      <button data-number ="+" class="keys" data-action ="add">+</button>
      <button data-number ="-" class="keys" data-action ="subtract">-</button>
      <button data-number ="*" class="keys" data-action ="multiply">&times;</button>
      <button data-number ="/" class="keys" data-action ="divide">&divide;</button>
      <button data-number ="7" class="keys">7</button>
      <button data-number ="8" class="keys">8</button>
      <button data-number ="9" class="keys">9</button>
      <button data-number ="4" class="keys">4</button>
      <button data-number ="5" class="keys">5</button>
      <button data-number ="6" class="keys">6</button>
      <button data-number ="1" class="keys">1</button>
      <button data-number ="2" class="keys">2</button>
      <button data-number ="3" class="keys">3</button>
      <button data-number ="0" class="keys">0</button>
      <button data-number ="." class="keys" data-action="decimal">.</button>
      <button class="keys" id="clear" data-action="clear">AC</button>
      <button id="calculate" class="keys, equal" data-action="calculate">=</button>
    </div>
</main>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'calculator',
  mounted: function () {
    $('#calculator_display').keypress(function (e) {
      //  if the letter is not digit then display error and don't type anything
      if (e.which !== 8 && e.which !== 0 && (e.which < 48 || e.which > 57)) {
        //  display error message
        return false
      }
    })
    $('[data-number]').on('click', function () {
      if ($('#calculator_display').val().length < 21) {
        var number = $('#calculator_display').val() + $(this).data('number')
        $('#calculator_display').append(number)
      }
    })

    //  AC button
    $('#clear').on('click', function () {
      $('#calculator_display').text('')
    })

    //  Calculating the answer
    $('#calculate').on('click', function () {
      const answer = eval($('#calculator_display').text())
      if (console.error()) {
        $('#calculator_display').text('put in the right values')
      } else {
        $('#calculator_display').text(answer)
      }
    })
  }
}
</script>

<style scoped>
#calculator{
  width: 400px;
  height: 500px;
  margin: auto;
  background: #333;
}
#calculator_display {
  width: 100%;
  height: 55px;
  background: rgba(43, 42, 42, 0.829);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: rgb(248, 252, 255);
  font-size: 20px;
  text-align: center;
  margin: auto;
}
#calculator_keys{
  width: 300px;
  display: grid;
  grid-template-columns: repeat(4, 100px);
}
.keys {
  height: 50px;
  font-size: 20px;
  outline: none;
  border: 1px solid aliceblue;
}
.equal{
  grid-row-start: 2;
  grid-row-end: 6;
  grid-column-start: 4;
  background-color: rgba(241, 168, 33, 0.795);
  border: none;
  font-size: 24px;
}
</style>
