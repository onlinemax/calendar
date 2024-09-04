import { AtSymbolIcon } from "@heroicons/react/24/solid";
import { isNamedTupleMember } from "typescript";

export namespace Chem{
	class Atom{
		name: string;
		charges: Array<number>;	
		currentCharge: number;
		constructor(name: string, charges: Array<number>){
				this.name = name;
				this.charges = charges;
				this.currentCharge = charges[0];
		}
			
	}
	class Element {
		atom: Atom;
		quantity: number;
		charge: number;
		constructor(atom: Atom, quantity: number){
			this.atom = atom;
			this.quantity = quantity;
			this.charge = quantity * atom.currentCharge;
		}
    }
   
    class Molecule{
        charge: number;
		elements: Array<Element>
        name?: string;
        constructor(charge: number, elements: Array<Element>){
			this.charge = charge;   
			this.elements = elements;
        }

        isIon(){
            return this.charge != 0;
        }

		getName(){
			return this.name;	
		}
       
    }
    class Polyatomic extends Atom{
		elements: Array<Element>;
		constructor(name: string, charges: Array<number>, elements: Array<Element>){
			super(name, charges);	 
			this.elements = elements;
		}
    }
    
}
