import angular from 'angular'

export default angular.module('counter', []).component('myCounter', {
  controllerAs: 'vm',
  controller: class MyCounterController {
    count = 0

    handleClick() {
      ++this.count
    }
  },
  template: `
    <h1>Count is {{vm.count}}</h1>
    <button ng-click="vm.handleClick()">Inc</button>
  `
})
