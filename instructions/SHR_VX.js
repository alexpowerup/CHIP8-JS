class SHR_VX_VY extends Instruction{
    constructor(){
        super("SHR", 0xF00F, 0x8006 [
            new Argument(0x0f00, 8, ArgumentType.REGISTER)
        ]);
    }

    execute(inst, cpu){
        //Shift right one time VX; store least significant (rightest) bit on VF
        var arg0 = this.args[0].rawValue(inst); //X

        cpu.registers[0xF] = cpu.registers[arg0] & 0b00000001;

        cpu.registers[arg0] = cpu.registers[arg0] >> 1;
    }
}

Instruction.iset.push(SHR_VX_VY);