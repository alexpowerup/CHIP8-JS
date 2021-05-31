class SUB_VX_VY extends Instruction{
    constructor(){
        super("SUB", 0xF00F, 0x8005, [
            new Argument(0x0f00, 8, ArgumentType.REGISTER),
            new Argument(0x00f0, 4, ArgumentType.REGISTER)
        ]);
    }

    execute(inst, cpu){
        //Subtract register X and register Y and stores the result at register X
        var arg0 = this.args[0].rawValue(inst); //X
        var arg1 = this.args[1].rawValue(inst); //Y

        cpu.registers[arg0] -= cpu.registers[arg1];
    }
}

Instruction.iset.push(SUB_VX_VY);