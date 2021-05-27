class SE_VX_Y extends Instruction{
    constructor(){
        super("SE", 0xF000, 0x3000, [
            new Argument(0x0f00, 8, ArgumentType.REGISTER),
            new Argument(0x00ff, 0, ArgumentType.DATA)
        ]);
    }

    execute(inst, cpu){
        //Skip next instruction if VX == Y
        if(this.args[0].value(inst, cpu) == this.args[1].value(inst, cpu)) cpu.PC+=2;
    }
}

Instruction.iset.push(SE_VX_Y);