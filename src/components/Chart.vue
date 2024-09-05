<script setup lang="ts">
import {use} from 'echarts/core';
import {CanvasRenderer} from 'echarts/renderers';
import {BarChart} from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from 'echarts/components';
import VChart, {THEME_KEY} from 'vue-echarts';
import {ref, provide} from 'vue';
import {rollDice} from "@/shared/utilities";
import _ from "lodash";

use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
]);

const sides = 6;
let count = 0,
    dataSet = [],
    xAxisLabels = [],
    xAxisData = [];

for (let i = 1; i <= sides; i++) {
  for (let j = 1; j <= sides; j++) {
    let idx = dataSet.find((o) => {
      return o.key == (i + j)
    });
    if (idx == undefined) {
      xAxisLabels.push(i+j);
      dataSet.push({
        key: (i + j),
        count: 0
      });
    }
  }
}

do {
  const result = rollDice(2, sides);
  const bucket = result.total;
  const idx = _.find(dataSet, (o) => {
    return o.key === bucket;
  });
  idx.count++;
  count++;
} while (count < 100000);

(function () {
  dataSet.forEach(node => {
   // xAxisLabels.push(node.key);
    xAxisData.push(node.count);
  })
})();

provide(THEME_KEY, 'light');

const option = ref({
  title: {
    text: 'Dice Probabilities',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: function(params){
      let percent = params.value/1000 * 100;
      percent = percent.toFixed(2);
      return `${params.name} :  ${params.value} (${percent}%)`
    },
  },
  xAxis: {
    type: 'category',
    data: xAxisLabels
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Dice Probabilities',
      data: xAxisData,
      type: 'bar'
    }
  ]
});
</script>

<template>
  <v-chart class="chart" :option="option" autoresize/>
</template>

<style scoped>
.chart {
  height: 50vh;
}
</style>
