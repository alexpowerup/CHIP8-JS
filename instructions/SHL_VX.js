class SHL_VX extends Instruction{
    constructor(){
        super("SHL", 0xF00F, 0x800E [
            new Argument(0x0f00, 8, ArgumentType.REGISTER)
        ]);
    }

    execute(inst, cpu){
        //Shift left one time VX; store most significant (leftest) bit on VF
        var arg0 = this.args[0].rawValue(inst); //X

        cpu.registers[0xF] = cpu.registers[arg0] & 0b10000000;

        cpu.registers[arg0] = cpu.registers[arg0] << 1;
    }
}

Instruction.iset.push(SHL_VX);