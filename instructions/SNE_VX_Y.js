class SNE_VX_Y extends Instruction{
    constructor(){
        super("SNE", 0xF000, 0x4000, [
            new Argument(0x0f00, 8, ArgumentType.REGISTER),
            new Argument(0x00ff, 0, ArgumentType.DATA)
        ]);
    }

    execute(inst, cpu){
        //Skip next instruction if VX != Y
        if(this.args[0].value(inst, cpu) != this.args[1].value(inst, cpu)) cpu.PC+=2;
    }
}

Instruction.iset.push(SNE_VX_Y);