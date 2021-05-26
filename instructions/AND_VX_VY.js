class AND_VX_VY extends Instruction{
    constructor(){
        super("AND", 0xF00F, 0x8001, [
            new Argument(0x0f00, 8, ArgumentType.REGISTER),
            new Argument(0x00f0, 4, ArgumentType.REGISTER)
        ]);
    }

    execute(inst, cpu){
        //Logical AND on VX and VY and store the result at VY
        var arg0 = this.args[0].rawValue(inst); //X
        var arg1 = this.args[1].rawValue(inst); //Y

        cpu.registers[arg1] &= cpu.registers[arg0];
    }
}

Instruction.iset.push(AND_VX_VY);