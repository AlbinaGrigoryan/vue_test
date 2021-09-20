<template>
  <div class="main content">
    <Navigacia :count="count"/>
    <div class="content_payment">
      <h3 class="blue mb20">Оплата</h3>
      <form action="">
        <div class="mb30">
          <label for="cardName" class="blue mb6">Имя на карте</label>
          <input type="text" id="cardName" placeholder="Konstantin Ivanov" class="w100"
                 v-model="cardName"
                 :class="{'error': error}"
          >
        </div>
        <div class="mb20">
          <label for="cardNumber" class="blue mb6">Номер карты</label>
          <input type="text" id="cardNumber" placeholder="XXXX XXXX XXXX XXXX" class="w100"
                 v-model="cardNumber"
                 :class="{'error': error}"
                 v-maska="'#### #### #### ####'"
          >
        </div>
        <div class="dflex data mb30">
          <div class="mr30">
            <label for="data" class="blue bm6">Срок</label>
            <input id="data" type="text" placeholder="MM / YY"
                   v-maska="'##/##'"
                   v-model="data"
                   :class="{'error': error}"
            >
          </div>
          <div>
            <label for="CVV" class="blue bm6">CVV</label>
            <input id="CVV" type="password"
                   v-model="cvv"
                   :class="{'error': error}"
            >
          </div>
        </div>
        <button class="btn" @click="validation" type="button">Продолжить</button>
      </form>
    </div>
  </div>
</template>

<script>
import Navigacia from "@/components/Navigacia";
import router from "@/router";
import {maska} from 'maska'

export default {
  data() {
    return {
      name: "Payment",
      error: false,
      cardName: '',
      cardNumber: '',
      data: '',
      cvv: '',
      count: '2'
    }
  },
  directives: {maska},

  methods: {
    validation() {
      if (!this.cardName || !this.cardNumber || !this.data || !this.cvv) {
        this.error = true
        return false
      } else {
        router.push({name: 'success'})
      }
    }
  },
  components: {
    Navigacia,
  }
}
</script>

<style scoped>

.content {
  background: #FFFFFF;
  box-shadow: 0px 0px 10px #ebf0ff;
  border-radius: 24px;
  width: 401px;
  margin: 150px auto;
  padding: 0 0 60px 0;
}

h3 {
  font-style: normal;
  font-weight: 300;
  font-size: 26px;
}

.content_payment {
  padding: 0 35px;
}

input {
  padding: 10px 15px;
  background: #FFFFFF;
  border: 1px solid #DEDCDC;
  border-radius: 5px;
  color: #979797;
}

label {
  display: block;
}

.btn {
  background: rgba(25, 165, 39, 0.8);
  border-radius: 5px;
  width: 180px;
  height: 45px;
  border: none;
  color: #fff;
}

.error {
  border: 1px solid #FFADAD !important;
}

.data input {
  width: 100px;
}

::placeholder {
  color: #6B6B6B;
  font-size: 16px;
  font-weight: 100;
}
</style>
