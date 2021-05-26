class LD_VX_Y extends Instruction{
    constructor(){
        super("LD", 0xF000, 0x6000, [
            new Argument(0x0f00, 8, ArgumentType.REGISTER),
            new Argument(0x00ff, 0, ArgumentType.DATA)
        ]);
    }

    execute(inst, cpu){
        //Load value Y to register X
        var arg0 = this.args[0].rawValue(inst); //X
        var arg1 = this.args[1].value(inst); //Y

        cpu.registers[arg0] = arg1;
    }
}

Instruction.iset.push(LD_VX_Y);