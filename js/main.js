import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import 'bootstrap/js/dist/collapse';

import Vue from 'vue';
import * as data from '../data.json';

var app = new Vue({
    el: "#app",
    //data with default values
    data: {
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
    },
    methods: {
        //populates the metrics array
        fun_metricator: function () {
            return this.metrics_arr = Object.keys(data[this.system][this.author]);
        },
        //populates the authors array
        fun_authory: function () {
            if (this.system === 'ayurveda') {
                this.author = 'api';
                if (this.metric === 'weight') {
                    return this.authors_arr = ['api', 'sushruta', 'charaka', 'sharangadhara', 'rrs', 'vaidyaka paribhasha pradeepa']
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
            this.to = Object.keys(data[this.system][this.author][this.metric])[0];
            return this.to_arr = Object.keys(data[this.system][this.author][this.metric]);
        },
        //calculates the converted value
        convert: function (value, bool) {
            let switch_from = this.from;
            let switch_to = this.to;
            if (bool) {
                [switch_from, switch_to] = [switch_to, switch_from]
            }
            let temp_from = data[this.system][this.author][this.metric][switch_from];
            let temp_to = data[this.system][this.author][this.metric][switch_to];
            return value * temp_from / temp_to;
        },
        //resets the input/output values
        clear: function () {
            this.in_value = '';
            this.out_value = '';
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
});