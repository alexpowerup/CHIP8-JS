class LD_VX_VY extends Instruction{
    constructor(){
        super("LD", 0xF00F, 0x8000, [
            new Argument(0x0f00, 8, ArgumentType.REGISTER),
            new Argument(0x00f0, 4, ArgumentType.REGISTER)
        ]);
    }

    execute(inst, cpu){
        //Load register Y to register X
        var arg0 = this.args[0].rawValue(inst); //X
        var arg1 = this.args[1].rawValue(inst); //Y

        cpu.registers[arg0] = cpu.registers[arg1];
    }
}

Instruction.iset.push(LD_VX_VY);