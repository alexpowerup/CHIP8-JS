class ADD_VX_Y extends Instruction{
    constructor(){
        super("ADD", 0xF000, 0x7000, [
            new Argument(0x0f00, 8, ArgumentType.REGISTER),
            new Argument(0x00ff, 0, ArgumentType.DATA)
        ]);
    }

    execute(inst, cpu){
        //Add register X and Y and stores the result at register X
        var arg0 = this.args[0].rawValue(inst); //X

        cpu.registers[arg0] += this.args[1].value(inst);
    }
}

Instruction.iset.push(ADD_VX_Y);