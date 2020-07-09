<template>
  <body class="has-navbar-fixed-top">
    <section class="hero is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="columns">
          <div class="column outer">
            <main class="card" id="app">
              <!--    Card body    -->
              <div class="card-content">
                <h3 class="title has-text-weight-normal"> {{ metric }} converter</h3>
                <div class="columns">
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
                            <option v-for="unit in compute_from" :value="unit" :key="unit"> {{ unit }} </option>
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
                            <option v-for="unit in compute_to" :value="unit" :key="unit"> {{ unit }} </option>
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
                      <span v-if="compute_authors"> Author: {{ author }}</span>
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
                            <option v-for="metric in compute_metrics" :value="metric" :key="metric"> {{ metric }} </option>
                          </select>
                        </div>

                      </div>
                      <div class="column is-4">
                        <div v-if="authors_arr">
                          <div class="select is-dark">
                            <select class="" v-model="author">Author
                              <option v-for="author in compute_authors" :value="author" :key="author"> {{ author }} </option>
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
      </div>

    </section>
  </body>
</template>

<script>
  import Card from '~/components/Card'
  import {old} from '~/static/data.js';

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
        sync_lock: false,
      }
    },
    methods: {
      // populates the metrics array
      populate_metrics: function () {
        return this.metrics_arr = Object.keys(old[this.system][this.author]);
      },
      // populates the authors array
      populate_authors: function () {
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
      populate_from: function () {
        if (this.metric === 'weight') {
          this.from = 'gram'
          return this.from_arr = ['gram', 'kilogram']
        } else if (this.metric === 'length') {
          this.from = 'metre'
          return this.from_arr = ['centimetre', 'metre']
        } else if (this.metric === 'time') {
          this.from = 'second'
          return this.from_arr = ['second', 'minute', 'hour', 'day', 'month', 'year']
        } else if (this.metric === 'volume') {
          this.from = 'litre'
          return this.from_arr = ['millilitre', 'litre']
        }
      },
      //populates the to array
      populate_to: function () {
        this.to = Object.keys(old[this.system][this.author][this.metric])[0];
        return this.to_arr = Object.keys(old[this.system][this.author][this.metric]);
      },
      //calculates the converted value
      convert: function (value, bool) {
        let switch_from = this.from;
        let switch_to = this.to;
        if (bool) {
          [switch_from, switch_to] = [switch_to, switch_from]
        }
        let temp_from = old[this.system][this.author][this.metric][switch_from];
        let temp_to = old[this.system][this.author][this.metric][switch_to];
        console.log(old[this.system][this.author][this.metric], switch_from)
        return value * temp_from / temp_to;
      },
      //resets the input/output values
      clear: function () {
        this.in_value = 1;
        this.out_value = 8;
        this.author = 'api';
      },
    },
    //computes the required option fields
    computed: {
      compute_metrics: function () {
        return this.populate_metrics()
      },
      compute_authors: function () {
        this.clear();
        return this.populate_authors();
      },
      compute_from: function () {
        return this.populate_from()
      },
      compute_to: function () {
        return this.populate_to()
      }
    },
    // watches for user input 
    watch: {
      system: function () {
        this.clear();
        this.populate_metrics();
      },
      in_value: function () {
        if (!this.sync_lock) {
          this.out_value = this.convert(this.in_value, false)
        }
        this.sync_lock = !this.sync_lock
      },
      from: function () {
        if (!this.sync_lock) {
          this.out_value = this.convert(this.in_value, false)
        }
        this.sync_lock = !this.sync_lock
      },
      out_value: function () {
        if (!this.sync_lock) {
          this.in_value = this.convert(this.out_value, true)
        }
        this.sync_lock = !this.sync_lock
      },
      to: function () {
        if (!this.sync_lock) {
          this.in_value = this.convert(this.out_value, true)
        }
        this.sync_lock = !this.sync_lock
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

  .columns {
    margin-right: 0;
    margin-left: 0;
  }

  .is-family-monospace {
    font-family: 'Roboto Mono'
  }

  .hero-body {
    justify-content: center;
  }

  @media screen and (max-width: 992px) {
    .hero-body {
      padding-right: 0;
      padding-left: 0;
    }

    .outer {
      padding-right: 0;
      padding-left: 0;
    }
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
