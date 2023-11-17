import { LightningElement,track} from 'lwc';

export default class BmiCalculator extends LightningElement {
    @track result;
     @track category;
    @track bmi;
    height;
    weight;

    handleHeight(event) {
        this.height = parseFloat(event.target.value);
    }

    handleWeight(event) {
        this.weight = parseFloat(event.target.value);
    }

    calculateBMI() {
        this.bmi = (this.weight / Math.pow((this.height/100), 2)).toFixed(1);   
        this.result = `Body Mass Index [BMI] is :${this.bmi}`;
    }
    
}