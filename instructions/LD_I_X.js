class LD_I_X extends Instruction{
    constructor(){
        super("LD I,", 0xF000, 0xA000, [
            new Argument(0x0fff, 0, ArgumentType.DATA)
        ]);
    }

    execute(inst, cpu){
        //Load value X to register I
        cpu.I = this.args[0].value(inst);
    }
}

Instruction.iset.push(LD_I_X);