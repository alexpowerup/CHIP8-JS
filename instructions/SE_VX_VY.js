class SE_VX_VY extends Instruction{
    constructor(){
        super("SE", 0xF00F, 0x5000, [
            new Argument(0x0f00, 8, ArgumentType.REGISTER),
            new Argument(0x00f0, 4, ArgumentType.REGISTER)
        ]);
    }

    execute(inst, cpu){
        //Skip next instruction if VX == VY
        if(this.args[0].value(inst, cpu) == this.args[1].value(inst, cpu)) cpu.PC+=2;
    }
}

Instruction.iset.push(SE_VX_VY);