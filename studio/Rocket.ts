import { Payload } from "./Payload"
import { Cargo } from "./Cargo"
import { Astronaut } from "./Astronaut"
export class Rocket{
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];
    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
    }
    sumMass( items: Payload[] ):number{
        let itemWeight = 0;        
        for (let i=0; i<items.length; i++){
            itemWeight += items[i].massKg;
        }
        return itemWeight;        
    }
    currentMassKg():number{
        let astronautMass = this.sumMass(this.astronauts)
        let cargoMass = this.sumMass(this.cargoItems)
        let allMass = astronautMass + cargoMass
        return allMass
    }
    canAdd(item: Payload): boolean{
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg){
            return true
        }
    }
    addCargo(cargo: Cargo){
        if(this.canAdd(cargo)===true){
            this.cargoItems.push(cargo);
            return true;
        }else{
            return false
        }
    }
    addAstronaut(astronaut: Astronaut){
        if(this.canAdd(astronaut)===true){
            this.astronauts.push(astronaut);
            return true;
        }else{
            return false
        }
    }
}