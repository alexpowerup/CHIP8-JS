class Argument {
    constructor(mask, shift, type){
        this.mask = mask;
        this.shift = shift;
        this.type = type;
    }

    rawValue(inst){
        return (inst & this.mask) >> this.shift;
    }

    value(inst, cpu){
        switch(this.type){
            case ArgumentType.REGISTER:
                return cpu.registers[this.rawValue(inst)];
                break;
            default:
                return this.rawValue(inst);
                break;
        }
    }

    getValueTxt(inst){
        switch(this.type){
            case ArgumentType.REGISTER:
                return 'V' + this.rawValue(inst).toString(16).toUpperCase();
                break;
            default:
                return '0x' + this.rawValue(inst).toString(16).toUpperCase();
                break;
        }
    }
}

const ArgumentType = {
    DATA: 'D',
    REGISTER: 'R',
    ADDRESS: 'A'
};