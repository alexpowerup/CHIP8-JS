const CPU_START_ADDR = 0x200;

class Cpu {
    constructor(){
        this.reset();
    }

    reset(){
        this.memory = new Uint8Array(4096);
        this.registers = new Uint8Array(16);
        this.stack = new Uint16Array(16);
        this.ST = 0;
        this.DT = 0;
        this.I = 0;
        this.SP = -1;
        this.PC = CPU_START_ADDR;
    }

    load(data, start){
        if(!(data instanceof Uint8Array)){
            console.error("DATA LOAD MUST BE ON UINT8ARRAY TYPE");
            return false;
        }
        if(start === undefined) start = CPU_START_ADDR;

        data.forEach((v, k)=>{
            this.memory[start + k] = v;
        });
    }

    //TODO: implement screen and clear function
    clearScreen(){

    }

    execute(cycles){
        if(cycles<=0 || cycles === undefined){ //run forever until fault
            while(true){
                if(!this.cycle()) break;
            }
        } else { //run until all cycles are done or fault
            for(var i=0; i<cycles; i++){
                if(!this.cycle()) break;
            }
        }
    }

    cycle(){
        //fetch instruction (2 bytes)
        var inst = this.memory[this.PC] << 8;
        inst += this.memory[this.PC+1];

        //decode and execute
        return Instruction.run(inst, this);
    }
}