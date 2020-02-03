<template>
  <div>
    <section class="hero is-fullheight">

      <div class="hero-body">
        <div class="columns">
          <div class="column">
            <main class="card" id="app">
              <!--    Card body    -->
              <div class="card-content">
                <h3 class="title has-text-weight-normal"> {{ metric }} converter</h3>
                <div class="columns ">
                  <!--    Card left pane    -->
                  <div class="column is-half">
                    <h1 class="is-size-3 is-family-monospace">{{ in_value }} {{ from }} is equivalent to {{ out_value }}
                      {{ to }}.</h1>

                  </div>

                  <!--    Card right pane    -->
                  <div class="column is-half">
                    <!--    Convert from    -->
                    <div class="field has-addons">
                      <div class="control">
                        <input type="text" v-model="in_value" placeholder="Convert from" class="input is-dark">
                      </div>
                      <div class="control">
                        <div class="select is-dark">
                          <select v-model="from">Units
                            <option v-for="unit in frominator" :value="unit" :key="unit"> {{ unit }} </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <!--    Convert to    -->
                    <div class="field has-addons">
                      <div class="control">
                        <input type="text" v-model="out_value" placeholder="Convert to" class="input is-dark">
                      </div>
                      <div class="control">
                        <div class="select is-dark">
                          <select class="" v-model="to">Units
                            <option v-for="unit in tonator" :value="unit" :key="unit"> {{ unit }} </option>
                          </select>
                        </div>

                      </div>
                    </div>


                    <!--    End options    -->
                  </div>
                  <!--    End right pane    -->
                </div>
                <div class="columns">
                  <div class="column is-half">
                    <h5 class="subtitle has-text-grey is-size-5"> Using the {{ system }} system,
                      <span v-if="authory"> Author: {{ author }}</span>
                      <span v-else>, No author available</span>
                    </h5>
                  </div>

                  <div class="column is-half">
                    <!--    Options    -->
                    <div class="columns">
                      <div class="column is-4">
                        <div class="select is-dark">
                          <select class="" v-model="system">System
                            <option v-for="system in systems_arr" :value="system" :key="system"> {{ system }} </option>
                          </select>
                        </div>

                      </div>
                      <div class="column is-4">
                        <div class="select is-dark">
                          <select class="" v-model="metric">Metric
                            <option v-for="metric in metricator" :value="metric" :key="metric"> {{ metric }} </option>
                          </select>
                        </div>

                      </div>
                      <div class="column is-4">
                        <div v-if="authors_arr">
                          <div class="select is-dark">
                            <select class="" v-model="author">Author
                              <option v-for="author in authory" :value="author" :key="author"> {{ author }} </option>
                            </select>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <h1 class="is-family-monospace has-text-centered is-size-3 pad-top">OR</h1>
        <h3 class="is-family-monospace has-text-centered">talk to the bot</h3>
        <p class="is-family-monospace has-text-centered">&darr;</p>
      </div>

    </section>
    <div class="hero is-fullheight">
      <div class="hero-body">
        <div class="card">
          <iframe class="bot" allow="microphone;"
            src="https://console.dialogflow.com/api-client/demo/embedded/2856095e-0eca-4e22-ab64-d6e12cd1bded"></iframe>
        </div>
        <h6 class="is-family-monospace is-size-6 pad-top-s has-text-grey">Hint: Try saying "how many grams is 1 ratti?"</h6>
      </div>
    </div>
  </div>
</template>

<script>
  import Card from '~/components/Card'
  import * as data from '~/static/data.json';


  export default {

    components: {
      Card
    },

    data() {
      return {
        metric: 'weight',
        system: 'ayurveda',
        systems_arr: ['ayurveda', 'unani', 'siddha'],
        author: 'api',
        from: 'weight',
        to: '',
        in_value: 1,
        out_value: 8,
        to_arr: [],
        flag: false,
      }
    },
    methods: {
      //populates the metrics array
      fun_metricator: function () {
        return this.metrics_arr = Object.keys(data.default[this.system][this.author]);
      },
      //populates the authors array
      fun_authory: function () {
        if (this.system === 'ayurveda') {
          this.author = 'api';
          if (this.metric === 'weight') {
            return this.authors_arr = ['api', 'sushruta', 'charaka', 'sharangadhara', 'rrs',
              'vaidyaka paribhasha pradeepa'
            ]
          } else if (this.metric === 'length') {
            return this.authors_arr = ['api', 'sushruta']
          } else if (this.metric === 'time') {
            return this.authors_arr = ['api']
          } else return this.authors_arr;
        } else {
          return this.authors_arr = null;
        }
      },
      //populates the from array
      fun_frominator: function () {
        if (this.metric === 'weight') {
          this.from = 'gram'
          return this.from_arr = ['gram', 'kilogram']
        } else if (this.metric === 'length') {
          this.from = 'meter'
          return this.from_arr = ['centimeter', 'meter']
        } else if (this.metric === 'time') {
          this.from = 'second'
          return this.from_arr = ['second', 'minute', 'hour', 'day', 'month', 'year']
        } else if (this.metric === 'volume') {
          this.from = 'litre'
          return this.from_arr = ['millilitre', 'litre']
        }
      },
      //populates the to array
      fun_tonator: function () {
        this.to = Object.keys(data.default[this.system][this.author][this.metric])[0];
        return this.to_arr = Object.keys(data.default[this.system][this.author][this.metric]);
      },
      //calculates the converted value
      convert: function (value, bool) {
        let switch_from = this.from;
        let switch_to = this.to;
        if (bool) {
          [switch_from, switch_to] = [switch_to, switch_from]
        }
        let temp_from = data.default[this.system][this.author][this.metric][switch_from];
        let temp_to = data.default[this.system][this.author][this.metric][switch_to];
        return value * temp_from / temp_to;
      },
      //resets the input/output values
      clear: function () {
        this.in_value = 0;
        this.out_value = 0;
        this.author = 'api';
      }
    },
    //computes the required option fields
    computed: {
      metricator: function () {
        return this.fun_metricator()
      },
      authory: function () {
        this.clear();
        return this.fun_authory();
      },
      frominator: function () {
        return this.fun_frominator()
      },
      tonator: function () {
        return this.fun_tonator()
      }
    },
    //watches for user input 
    watch: {
      system: function () {
        this.clear();
        this.fun_metricator();
      },
      in_value: function () {
        if (!this.flag) {
          this.out_value = this.convert(this.in_value, false)
        }
        this.flag = !this.flag
      },
      from: function () {
        if (!this.flag) {
          this.out_value = this.convert(this.in_value, false)
        }
        this.flag = !this.flag
      },
      out_value: function () {
        if (!this.flag) {
          this.in_value = this.convert(this.out_value, true)
        }
        this.flag = !this.flag
      },
      to: function () {
        if (!this.flag) {
          this.in_value = this.convert(this.out_value, true)
        }
        this.flag = !this.flag
      }
    },
    mounted() {
      this.in_value = 1;
      this.out_value = 8;
    }
  }

</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Oswald|Roboto+Mono&display=swap');

  .title,
  .subtitle {
    font-family: 'Oswald'
  }

  .is-family-monospace {
    font-family: 'Roboto Mono'
  }

  .hero-body {
    justify-content: center;
    flex-direction: column;
  }

  .control,
  .select,
  select {
    width: 100%
  }

  .pad-top {
    margin-top: 3rem;
  }

  .pad-top-s {
    padding-top: 1rem;
  }

  .bot {
    border: none;
    height: 30rem;
    width: 100%;
  }

  .card {
    width: 100%;
  }

</style>
